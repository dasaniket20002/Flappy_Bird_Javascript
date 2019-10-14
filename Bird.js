function Bird() {
  this.mass = 100;

  this.x = 120;
  this.y = height / 2;

  this.y_vel = 0;

  this.lift_force = 170;

  this.isKilled = false;

  this.hitbox_radius = 10;

  this.update = function() {
    this.y_vel += gravity / this.mass;
    this.y += this.y_vel;
    
    if (this.y > height) {
      this.y = height;
      this.y_vel = 0;
    } else if (this.y < 0) {
      this.y = 0;
      this.y_vel = 0;
    }
  };

  this.up = function() {
    if (!this.isKilled) {
      this.y_vel -= this.lift_force / this.mass;
    }
  };

  this.collidesWith = function(pipe) {
    let insideStrip = false;
    let insideTop = false;
    let insideBottom = false;

    if (this.x + this.hitbox_radius > pipe.x && this.x + this.hitbox_radius < pipe.x + pipe.wid) {
      insideStrip = true;
    }
    if (this.y - this.hitbox_radius > -1 && this. y - this.hitbox_radius < pipe.top_length) {
      insideTop = true;
    }
    if (this.y + this.hitbox_radius > pipe.top_length + pipe.gap && this.y + this.hitbox_radius < height + 1) {
      insideBottom = true;
    }

    return insideStrip && (insideTop || insideBottom);
  };

  this.show = function() {
    ellipse(this.x, this.y, this.hitbox_radius * 2, this.hitbox_radius * 2);
  };

  this.kill = function() {
    this.isKilled = true;
    this.y_vel -= 7;
  };
}
