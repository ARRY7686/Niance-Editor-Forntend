import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Hero() {
    const mountRef = useRef<HTMLDivElement>(null);
    const [resize, setResize] = useState(false);
    
        useEffect(() => {
            const mount = mountRef.current;
            if (!mount) return;
    
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(mount.clientWidth, mount.clientHeight);
            renderer.setClearColor(0x000000, 0); // Fully transparent
            mount.appendChild(renderer.domElement);
    
            const scene = new THREE.Scene();
    
            const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
            camera.position.set(0, 2, 5);
            camera.lookAt(0, 0, 0);
    
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
            directionalLight.position.set(5, 10, 5);
            scene.add(directionalLight);
    
            const loader = new GLTFLoader();
            loader.load(
                '/scene.gltf',
                (gltf: { scene: any; }) => {
                    const model = gltf.scene;
    
                    // ✅ Compute the center of the model
                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
    
                    // ✅ Create a pivot point at the model's center
                    const pivot = new THREE.Object3D();
                    pivot.position.copy(center);
                    scene.add(pivot);
                    pivot.add(model);
    
                    // ✅ Move the model so its center aligns with the pivot
                    model.position.sub(center);
    
                    // ✅ Scale the model (10x larger)
                    model.scale.set(10, 10, 10);
    
                    // ✅ Change model color to black
                    model.traverse((child: { material: any; }) => {
                        if (child instanceof THREE.Mesh) {
                            child.material = new THREE.MeshStandardMaterial({ color: 0x000000 });
                        }
                    });
    
                    const animate = () => {
                        requestAnimationFrame(animate);
                        pivot.rotation.x += 0.01; // Rotate on X-axis
                        pivot.rotation.y += 0.01; // Rotate on Y-axis
                        pivot.rotation.z += 0.01; // Rotate on Z-axis
                        renderer.render(scene, camera);
                    };
                    animate();
                },
                undefined,
                (error: any) => console.error('Error loading the model:', error)
            );
    
            const handleResize = () => {
                if (mount) {
                    setResize(!resize);
                    renderer.setSize(mount.clientWidth, mount.clientHeight);
                    camera.aspect = mount.clientWidth / mount.clientHeight;
                    camera.updateProjectionMatrix();
                }
            };
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('resize', handleResize);
                mount.removeChild(renderer.domElement);
            };
        }, [resize]);


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <aside className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <section className="text-center md:text-left">
                    <h1 className="text-white text-6xl font-bold">
                        <span>Welcome to Niance Editor</span>
                    </h1>
                    <br />
                    <h1 className="text-white text-4xl font-semibold">
                        <span>An editor fully incorporated in your web</span>
                    </h1>
                </section>
                <section className="flex justify-center items-center">
                    <div className="w-128 h-128 flex justify-center items-center" ref={mountRef}></div>
                </section>
            </aside>
        </div>
    );
}

export default Hero;
