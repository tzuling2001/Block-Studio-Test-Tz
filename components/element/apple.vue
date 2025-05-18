<template>
  <!-- 畫布：Three.js 渲染場景的容器 -->
  <canvas ref="canvas" class="lg:w-2/5 lg:h-[417px] w-full h-[417px] block" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import gsap from "gsap";

const canvas = ref(null);
const readyToTrack = ref(false); // ✅ 控制何時啟用追蹤

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.value.clientWidth / canvas.value.clientHeight,
    0.1,
    1000
  );
  let zoom = 10;
  camera.position.set(0, 1, zoom);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const mouse = { x: 0, y: 0 };
  const targetRotation = { x: 0, y: 0 };

  const loader = new OBJLoader();
  loader.load(
    "/models/2023F2E-TEST-1-1.obj",
    (obj) => {
      obj.scale.set(20, 20, 20);
      obj.rotation.set(0, 0, -Math.PI / 15);

      obj.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xe01111,
            roughness: 1,
            metalness: 0.3,
            transparent: true,
            opacity: 1,
          });
        }
      });

      scene.add(obj);

      obj.position.y = 0;
      obj.rotation.y = 0;

      gsap.to(obj.position, {
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      });
      gsap.to(obj.rotation, {
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          readyToTrack.value = true; // ✅ 動畫完成後啟用滑鼠追蹤
        },
      });

      // 滑鼠移動控制（延遲啟用）
      window.addEventListener("mousemove", (event) => {
        if (!readyToTrack.value) return;
        const bounds = canvas.value.getBoundingClientRect();
        const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
        targetRotation.y = relativeX * Math.PI * 2;
        targetRotation.x = relativeY * Math.PI;
      });

      let isHovering = false;

      canvas.value.addEventListener("mouseenter", () => {
        isHovering = true;
        document.body.style.overflow = "hidden";
      });

      canvas.value.addEventListener("mouseleave", () => {
        isHovering = false;
        document.body.style.overflow = "";
      });

      canvas.value.addEventListener(
        "wheel",
        (e) => {
          if (!isHovering) return;
          e.preventDefault();
          zoom += e.deltaY * 0.01;
          zoom = Math.min(Math.max(3, zoom), 8);
        },
        { passive: false }
      );

      animate();

      function animate() {
        requestAnimationFrame(animate);

        obj.rotation.y += (targetRotation.y - obj.rotation.y) * 0.1;
        obj.rotation.x += (targetRotation.x - obj.rotation.x) * 0.1;

        camera.position.z = zoom;
        renderer.render(scene, camera);
      }
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.error("Error loading OBJ:", error);
    }
  );

  window.addEventListener("resize", () => {
    const width = canvas.value.clientWidth;
    const height = canvas.value.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
});
</script>

<style scoped>
canvas {
  touch-action: none;
  cursor: grab;
}
</style>
