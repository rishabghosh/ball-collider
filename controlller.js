const applyPixel = (count) => count + PIXEL;
const createDiv = () => document.createElement(DIV);

const createBallDiv = function (id) {
	const div = createDiv();
	div.className = "ball";
	div.id = "ball_" + id;
	return div;
}

const drawBall = function (ball, id) {
	const ballDiv = document.getElementById("ball_" + id);
	ballDiv.style.top = applyPixel(ball.position.top);
	ballDiv.style.left = applyPixel(ball.position.left);
	ballDiv.style.height = applyPixel(ball.radius * 2);
	ballDiv.style.width = applyPixel(ball.radius * 2);
	ballDiv.style.backgroundColor = ball.color;
};

const moveBall = function (balls) {
	for (let index = 0; index < balls.length; index++) {
		const ball = balls[index];
		const game = new Game(ball)
		game.detectCollision();
		ball.move();
		drawBall(ball, index);
	}
};

//should have width and height of screen as parameters
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

const getRandomColor = function(){
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const generateBalls = function (count, radius) {
	const result = [];
	for (let ballGenerated = 0; ballGenerated < count; ballGenerated++) {
		const ballPosition = randomBallPositions();
		const velocity = randomBallVelocity(5);
		const color = getRandomColor();
		result.push(new Ball(radius, ballPosition, velocity, color))
		const ballDiv = createBallDiv(ballGenerated);
		playground.appendChild(ballDiv);
	}
	return result;
};


const initialize = function () {

	const radius = 10;
	const ballPosition = randomBallPositions();
	const velocity = randomBallVelocity(1);
	const balls = generateBalls(5, radius)

	playground.focus();
	setInterval(function () { moveBall(balls); }, 20);
};

window.onload = initialize;