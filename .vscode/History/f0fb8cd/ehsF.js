
  // Get the ball element
  const ball = document.querySelector(".ball");

  // Set the initial position of the ball
  let x = 0;
  let y = 0;

  // Set the speed of the animation
  const xSpeed = 5;
  const ySpeed = 5;

  // Create a function to update the position of the ball
  function updatePosition() {
    x += xSpeed;
    y += ySpeed;
    ball.style.left = x + "px";
    ball.style.top = y + "px";
  }

  // Use setInterval to call the updatePosition function
  // every 10 milliseconds
  setInterval(updatePosition, 10);
