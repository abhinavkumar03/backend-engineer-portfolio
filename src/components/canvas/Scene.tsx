"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.cjs";
import * as THREE from "three";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Network(props: any) {
    const ref = useRef<THREE.Points>(null!);

    // Generate points in a sphere
    const [sphere] = useState(() => {
        const data = new Float32Array(3000); // Reduced count for "cleaner" look
        return random.inSphere(data, { radius: 1.2 });
    });

    useFrame((state, delta) => {
        if (ref.current) {
            // Slow, deliberate rotation
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            {/* @ts-ignore */}
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3B82F6" // Primary Blue
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-background">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Network />
            </Canvas>
        </div>
    );
}
