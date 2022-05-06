import { useEffect, useRef } from 'react';

const useCanvas = (draw, options={}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext(options.context || '2d');
        let frameCount = 0;
        let animationFrameId;

        // called recursively with requestAnimationFrame
        const render = () => {
            frameCount++;
            if (options.predraw) options.predraw(context, canvas);
            if (options.init) options.init(context, canvas);
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return canvasRef;
};

export default useCanvas;