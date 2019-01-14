class Ball {
  constructor(radius, ballPosition, velocity) {
    this.radius = radius;
    this.position = ballPosition;
    this.velocity = velocity;
  }
  move() {
    this.position.left += this.velocity.left;
    this.position.top += this.velocity.top;
  }

  setVelocity(left, top) {
    this.velocity.left = left;
    this.velocity.top = top;
  }
}


const isColliedWithSideWalls = function (ball) {
  const diameterOfBall = ball.radius * 2;
  return ball.position.left <= (0 + diameterOfBall) ||
    ball.position.left >= (960 - diameterOfBall);
};

const isColliedWithTopWalls = function (ball) {
  const diameterOfBall = ball.radius * 2;
	return ball.position.top <= (0 + diameterOfBall) ||
	ball.position.top >= (600 - diameterOfBall);
};


class Game {
  constructor(ball) {
    this.ball = ball;
  }

  detectCollision() {
    const velocityOfLeft = this.ball.velocity.left;
    const velocityOfTop = this.ball.velocity.top;
    const diameterOfBall = this.ball.radius * 2;

    if (isColliedWithTopWalls(this.ball)) {
      this.ball.setVelocity(velocityOfLeft, -velocityOfTop);
      return;
    }

    if (isColliedWithSideWalls(this.ball)) {
      this.ball.setVelocity(-velocityOfLeft, velocityOfTop);
      return;
    }

  }

}
