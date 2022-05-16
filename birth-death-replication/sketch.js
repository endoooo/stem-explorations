let generation = 1;
let population = 0;
let populationAvg = 0;
let populations = [];
let creatures = [];
let sourcecodepro;

// how many frames before next generation
// won't change results, just the "speed" of the simulation (less frames per generation = faster simulation)
// edit area 👇👇👇
const framesPerGeneration = 5;
// end of edit area 👆👆👆

function preload() {
  sourcecodepro = loadFont("./SourceCodePro-Regular.ttf");
}

function setup() {
  let cnv = createCanvas(400, 500);
  cnv.parent("sketch");
  background("#f1f5f9");

  textFont(sourcecodepro);

  if (random() < birthChance) {
    creatures.push(new Creature());
  }
  populations.push(creatures.length);

  drawChart(populations);
}

function draw() {
  // creatures bg
  fill("#f1f5f9");
  rect(0, 0, width, height - 100);

  // draw creatures
  creatures.forEach((creature) => {
    creature.move();
    creature.draw();
  });

  // draw text
  fill("black");
  noStroke();
  text(`Generation: ${generation}`, 10, 20);
  text(`Population: ${population}`, 10, 40);
  text(`Population avg: ${populationAvg.toFixed(2)}`, 10, 60);
  text(`Birth chance: ${birthChance * 100}%`, 10, 80);
  text(`Death chance: ${deathChance * 100}%`, 10, 100);
  text(`Replication chance: ${replicationChance * 100}%`, 10, 120);

  // update population (new generation)
  if (frameCount % framesPerGeneration === 0) {
    generation = generation += 1;

    creatures = creatures.filter((creature) => {
      creature.updateLifeStatus();
      return !creature.isDead;
    });

    // new creatures using birth chance
    if (random() < birthChance) {
      creatures.push(new Creature());
    }

    // new creatures using replication chance
    creatures.forEach((creature) => {
      if (creature.shouldReplicate()) {
        creatures.push(new Creature());
      }
    });

    population = creatures.length;
    populations.push(population);
    populationAvg = populations.reduce((a, b) => a + b, 0) / populations.length;
    drawChart(populations);
  }

  // stop after 1000 generations
  if (generation === 1000) {
    noLoop();
  }
}
