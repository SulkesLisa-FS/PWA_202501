// WEEK THREE ASSIGNMENT - PIXI PONG   (PIXI JS)



// New PixiJS Application
const app = new PIXI.Application();


// Canvas color, width, and height
await app.init({ 
    backgroundColor: 0x164555, width: 800, height: 800 });


// Append the canvas to the DOM body
document.body.appendChild(app.canvas);
// document.querySelector("#game").appendChild(app.canvas);



// Draw the Circle Image 
const circle = new PIXI.Graphics();
circle.beginFill(0xf5ef42);
circle.drawCircle(0, 0, 6);
circle.endFill();


// Append the circle to the Canvas Stage
app.stage.addChild(circle);

// Initial Cordinates of the Circle on the Canvas - Near the center
circle.x = 450;
circle.y = 350;

// Set the Circle's Velocity & Change of Direction
let xv = 1.5;
let yv = 1;


// ___________   RECTANGLE BORDER IMAGES


//  Object Rectangle Properties
// Create And Define the Border Properties
// Name, x, y, width, height, default color, hit color
const borders = [
    {name: "top", x: 0, y: 0, width: 795, height: 5, color: 0xffffff, hitColor: 0xff0000},

    {name: "bottom", x: 0, y: 795, width: 800, height: 5, color: 0xffffff, hitColor: 0x0aefff},

    {name: "left", x: 0, y: 0, width: 5, height: 795, color: 0xffffff, hitColor: 0xff9a00},

    {name: "right", x: 795, y: 0, width: 5, height: 795, color: 0xffffff, hitColor: 0xffdd00},
];


// Contain the border images from the border loop 
const borderImage = {};

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

});


// Keep Track of What borders where hit
const hitBorders = new Set();


// Show Hit Borders by changing their color

function showHitBorder(name) {

    // Find the border properties in the border object array
    const border = borders.find(b => b.name === name);

    // Get the border object - clear and change color to show as hit
    if (border) { 
        const rect = borderImage[name];

        // Clear Rectangle Image - Redraw and use the hit color to show the border was hit. 
        rect.clear();
        rect.beginFill(border.hitColor);
        rect.drawRect(0,0, border.width, border.height);
        rect.endFill();         
    };

};






// CHECK if the 4 borders has been hit and call showHitBorder function

function trackHits() {

    // Check if Last Border - Set value as undefined.
    let lastBorder = null;

    // Set Conditinals for each border to check if hit

    //  Track Top Border
    if(circle.y - 5 <= 5 && !hitBorders.has("top")) {
        // Add hit border first - then show 
        hitBorders.add("top");
        showHitBorder("top");
        // Change lastBorder Value
        lastBorder = "top";
        
       
    }

    // Track Botton Border
    if(circle.y + 5 >= 795 && !hitBorders.has("bottom")) {
        hitBorders.add("bottom");
        lastBorder = "bottom";
        showHitBorder("bottom");
        

    }

    // Track Left Border
    if(circle.x - 5 <= 5 && !hitBorders.has("left")) {
        hitBorders.add("left");
        lastBorder = "left";
        showHitBorder("left");
        

    }

    // Track Right Border
    if(circle.x + 5 >= 795 && !hitBorders.has("right")) {
        hitBorders.add("right");
        lastBorder = "right";
        showHitBorder("right");
        
    }

    //  Return a promise to resolve when all four borders are hit.
    return new Promise((resolve, reject) => {

        if (hitBorders.size === 4) {

            // Highlight Boarder Before  the Alert
            if (hitBorders) showHitBorder(lastBorder);
            // Resolve After border color change - When all four borders are hit
            // Resolve - Message 
            setTimeout(() => resolve("All borders have been hit!"), 200);
            
            
        }
        else {
            // Will continue as un-resolved. 
            reject(); 
        }


    });



};








// Variable to show and not show the Resolved Promis Alert
// To fix the infinate loop and show only one time.

let showAlert = true;



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

    // Call Track Hits Funcion
    trackHits()
        // Resolve = Then: stop game      and notify user
        .then(message => {
             // Stop the game
            app.ticker.stop();
            
            if (showAlert === true) {
                // Resolve - Alert user that all borders have been hit
                alert(message);
                showAlert = false;
            }
            
        })
       

        .catch(() => {
            // console.error("Promise Not Resolved Yet");
            // Catch is to handle the rejected promise
            // The promise will be rejected untill all four borders are hit.

            
        });
    
});






















// Assignment Pseudo

// ____ Each Rectangle Represents 1 Boarder

// ____ Each boader will chage color when the circle collides with it

// ____ Tha application should stop 

// You must use a Promise to achieve this .....
// the application should stop only after the circle has bounced off all four borders.  
//  The Promise will be responsible for ending the game once it resolves,
// the Promise should resolve, and an alert should pop up to notify the user that the application has completed.




