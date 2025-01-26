// WEEK THREE ASSIGNMENT - PIXI PONG   (PIXI JS)

// ___________  CANVAS
// New PixiJS Application
const app = new PIXI.Application();
// Canvas color, width, and height
await app.init({ 
    backgroundColor: 0x164555, width: 800, height: 800 });
// Append the canvas to the DOM body
document.body.appendChild(app.canvas);

// ___________  CIRCLE
// Draw the Circle Image 
const circle = new PIXI.Graphics();
circle.beginFill(0xf5ef42);
circle.drawCircle(0, 0, 8);
circle.endFill();
app.stage.addChild(circle);// Append the circle to the Canvas Stage
// Initial Coordinates of the Circle on the Canvas - Near the center
circle.x = 450;
circle.y = 350;
// Set the Circle's Velocity & Change of Direction
let xv = 1.5;
let yv = 1;

// ___________   RECTANGLE BORDERS
//  Object Rectangle Properties
// Name, x, y, width, height, default color, hit color
const borders = [
    {name: "top", x: 0, y: 0, width: 795, height: 3, color: 0xffffff, hitColor: 0xff0000},
    {name: "bottom", x: 0, y: 795, width: 800, height: 3, color: 0xffffff, hitColor: 0x0aefff},
    {name: "left", x: 0, y: 0, width: 3, height: 795, color: 0xffffff, hitColor: 0xff9a00},
    {name: "right", x: 795, y: 0, width: 3, height: 795, color: 0xffffff, hitColor: 0xffdd00},
];
const borderImage = {};// Contain the border images from the border loop 
// Draw 4 rectangles and append to the stage
borders.forEach(border => {
const rect = new PIXI.Graphics();// Instantiate a new graphic image of a rectangle
rect.beginFill(border.color);
rect.drawRect(0,0, border.width, border.height);
rect.endFill();
// Set the coordinates of the rectangles on the canvas
rect.x = border.x;
rect.y = border.y;
app.stage.addChild(rect);// Append the border to the stage
// Pass all the borders to the borderImage object
borderImage[border.name] = rect;});

// ___________   SHOW BORDERS
const hitBorders = new Set(); // Keep Track of What borders where hit
const showHitBorder = (name) =>  {// Show Hit Borders by changing their color
    // Find the border properties in the border object array
    const border = borders.find(b => b.name === name);
    if (border) {  // Take the hit border - clear and change color 
        const rect = borderImage[name];
        // Clear Rectangle Image - Redraw and give new color to show the border was hit. 
        rect.clear();
        rect.beginFill(border.hitColor);
        rect.drawRect(0,0, border.width, border.height);
        rect.endFill();};};

// ___________  TRACK BORDERS
// CHECK if the 4 borders have been hit and call showHitBorder function
const trackHits =() => {
    let lastBorder = null; // Check if Last Border - Set value as undefined.
    // Set Conditionals  for each border to check if hit
    //  Track Top Border
    if(circle.y - 6 <= 5 && !hitBorders.has("top")) {
        hitBorders.add("top"); // Add hit border first - then show 
        showHitBorder("top"); // Change lastBorder Value
        lastBorder = "top";}
    // Track Bottom Border
    if(circle.y + 6.5 >= 795 && !hitBorders.has("bottom")) {
        hitBorders.add("bottom");
        lastBorder = "bottom";
        showHitBorder("bottom");}
    // Track Left Border
    if(circle.x - 6 <= 5 && !hitBorders.has("left")) {
        hitBorders.add("left");
        lastBorder = "left";
        showHitBorder("left");}
    // Track Right Border
    if(circle.x + 6.5 >= 795 && !hitBorders.has("right")) {
        hitBorders.add("right");
        lastBorder = "right";
        showHitBorder("right");}
    //  Return a promise to resolve when all four borders are hit.
    return new Promise((resolve, reject) => {
        if (hitBorders.size === 4) {
            // Highlight Boarder Before  the Alert
            if (hitBorders) showHitBorder(lastBorder);
            // Resolve After border color change - When all four borders are hit
            // Resolve - Message 
            setTimeout(() => resolve("All borders have been hit!"), 100);}
        else {
            // Will continue as unresolved. 
            reject();}});};
// Variable to show and not show the Resolved Promise Alert
// To fix the infinite loop and show only once.
let showAlert = true;
// Add Motion to the Circle
app.ticker.add(() => {
    // Check if Circle adius  X goes past 800px or is less than zero
    if (circle.x + 6.5 >= 800 || circle.x - 6.5 <= 0) {
        // Then reverse direction to negative number
        xv = -xv;}
     // Check if Circle radius  Y goes past 800px or is less than zero
     if (circle.y + 6.5 >= 800 || circle.y - 6.5 <= 0) {
        // Then reverse direction to negative number
        yv = -yv;}
    // Move the Circle by its direction/velocity
    circle.x += xv;
    circle.y += yv; 
    
    trackHits() // Call Track Hits Function     
        .then(message => { // Resolve = Then: stop game 
            app.ticker.stop(); // Stop the game
            if (showAlert === true) { // Check if showAlert is True
                alert(message); // Resolve - Alert user that all borders have been hit
                showAlert = false;}})   // Change ShowAlert to False - to not show again       
        .catch(() => {
            // console.error("Promise Not Resolved Yet");
            // Catch is to handle the rejected promise
            // The promise will be rejected until all four borders are hit.   
        });});
