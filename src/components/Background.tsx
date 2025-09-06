import { useEffect, useState } from "react";
import random from "random";
import { animate, JSAnimation } from "animejs";

const NUMBER_OF_BLOBS = 20;
const BLOBS_COLORS = [
    "#f87171",
    "#34d399",
    "#60a5fa",
    "#818cf8",
    "#ec4899",
    "#5eead4",
    "#0284c7",
];

const BLOB_PATHS = [
    "M341,216Q299,232,290,245.5Q281,259,285,291Q289,323,261.5,313Q234,303,217,332Q200,361,169.5,374Q139,387,148,323.5Q157,260,117.5,274.5Q78,289,61.5,269.5Q45,250,37.5,225Q30,200,86,190.5Q142,181,126,158Q110,135,110,105.5Q110,76,134.5,74.5Q159,73,179.5,45.5Q200,18,210.5,76Q221,134,260,99Q299,64,283.5,107.5Q268,151,306.5,152Q345,153,364,176.5Q383,200,341,216Z",
    "M323.5,223Q342,246,349,279.5Q356,313,320,314.5Q284,316,268,338Q252,360,226,368.5Q200,377,170.5,379.5Q141,382,144.5,327Q148,272,105.5,285.5Q63,299,97,260.5Q131,222,120,211Q109,200,76.5,174.5Q44,149,98.5,157.5Q153,166,131,120.5Q109,75,140.5,93.5Q172,112,186,65.5Q200,19,221.5,43Q243,67,275,59.5Q307,52,286,102.5Q265,153,264,166.5Q263,180,284,190Q305,200,323.5,223Z",
    "M352.5,229.5Q382,259,359.5,279Q337,299,282.5,269Q228,239,234,281Q240,323,220,295Q200,267,181,291.5Q162,316,147.5,304.5Q133,293,139,266.5Q145,240,136,232Q127,224,130,212Q133,200,104.5,180Q76,160,76.5,135.5Q77,111,94.5,95Q112,79,139.5,88Q167,97,183.5,72Q200,47,209,95.5Q218,144,236,135Q254,126,255.5,142.5Q257,159,315.5,151Q374,143,348.5,171.5Q323,200,352.5,229.5Z",
    "M382,228.5Q374,257,355.5,278.5Q337,300,299.5,292.5Q262,285,250,301.5Q238,318,219,329Q200,340,178.5,335.5Q157,331,149.5,305Q142,279,93,296Q44,313,71.5,273Q99,233,60.5,216.5Q22,200,39,176.5Q56,153,83,144Q110,135,117,115Q124,95,132.5,56Q141,17,170.5,36.5Q200,56,230.5,34Q261,12,245,86Q229,160,274.5,136Q320,112,337,131Q354,150,372,175Q390,200,382,228.5Z",
    "M304,211.5Q271,223,295,254.5Q319,286,310,312.5Q301,339,273.5,341Q246,343,223,304.5Q200,266,173.5,314.5Q147,363,117.5,358.5Q88,354,112.5,299.5Q137,245,88,248.5Q39,252,41.5,226Q44,200,52,177.5Q60,155,50,119.5Q40,84,89.5,99.5Q139,115,150,97Q161,79,180.5,88Q200,97,230.5,54Q261,11,245.5,85Q230,159,280.5,132Q331,105,301.5,141Q272,177,304.5,188.5Q337,200,304,211.5Z",
    "M315.5,226Q360,252,297,238.5Q234,225,253.5,263Q273,301,262,329.5Q251,358,225.5,337.5Q200,317,184.5,306.5Q169,296,160.5,281Q152,266,96.5,290.5Q41,315,33.5,285.5Q26,256,50.5,228Q75,200,91,185Q107,170,127,165.5Q147,161,144,140Q141,119,160,126.5Q179,134,189.5,124Q200,114,211.5,121Q223,128,251,109.5Q279,91,259.5,131Q240,171,297.5,160.5Q355,150,313,175Q271,200,315.5,226Z",
    "M320,214.5Q289,229,299.5,254.5Q310,280,288,285.5Q266,291,262.5,336.5Q259,382,229.5,359.5Q200,337,177.5,338Q155,339,159.5,294.5Q164,250,110.5,277Q57,304,89,265Q121,226,92.5,213Q64,200,42,170.5Q20,141,58,133Q96,125,93.5,87.5Q91,50,128,71Q165,92,182.5,52.5Q200,13,230,14Q260,15,268.5,54.5Q277,94,304.5,99Q332,104,305.5,139Q279,174,315,187Q351,200,320,214.5Z",
    "M280,200Q200,100,120,200Q200,300,280,200",
    "M300,150Q350,200,300,250Q250,300,200,250Q150,200,200,150Q250,100,300,150",
    "M350,200Q300,100,200,150Q100,200,150,300Q200,350,300,300Q400,200,350,200",
    "M250,180Q320,160,340,230Q280,300,200,280Q120,200,140,130Q200,60,250,180",
    "M320,160Q380,220,320,280Q260,340,200,280Q140,220,200,160Q260,100,320,160",
    "M300,200Q350,150,400,200Q350,250,300,300Q250,350,200,300Q150,250,100,200Q150,150,200,100Q250,50,300,200",
    "M280,200Q320,120,380,160Q420,200,380,240Q320,280,280,200Q240,120,200,160Q160,200,200,240Q240,280,280,200"
];

interface Blob {
    color: string;
    size: number;
    left: number;
    top: number;
    pathIndex: number;
    rotation: number;
    opacity: number;
}

function Background() {
    const [blobs, setBlobs] = useState<Blob[]>([]);

    useEffect(() => {
        const generateBlobs = () => {
            const newBlobs = [];

            const MAX_BLOB_SIZE = Math.floor(window.innerWidth * 0.2);
            const MIN_BLOB_SIZE = 80;

            for (let i = 0; i < NUMBER_OF_BLOBS; i++) {
                const randomBlobColor = random.int(0, BLOBS_COLORS.length - 1);
                const randomBlobSize = random.int(MIN_BLOB_SIZE, MAX_BLOB_SIZE);
                const randomPathIndex = random.int(0, BLOB_PATHS.length - 1);
                const randomRotation = random.int(0, 360);
                const randomOpacity = random.float(0.3, 0.7);
                const blobLeft = random.int(-50, window.innerWidth - randomBlobSize + 50);
                const blobTop = random.int(-50, window.innerHeight - randomBlobSize + 50);

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

            const maxMovement = Math.floor(Math.min(blobs[i].size * 0.6, 150));
            const randomX = random.int(-maxMovement, maxMovement);
            const randomY = random.int(-maxMovement, maxMovement);
            const randomRotation = random.int(-30, 30);

            const randomDuration = random.int(6000, 12000);
            const randomDelay = random.int(0, 1000);

            const animation = animate(targetBlob, {
                x: randomX,
                y: randomY,
                rotate: `+=${randomRotation}deg`,
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
        <div className="bg-slate-100 fixed inset-0 overflow-hidden pointer-events-none z-0 blur-sm">
            {blobs.map((blob, index) => (
                <div
                    key={index}
                    id={`bg-blob-${index}`}
                    className="absolute"
                    style={{
                        width: `${blob.size}px`,
                        height: `${blob.size}px`,
                        left: `${blob.left}px`,
                        top: `${blob.top}px`,
                        transform: `rotate(${blob.rotation}deg)`,
                        opacity: blob.opacity,
                    }}>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 400 400"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={BLOB_PATHS[blob.pathIndex]}
                            fill={blob.color}
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
}

export default Background;