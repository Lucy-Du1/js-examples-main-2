
function dotGrid() {
  background(255);
  noStroke();
  fill(0);

  // Get the current gap and offset values from the sliders
  gap = gapSlider.value();
  offset = offsetSlider.value();

  // Loop through x and y coordinates, at increments set by gap
  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) {
      // Calculate noise value using scaled and offset coordinates
      let noiseValue = noise((x + offset) * xScale, (y + offset) * yScale);

      // Since noiseValue will be 0-1, multiply it by gap to set diameter to
      // between 0 and the size of the gap between circles
      let diameter = noiseValue * gap;
      circle(x, y, diameter);
    }
  }
}