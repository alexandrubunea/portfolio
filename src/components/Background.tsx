import { useEffect, useState } from "react";
import random from "random";
import { animate, type JSAnimation } from "animejs";

const NUMBER_OF_BLOBS = 7;
const BLOBS_COLORS = [
    "#BB41F0",
    "#F0417E",
    "#F041E7",
    "#8241F0",
    "#F04D41",
    "#F091EB",
    "#C0F20C",
    "#27F207",
    "#22F2A6",
    "#F20775",
    "#F20746",
    "#E770C2",
    "#62EDB2",
    "#37F2EE",
    "#F7C619"
];

const BLOB_PATHS = [
    "M41,-56.8C54.4,-46.7,67.4,-36.4,73.3,-22.7C79.3,-9.1,78.1,8,68.9,18.1C59.7,28.2,42.5,31.5,29.6,38.1C16.8,44.7,8.4,54.6,-4.3,60.5C-17,66.4,-34,68.3,-48.4,62.2C-62.9,56.2,-74.8,42.2,-79.8,26.1C-84.9,10,-83.2,-8.2,-73.8,-20C-64.5,-31.7,-47.6,-37,-34,-47.1C-20.4,-57.2,-10.2,-72.2,1.8,-74.6C13.8,-77.1,27.6,-67,41,-56.8Z",
    "M32.3,-41.2C45,-35.1,60.8,-30,67.1,-19.7C73.3,-9.4,70.1,6.2,65.8,22C61.5,37.8,56.2,53.9,45,65.2C33.9,76.6,16.9,83.1,0.8,82C-15.3,80.8,-30.5,71.9,-42.9,61C-55.3,50.1,-64.8,37.1,-65.2,24C-65.7,10.8,-57.1,-2.5,-51.8,-16.3C-46.6,-30.1,-44.6,-44.4,-36.5,-52C-28.4,-59.6,-14.2,-60.5,-2.2,-57.4C9.8,-54.3,19.5,-47.3,32.3,-41.2Z",
    "M48.5,-68.9C61.9,-57,71.1,-41.6,76.5,-24.9C82,-8.2,83.5,9.7,79.6,27.1C75.7,44.5,66.3,61.4,52.1,67.9C37.9,74.4,18.9,70.6,3.3,66C-12.3,61.4,-24.6,56.1,-30.8,47C-37,37.9,-37.1,25,-41.5,13.1C-45.8,1.2,-54.5,-9.6,-55.2,-21.2C-55.9,-32.8,-48.8,-45.1,-38.3,-57.9C-27.8,-70.8,-13.9,-84.3,1.8,-86.9C17.5,-89.4,35.1,-80.9,48.5,-68.9Z",
    "M24.9,-34.3C32.9,-28.4,40.5,-22,46.9,-12.8C53.3,-3.5,58.5,8.6,57.2,20.4C55.9,32.3,48.2,44,37.6,50C27,56,13.5,56.4,2.6,52.9C-8.3,49.3,-16.6,41.7,-27.2,35.7C-37.9,29.7,-50.9,25.2,-55.4,16.7C-60,8.2,-56.1,-4.4,-53.2,-18.5C-50.3,-32.6,-48.3,-48.2,-39.6,-53.9C-30.9,-59.7,-15.4,-55.6,-3.5,-50.7C8.4,-45.9,16.8,-40.3,24.9,-34.3Z",
    "M45.3,-71.8C51.6,-57.7,44.8,-35,49.1,-17.1C53.4,0.9,68.8,14.1,67.2,22.7C65.6,31.3,47.1,35.3,33,37.7C19,40.1,9.5,41,-0.2,41.3C-9.9,41.5,-19.7,41.1,-31,37.8C-42.4,34.5,-55.2,28.3,-56.9,19.4C-58.6,10.4,-49.2,-1.3,-47.5,-18.1C-45.7,-34.9,-51.5,-56.9,-44.9,-70.8C-38.2,-84.7,-19.1,-90.6,0.2,-90.8C19.5,-91.1,39,-85.8,45.3,-71.8Z",
    "M41.9,-56.1C51.3,-50.8,53.9,-34.6,59.7,-18.8C65.6,-3.1,74.8,12.1,72.9,25.5C71,38.8,58,50.3,44,61.7C30,73.2,15,84.5,-0.4,85C-15.8,85.6,-31.6,75.4,-44.4,63.6C-57.1,51.8,-66.9,38.3,-67.3,24.8C-67.6,11.3,-58.5,-2.4,-55.3,-19.7C-52.1,-37,-54.7,-57.9,-46.4,-63.6C-38.2,-69.3,-19.1,-59.8,-1.4,-57.8C16.2,-55.8,32.5,-61.4,41.9,-56.1Z",
    "M51.5,-64.5C65.7,-60.6,75.4,-44.1,81.1,-26.4C86.9,-8.6,88.8,10.4,84.3,28.3C79.7,46.2,68.8,62.9,53.7,65.8C38.6,68.6,19.3,57.6,0.8,56.6C-17.7,55.5,-35.4,64.3,-42,58.6C-48.5,53,-43.9,32.9,-48.7,16.3C-53.4,-0.3,-67.6,-13.5,-65.8,-22.2C-64.1,-30.9,-46.4,-35.2,-32.7,-39.2C-19.1,-43.3,-9.6,-47,4.6,-53.3C18.7,-59.6,37.4,-68.4,51.5,-64.5Z",
    "M35,-51.9C46.3,-39.9,57.2,-31,57.6,-20.8C58.1,-10.6,48.1,0.9,45.1,16.1C42.1,31.2,46.1,50.1,39.7,63.1C33.4,76.2,16.7,83.4,-0.3,83.8C-17.3,84.2,-34.5,77.7,-42.2,65.1C-49.9,52.5,-48.1,33.8,-48,19.1C-48,4.4,-49.7,-6.2,-46.8,-15.3C-43.9,-24.3,-36.3,-32,-27.7,-44.8C-19.2,-57.7,-9.6,-75.8,1.1,-77.4C11.8,-78.9,23.7,-63.9,35,-51.9Z",
    "M29.6,-35.9C44,-30.4,65,-29.2,71.4,-20.6C77.7,-12,69.5,4,60,15.2C50.4,26.5,39.6,33,29.4,39.1C19.2,45.2,9.6,50.8,-0.1,50.9C-9.8,51.1,-19.5,45.7,-27.7,39C-36,32.2,-42.6,24.1,-47.5,14.2C-52.3,4.3,-55.4,-7.3,-54.4,-19.9C-53.4,-32.5,-48.3,-46.1,-38.6,-53C-28.9,-60,-14.4,-60.5,-3.4,-55.8C7.7,-51.1,15.3,-41.4,29.6,-35.9Z",
    "M31.1,-50.4C38.5,-37.5,41.4,-25.9,46.8,-14.1C52.3,-2.2,60.3,10,61.4,24C62.5,38.1,56.6,53.9,45.2,58.1C33.8,62.3,16.9,54.9,-0.4,55.5C-17.7,56.1,-35.5,64.7,-50.7,61.7C-65.9,58.7,-78.7,44.2,-76,30C-73.3,15.8,-55.3,1.8,-48.1,-14.1C-40.8,-30.1,-44.5,-48.2,-38.3,-61.5C-32.1,-74.8,-16,-83.3,-2.1,-80.5C11.9,-77.6,23.8,-63.4,31.1,-50.4Z",
    "M40.4,-52.1C55.4,-44.6,72.9,-37,77.8,-24.7C82.7,-12.3,75,4.8,64,15.3C53.1,25.9,38.9,29.9,27.6,33.4C16.4,36.9,8.2,39.9,-3.4,44.5C-15,49.2,-30,55.5,-38.3,51.1C-46.7,46.7,-48.5,31.5,-49.5,18.5C-50.4,5.4,-50.5,-5.5,-47,-14.9C-43.5,-24.4,-36.4,-32.3,-28,-42C-19.5,-51.7,-9.8,-63.1,1.4,-65.1C12.7,-67.1,25.3,-59.7,40.4,-52.1Z"
];

interface Blob {
    color: string;
    size: number;
    left: number;
    top: number;
    pathIndex: number;
    rotation: number;
}

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

const lightenColor = (hex: string, percent: number) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;

    const r = Math.min(255, Math.floor(rgb.r + (255 - rgb.r) * percent));
    const g = Math.min(255, Math.floor(rgb.g + (255 - rgb.g) * percent));
    const b = Math.min(255, Math.floor(rgb.b + (255 - rgb.b) * percent));

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

const darkenColor = (hex: string, percent: number) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;

    const r = Math.floor(rgb.r * (1 - percent));
    const g = Math.floor(rgb.g * (1 - percent));
    const b = Math.floor(rgb.b * (1 - percent));

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

function Background() {
    const [blobs, setBlobs] = useState<Blob[]>([]);

    useEffect(() => {
        const generateBlobs = () => {
            const newBlobs = [];

            const MAX_BLOB_SIZE = Math.floor(window.innerWidth * 0.3);
            const MIN_BLOB_SIZE = Math.floor(window.innerWidth * 0.2);

            for (let i = 0; i < NUMBER_OF_BLOBS; i++) {
                const randomBlobColor = random.uniformInt(0, BLOBS_COLORS.length - 1)();
                const randomBlobSize = random.uniformInt(MIN_BLOB_SIZE, MAX_BLOB_SIZE)();
                const randomPathIndex = random.uniformInt(0, BLOB_PATHS.length - 1)();
                const randomRotation = random.uniformInt(0, 360)();
                const randomOpacity = random.float(0.4, 0.8);
                const blobLeft = random.uniformInt(-50, window.innerWidth - randomBlobSize + 50)();
                const blobTop = random.uniformInt(-50, window.innerHeight - randomBlobSize + 50)();

                newBlobs.push({
                    color: BLOBS_COLORS[randomBlobColor],
                    size: randomBlobSize,
                    left: blobLeft,
                    top: blobTop,
                    pathIndex: randomPathIndex,
                    rotation: randomRotation,
                    opacity: randomOpacity,
                });
            }

            setBlobs(newBlobs);
        };

        generateBlobs();

        const handleResize = () => {
            generateBlobs();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (blobs.length === 0) return;

        const animations: JSAnimation[] = [];

        for (let i = 0; i < NUMBER_OF_BLOBS; i++) {
            const targetBlob = `#bg-blob-${i}`;
            const blob = blobs[i];

            const halfSize = Math.round(blob.size / 2);
            const maxLeftMovement = Math.min(
                blob.left + halfSize,
                window.innerWidth - (blob.left + halfSize)
            );
            const maxTopMovement = Math.min(
                blob.top + halfSize,
                window.innerHeight - (blob.top + halfSize)
            );

            const maxMovement = Math.min(
                maxLeftMovement,
                maxTopMovement,
                Math.round(blob.size * 1.2)
            );

            const minMovement = Math.max(20, Math.round(blob.size * 0.2));
            const actualMaxMovement = Math.max(minMovement, maxMovement);

            const randomMovment = random.uniformInt(-actualMaxMovement, actualMaxMovement);
            const randomX = randomMovment();
            const randomY = randomMovment();

            const randomRotation = random.uniformInt(-45, 45)();

            const movementDistance = Math.round(Math.sqrt(randomX * randomX + randomY * randomY));
            const baseSpeed = 30;
            const baseDuration = Math.round((movementDistance / baseSpeed) * 1000);

            const durationVariation = random.float(0.7, 1.3);
            const randomDuration = Math.round(Math.max(
                4000,
                Math.min(20000, baseDuration * durationVariation)
            ));

            const animation = animate(targetBlob, {
                x: randomX,
                y: randomY,
                rotate: `+=${randomRotation}deg`,
                duration: randomDuration,
                ease: 'inOutSine',
                loop: true,
                alternate: true
            });

            animations.push(animation);
        }

        return () => {
            animations.forEach(animation => {
                if (animation && typeof animation.pause === 'function') {
                    animation.pause();
                }
            });
        };
    }, [blobs]);

    return (
        <div className="bg-slate-50 fixed inset-0 overflow-hidden pointer-events-none -z-50 blur-xs">
            {blobs.map((blob, index) => {
                const lightColor = lightenColor(blob.color, 0.4);
                const darkColor = darkenColor(blob.color, 0.3);
                const shadowColor = darkenColor(blob.color, 0.6);

                return (
                    <div
                        key={index}
                        id={`bg-blob-${index}`}
                        className="absolute"
                        style={{
                            width: `${blob.size}px`,
                            height: `${blob.size}px`,
                            left: `${blob.left}px`,
                            top: `${blob.top}px`,
                            filter: `drop-shadow(${blob.size * 0.05}px ${blob.size * 0.08}px ${blob.size * 0.15}px ${shadowColor}40)`,
                        }}>
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 400 400"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient
                                    id={`balloonGradient-${index}`}
                                    cx="30%"
                                    cy="25%"
                                    r="70%"
                                    fx="25%"
                                    fy="20%">
                                    <stop offset="0%" stopColor={lightColor} stopOpacity="1" />
                                    <stop offset="30%" stopColor={blob.color} stopOpacity="1" />
                                    <stop offset="70%" stopColor={darkColor} stopOpacity="1" />
                                    <stop offset="100%" stopColor={shadowColor} stopOpacity="1" />
                                </radialGradient>

                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <filter id={`innerShadow-${index}`} x="0%" y="0%" width="100%" height="100%">
                                    <feOffset dx="2" dy="3" />
                                    <feGaussianBlur stdDeviation="2" result="offset-blur" />
                                    <feFlood floodColor={shadowColor} floodOpacity=".1" />
                                    <feComposite in2="offset-blur" operator="in" />
                                    <feComposite in2="SourceGraphic" operator="over" />
                                </filter>
                            </defs>

                            <path
                                d={BLOB_PATHS[blob.pathIndex]}
                                fill={`url(#balloonGradient-${index})`}
                                style={{
                                    filter: `url(#innerShadow-${index})`,
                                }}
                                transform="translate(100 100)"
                            />

                            <path
                                d={BLOB_PATHS[blob.pathIndex]}
                                fill={`url(#highlight-${index})`}
                                style={{
                                    mixBlendMode: 'overlay',
                                }}
                            />

                            <ellipse
                                cx="140"
                                cy="120"
                                rx="30"
                                ry="50"
                                fill="url(#highlight-${index})"
                                transform="rotate(-20 140 120)"
                            />
                        </svg>
                    </div>
                )
            })}
        </div>
    );
}

export default Background;