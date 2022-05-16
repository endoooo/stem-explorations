const velAmp = 2;

// birth, death and replication chance.
// from 0 (0%) to 1 (100%)
// edit area 👇👇👇
const birthChance = 1;
const deathChance = 0.1;
const replicationChance = 0;
// end of edit area 👆👆👆

function Creature() {
  this.size = 20;
  this.pos = createVector(
    Math.floor(random(this.size / 2, width - this.size / 2)),
    Math.floor(random(this.size / 2, height - 100 - this.size / 2))
  );
  this.vel = createVector(random() * velAmp, random() * velAmp);
  this.isDead = false;
  this.deathChance = deathChance;
  this.replicationChance = replicationChance;
}

Creature.prototype.move = function () {
  this.pos = this.pos.add(this.vel);
  if (this.pos.x + this.size / 2 > width || this.pos.x - this.size / 2 < 0) {
    this.vel.x = this.vel.x * -1;
  }
  if (
    this.pos.y + this.size / 2 > height - 100 ||
    this.pos.y - this.size / 2 < 0
  ) {
    this.vel.y = this.vel.y * -1;
  }
};

Creature.prototype.updateLifeStatus = function () {
  if (!this.isDead) {
    this.isDead = random() < this.deathChance;
  }
};

Creature.prototype.shouldReplicate = function () {
  if (!this.isDead) {
    return random() < this.replicationChance;
  }
};

Creature.prototype.draw = function () {
  fill("#fb7185");
  strokeWeight(1);
  stroke("#be185d");
  circle(this.pos.x, this.pos.y, this.size);
};
