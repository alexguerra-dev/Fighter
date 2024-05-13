import './index.css'

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
    SCALE: 4,
}

window.onload = function () {
    /**
     * The canvas element in the html document.
     */
    const canvasElement = document.querySelector('canvas')

    /**
     * The "canvas context". I am not sure what this actually means. Need to learn how to draw.
     */
    const context = canvasElement.getContext('2d')

    // Resize the canvas
    canvasElement.width = GameViewport.WIDTH
    canvasElement.height = GameViewport.HEIGHT

    // Do it in css to scale correctly

    canvasElement.style.width = `${GameViewport.WIDTH * GameViewport.SCALE}px`
    canvasElement.style.height = `${GameViewport.HEIGHT * GameViewport.SCALE}px`
    console.log(canvasElement)
    console.log(context)
}
