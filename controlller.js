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

const randomBallPositions = function () {
	const left = Math.floor(Math.random() * 95) * 10 + 10;
	const top = Math.floor(Math.random() * 59) * 10 + 10;
	return { left, top };
};

const randomBallVelocity = function (absoluteValue) {
	const coreValue = [absoluteValue, -absoluteValue];
	const left = coreValue[Math.floor(Math.random() * coreValue.length)];
	const top = coreValue[Math.floor(Math.random() * coreValue.length)];
	return { left, top };
};

const generateBalls = function (count, properties) {
	const radius = 5;
	const result = [];
	for (let ballGenerated = 0; ballGenerated < count; ballGenerated++) {
		const ballPosition = randomBallPositions();
		const velocity = randomBallVelocity(5);
		result.push(new Ball(radius, ballPosition, velocity))
	}
	return result;
};


const initialize = function () {
	const ballDiv = createBallDiv();
	playground.appendChild(ballDiv);
	const radius = 10;
	const ballPosition = randomBallPositions();
	const velocity = randomBallVelocity(5);
	const ball = new Ball(radius, ballPosition, velocity);
	const game = new Game(ball);
	drawBall(ball);

	playground.focus();
	setInterval(function () { moveBall(ball, game); }, 20);
};

window.onload = initialize;