import { useEffect, useState } from "react";
import random from "random";
import { animate, JSAnimation } from "animejs";

const NUMBER_OF_BLOBS = 10;
const BLOBS_COLORS = [
    "bg-rose-400/50",
    "bg-emerald-400/50",
    "bg-blue-400/50",
    "bg-indigo-400/50",
    "bg-pink-500/50",
    "bg-teal-300/50",
    "bg-sky-600/50"
];

interface Blob {
    color: string;
    size: number;
    left: number;
    top: number;
}

function Background() {
    const [blobs, setBlobs] = useState<Array<Blob>>([]);

    useEffect(() => {
        const generateBlobs = () => {
            const newBlobs = [];

            const MAX_BLOB_SIZE = Math.floor(window.innerWidth * 0.25);
            const MIN_BLOB_SIZE = 50;

            for (let i = 0; i < NUMBER_OF_BLOBS; i++) {
                const randomBlobColor = random.int(0, BLOBS_COLORS.length - 1);
                const randomBlobSize = random.int(MIN_BLOB_SIZE, MAX_BLOB_SIZE);
                const blobLeft = random.int(0, window.innerWidth - randomBlobSize);
                const blobTop = random.int(0, window.innerHeight - randomBlobSize);

                newBlobs.push({
                    color: BLOBS_COLORS[randomBlobColor],
                    size: randomBlobSize,
                    left: blobLeft,
                    top: blobTop,
                });
            }

            setBlobs(newBlobs);
        };

        generateBlobs();

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

            const maxMovement = Math.floor(Math.min(blobs[i].size * 0.8, 200));
            const randomX = random.int(-maxMovement, maxMovement);
            const randomY = random.int(-maxMovement, maxMovement);

            const randomDuration = random.int(4000, 8000);
            const randomDelay = random.int(0, 500);

            const animation = animate(targetBlob, {
                x: randomX,
                y: randomY,
                duration: randomDuration,
                delay: randomDelay,
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
        <div className="absolute top-0 left-0 h-screen w-screen -z-10 overflow-hidden blur-xl">
            {blobs.map((blob, index) => (
                <div
                    key={`bg-blob-${index}`}
                    id={`bg-blob-${index}`}
                    className={`absolute rounded-full ${blob.color}`}
                    style={{
                        width: `${blob.size}px`,
                        height: `${blob.size}px`,
                        left: `${blob.left}px`,
                        top: `${blob.top}px`,
                    }}
                />
            ))}
        </div>
    );
}

export default Background;