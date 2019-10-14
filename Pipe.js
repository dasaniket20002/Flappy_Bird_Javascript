function Pipe() {
  this.vel = 2;

  this.wid = 50;
  this.gap = 120;

  this.top_length = random(height - this.gap + 20);
  this.bottom_length = height - (this.top_length + this.gap);

  this.x = width;

  this.update = function() {
    this.x -= this.vel;
  };

  this.show = function() {
    fill(255);

    rect(this.x, 0, this.wid, this.top_length);
    rect(this.x, this.top_length + this.gap, this.wid, this.bottom_length);
  };

  this.offscreen = function() {
    return (this.x + this.wid + 2 < 0);
  };
  
}
