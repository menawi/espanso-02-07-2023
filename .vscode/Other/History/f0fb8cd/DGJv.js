    // Get the ball element
    const ball = document.querySelector(".ball");

    // Set the initial position of the ball
    let x = 0;
    let y = 0;

    // Set the speed of the animation
    let xSpeed = 5;
    let ySpeed = 5;

    // Get the width and height of the screen
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Create a function to update the position of the ball
    function updatePosition() {
        x += xSpeed;
        y += ySpeed;

        // Check if the ball has reached the edge of the screen
        if (x + 50 > screenWidth || x < 0) {
            xSpeed = -xSpeed;
        }
        if (y + 50 > screenHeight || y < 0) {
            ySpeed = -ySpeed;
        }

        ball.style.left = x + "px";
        ball.style.top = y + "px";
    }

    setInterval(updatePosition, 10);

    // 📌

const code_explained = "In this example, the JavaScript code uses the trigonometric functions cos and sin to calculate the x and y position of the ball based on the angle and speed. When the ball hits a wall, the script reverses the direction of the angle by either reversing the x direction and decreasing the angle, or reversing the y direction and decreasing the angle. This will cause the ball to bounce off the walls at different angles, making it look more realistic. Also, you could use Math.random() function to generate random angles each time the ball hits the wall to make it even more realistic."

