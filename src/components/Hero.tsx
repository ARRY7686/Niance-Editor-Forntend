import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Hero() {
    const mountRef = useRef<HTMLDivElement>(null);
    const [resize, setResize] = useState(false);
    const navigate = useNavigate();

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

                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());

                const pivot = new THREE.Object3D();
                pivot.position.copy(center);
                scene.add(pivot);
                pivot.add(model);

                model.position.sub(center);

                model.scale.set(10, 10, 10);

                model.traverse((child: { material: any; }) => {
                    if (child instanceof THREE.Mesh) {
                        child.material = new THREE.MeshStandardMaterial({ color: 0xfffffff });
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
        <div className="flex flex-col items-center justify-center h-auto">
            <aside className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mt-50">
                <section className="text-center md:text-left">
                    <h1 className="text-white text-6xl font-bold">
                        <span>Welcome to Niance Editor</span>
                    </h1>
                    <br />
                    <h1 className="text-white text-4xl font-semibold">
                        <span>An editor fully incorporated in your web</span>
                    </h1>

                    <div className="mt-10 flex flex-col md:flex-row gap-4">
                        <a 
                            onClick={() => navigate('/project')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-white text-lg font-semibold bg-blue-600 rounded-md shadow-md transition transform duration-300 ease-in-out hover:bg-blue-500 hover:scale-105"
                        >
                            Try It Now
                        </a>
                        <a 
                            href="https://github.com/ojasmaheshwari/CodeEditorFromScratch-JS" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-white text-lg font-semibold bg-gray-800 rounded-md shadow-md transition transform duration-300 ease-in-out hover:bg-gray-700 hover:scale-105"
                        >
                            GitHub (Editor)
                        </a>
                        <a 
                            href="https://github.com/ARRY7686/Niance-Editor-Forntend" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-white text-lg font-semibold bg-gray-800 rounded-md shadow-md transition transform duration-300 ease-in-out hover:bg-gray-700 hover:scale-105"
                        >
                            GitHub (Website)
                        </a>
                    </div>
                </section>
                <section className="flex justify-center items-center">
                    <div className="w-128 h-128 flex justify-center items-center" ref={mountRef}></div>
                </section>
            </aside>

            <div className="flex justify-center items-center mt-8 space-x-8">
                {[
                    {
                        title: "Completely Built from Scratch",
                        description: "The editor does not rely on any third-party libraries or dependencies",
                    },
                    {
                        title: "Custom Syntax Highlighting",
                        description: "Uses regular expressions to apply syntax highlighting dynamically",
                    },
                    {
                        title: "Lightweight and Browser-Based",
                        description: "Unlike popular editors like Monaco, this editor is minimalistic and built for in-browser use.",
                    }
                ].map((card, index) => (
                    <div
                        key={index}
                        className="w-80 h-50 bg-transparent backdrop-blur-sm p-6 rounded-lg shadow-lg text-center border border-white transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    >
                        <h3 className="text-white text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-300">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;
