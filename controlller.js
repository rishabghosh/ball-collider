const applyPixel = (count) => count + PIXEL;
const createDiv = () => document.createElement(DIV);

const createBallDiv = function () {
	const div = createDiv();
	div.className = "ball";
	div.id = "ball_1";
	return div;
}

const drawBall = function (ball) {
	const ballDiv = document.getElementById(BALL_1);
	ballDiv.style.top = applyPixel(ball.position.top);
	ballDiv.style.left = applyPixel(ball.position.left);
	ballDiv.style.height = applyPixel(ball.radius * 2);
	ballDiv.style.width = applyPixel(ball.radius * 2);
};

const moveBall = function (ball, game) {
	game.detectCollision();
	ball.move();
	drawBall(ball);
};

const initialize = function () {
	const ballDiv = createBallDiv();
	playground.appendChild(ballDiv);

	const radius = 10;
	const ballPosition = { left: 200, top: 300 };
	const velocity = { left: 5, top: 5 };
	const ball = new Ball(radius, ballPosition, velocity);
	const game = new Game(ball);
	drawBall(ball);

	playground.focus();
	setInterval(function () { moveBall(ball, game); }, 20);
};

window.onload = initialize;