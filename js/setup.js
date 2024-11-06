function setup() {
   createCanvas(400, 400);
   background(220);

   // Create random circles
   for (let i = 0; i < 50; i++) {
   let x = random(width);
   let y = random(height);
   let size = random(10,50);

   fill(random(225), random(225), random(225));
      circle(x, y, size);
   }
}