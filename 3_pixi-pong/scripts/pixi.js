// WEEK THREE ASSIGNMENT - PIXI PONG   (PIXI JS)



// New PixiJS Application
const app = new PIXI.Application();


// Canvas color, width, and height
await app.init({ backgroundColor: "rgb(22, 69, 85)", width: 800, height: 800 });


// Append the canvas to the DOM body
document.body.appendChild(app.canvas);
// document.querySelector("#game").appendChild(app.canvas);



// Draw the Circle Image 
const circle = new PIXI.Graphics()
circle.beginFill("#f5ef42")
circle.drawCircle(0, 0, 6)
circle.endFill()


// Append the circle to the Canvas Stage
app.stage.addChild(circle)

// Initial Cordinates of the Circle on the Canvas - Near the center
circle.x = 450
circle.y = 350

// Set the Circle's Velocity & Change of Direction
let xv = 1.5
let yv = 1


// ___________   RECTANGLE BORDER IMAGES



// ____ Each Boarder will be colored a different color than the blue background

//  Object Rectangle Properties


// Create And Define the Border Properties
// Name, x, y, width, height, default color, hit color
const borders = [
    {name: "top", x: 0, y: 0, width: 800, height: 5, color: 0xffffff, hitColor: 0xff00000},
    
    {name: "bottom", x: 0, y: 795, width: 795, height: 5, color: 0xffffff, hitColor: 0x0aefff},
   
    {name: "left", x: 0, y: 0, width: 5, height: 795, color: 0xffffff, hitColor: 0xff9a00},
   
    {name: "right", x: 795, y: 0, width: 5, height: 800, color: 0xffffff, hitColor: 0xffdd00},
];


// Contain the border images from the border loop 
const borderImage = {};

// ____ Create 4 Rectangles

// For Each Loop 
// 1 - Create new graphic
// 2 - Draw graphic
// 3 - Append to to stage 



// Draw 4 rectangles and append to the stage
borders.forEach(border => {

// Instantiate a new graphic image of a rectangle
const rect = new PIXI.Graphics();

rect.beginFill(border.color);
rect.drawRect(0,0, border.width, border.height);
rect.endFill();


// Set the cordinates of the rectangls on the canvas
rect.x = border.x;
rect.y = border.y;

// Append the border to the stage
app.stage.addChild(rect);

// Pass all the borders to the borderImage object
borderImage[border.name] = rect;



})


// Check if the border has been hit

function trackHits() {

    // Check if Last Border
    let lastBorder = null

    // Set Conditinals for each border to check if hit

    if(circle.y - 6 <= 10) {
        lastBorder = "top"
    }
    if(circle.y + 6 <= 10) {
        lastBorder = "bottom"
    }
    if(circle.x - 6 <= 10) {
        lastBorder = "left"
    }
    if(circle.x + 6 <= 10) {
        lastBorder = "right"
    }


}












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




















// Assignment Pseudo

// ____ Each Rectangle Represents 1 Boarder

// ____ Each boader will chage color when the circle collides with it
// ____ Tha application should stop 

