var ball;
var vx = 2;

function setup() {
  createCanvas(400, 400);
  
  count();

  ball = createSprite(100, 100, 100, 100);
}

function draw() {
  background(51);

  if(ball.position.x <= 0 || ball.position.x >= width) {
    vx = -vx;
  }
  ball.velocity.x = vx;

  //drawSprites();
}

function count() {
  let numbers = [1,2,3,4,5,6,7,8,9];
  let len = numbers.length;

  for(let i = 1; i <= len; i++)
  {
    console.log(numbers[i]);
  }
}
