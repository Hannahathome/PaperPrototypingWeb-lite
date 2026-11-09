// Setup check (phase 1): proves that three.js, OrbitControls and jsPDF load through the import
// map, and shows a spinning placeholder in the 3D panel. Replaced by each tool's app.js later.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { jsPDF } from 'jspdf';

const status = document.getElementById('status');

try {
	const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'landscape' });
	const [w, h] = [pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight()];

	const host = document.getElementById('view3d');
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	host.append(renderer.domElement);

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(40, 1, 1, 1000);
	camera.position.set(60, 50, 80);
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;

	const box = new THREE.Mesh(
		new THREE.BoxGeometry(30, 30, 30),
		new THREE.MeshStandardMaterial({ color: 0xf4f4f5 }),
	);
	box.add(new THREE.LineSegments(new THREE.EdgesGeometry(box.geometry), new THREE.LineBasicMaterial({ color: 0x18181b })));
	scene.add(box, new THREE.AmbientLight(0xffffff, 1.5));
	const light = new THREE.DirectionalLight(0xffffff, 2);
	light.position.set(50, 80, 60);
	scene.add(light);

	const resize = () => {
		const { clientWidth, clientHeight } = host;
		renderer.setSize(clientWidth, clientHeight);
		camera.aspect = clientWidth / clientHeight;
		camera.updateProjectionMatrix();
	};
	new ResizeObserver(resize).observe(host);
	renderer.setAnimationLoop(() => {
		controls.update();
		renderer.render(scene, camera);
	});

	status.textContent = `Setup OK: three.js r${THREE.REVISION}, jsPDF ${jsPDF.version} (A4 = ${w.toFixed(0)} × ${h.toFixed(0)} mm).`;
} catch (error) {
	status.className = 'status error';
	status.textContent = `Setup failed: ${error instanceof Error ? error.message : String(error)}`;
	throw error;
}
