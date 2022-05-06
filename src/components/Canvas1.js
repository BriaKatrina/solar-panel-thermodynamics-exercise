import React, {useEffect, useRef} from 'react';
import useCanvas from '../helpers/hooks/useCanvas';
import resizeCanvas from '../helpers/resizeCanvas';

function Canvas1(props) {
    const imageObj1 = new Image();

    const _init = (context, canvas) => {

    }

    /** @param {CanvasRenderingContext2D} context*/
    const _predraw = (context, canvas) => {
        context.save();
        resizeCanvas(context, canvas);
        const {width, height} = context.canvas;
        context.clearRect(0, 0, width, height);
    }

    /** @param {CanvasRenderingContext2D} ctx*/
    const _draw = (ctx, frameCount) => {

        //ctx.scale(2, 2);

        ctx.fillStyle = "#290e5e";
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // draw rect with slight offset under mainbox.png
        ctx.fillStyle = "#0273d6";
        ctx.fillRect(0, 0, 4, ctx.canvas.height); // draw border
        ctx.fillRect(ctx.canvas.width - 4, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillRect(0, 0, ctx.canvas.width, 4);
        ctx.fillRect(0, ctx.canvas.height - 4, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#00aaff";
        ctx.beginPath();
        ctx.arc(50 + 150*Math.sin(frameCount*0.05)**2, 100, 20, 0, 2*Math.PI);
        // ctx.drawImage(imageObj1, 0, 0);
        ctx.fill();
    }

    const {draw=_draw, predraw=_predraw, init=_init, options, ...rest} = props;
    const canvasRef = useCanvas(draw, {predraw, init});

    return <canvas ref={canvasRef} {...rest}/>;
}

export default Canvas1;