function resizeCanvas(context, canvas) {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio:ratio=1 } = window
        // canvas.width = width*ratio
        // canvas.height = height*ratio
        canvas.width = window.innerWidth;
        // context.scale(ratio, ratio)
        return true
    }

    return false
}

export default resizeCanvas;