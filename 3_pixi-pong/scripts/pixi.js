// New PixiJS Application
const app = new PIXI.Application();
// Canvas color, width, and height
await app.init({ backgroundColor: "rgb(22, 69, 85)", width: 800, height: 800 });
// Append the canvas to the DOM body
document.body.appendChild(app.canvas);
// document.querySelector("#game").appendChild(app.canvas);

// Draw the Circle Graphic
const circle = new PIXI.Graphics()
circle.beginFill("#f5ef42")
circle.drawCircle(0, 0, 6)
circle.endFill()


// Append the circle to the Canvas
app.stage.addChild(circle)

// Initial Cordinates of the Circle on the Canvas
circle.x = 450
circle.y = 350

// Set the Circle's Velocity 
let xv = 2
let yv = 1








// Add Motion to the Circle
app.ticker.add(() => {
    // Check if Circle radious X goes past 800px  or is less than zero
    if (circle.x + 6 >= 800 || circle.x - 6 <= 0) {
        // Then reverse direction to negative number
        xv = -xv;
    }
     // Check if Circle radious Y goes past 800px  or is less than zero
     if (circle.y + 6 >= 800 || circle.y - 6 <= 0) {
        // Then reverse direction to negative number
        yv = -yv;
    }

    // Move the Circle by its direction/velocity
    circle.x += xv;
    circle.y += yv; 
    
})

let topBorder = new PIXI.Graphics();

let bottomBorder = new PIXI.Graphics();

let leftBorder = new PIXI.Graphics();

let rightBorder = new PIXI.Graphics();



// ____ Create 4 Rectangles


//  Object Rectangle Properties

const RectTop = {
    name: "Top",
    width: 800,
    height: 800,
    border: 2,
    color: "#66B2FF", //  blue
    hitColor:" #FF3333"  // Red


} 

const RectBottom = {
    name: "Botton",
    width: 800,
    height: 800,
    border: 2,
    color: "#66B2FF", //  blue
    hitColor:" #FF3333"  // Red

} 

const RectLeft = {
    name: "Left",
    width: 800,
    height: 800,
    border: 2,
    color: "#66B2FF", //  blue
    hitColor:" #FF3333"  // Red

} 


const RectRight = {
    name: "Right",
    width: 800,
    height: 800,
    border: 2,
    color: "#66B2FF", //  blue
    hitColor:" #FF3333"  // Red

}


// Assignment Pseudo

// ____ Each Rectangle Represents 1 Boarder
// ____ Each Boarder will be colored a different color than the blue background
// ____ Each boader will chage color when the circle collides with it
// ____ Tha application should stop 

