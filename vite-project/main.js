import * as Three from "three";
import "./style.css";

//Scene
const scene = new Three.Scene();

//Creating our Sphere
const geometry = new Three.SphereGeometry(3, 64, 64);
const material = new Three.MeshStandardMaterial({
  color: "#00ff83",
});
const mesh = new Three.Mesh(geometry, material);
scene.add(mesh);

//Light
const light = new Three.PointLight(0xffffff, 70, 100, 1.7);
light.position.set(10, 10, 10);
scene.add(light);

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Camera
const camera = new Three.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

//Render
const canvas = document.querySelector(".webgl");
const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
