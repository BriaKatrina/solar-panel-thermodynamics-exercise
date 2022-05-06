import React, {useEffect, useRef} from 'react';
import useCanvas from '../helpers/hooks/useCanvas';
import resizeCanvas from '../helpers/resizeCanvas';

/** @param {CanvasRenderingContext2D} context*/
const _predraw = (context, canvas) => {
    context.save();
    resizeCanvas(context, canvas);
    const {width, height} = context.canvas;
    context.clearRect(0, 0, width, height);
}

function Canvas(props) {
    const {draw, predraw=_predraw, options, ...rest} = props;
    const {context, ...moreConfig} = options || {};
    const canvasRef = useCanvas(draw, {predraw});

    return <canvas ref={canvasRef} {...rest}/>;
}

export default Canvas;