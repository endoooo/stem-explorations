const chartHeight = 100;

function drawChart(populations = []) {
  fill("#64748b");
  rect(0, height - chartHeight, width, chartHeight);

  // draw bars
  fill("white");
  noStroke();
  const bandWidth = width / populations.length;
  const maxPop = Math.max(...populations);

  populations.forEach((population, i) => {
    const barHeight = map(population, 0, maxPop, 0, chartHeight);
    rect(
      0 + i * bandWidth,
      height - chartHeight + (chartHeight - barHeight),
      bandWidth,
      barHeight
    );
  });

  // draw text
  fill("black");
  text(`Max: ${Math.max(...populations)}`, 10, height - chartHeight + 20);
}
