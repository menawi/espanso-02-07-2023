# --- Limit to 60 frames per second
import pygame
clock.tick(60)

# Initialize pygame
pygame.init()

# Set the size of the screen (width, height).
size = (700, 500)
screen = pygame.display.set_mode(size)

pygame.display.set_caption("My Ball Game")

# Loop until the user clicks the close button.
done = False

# Used to manage how fast the screen updates.
clock = pygame.time.Clock()

# Create a ball
ball = pygame.image.load("ball.png").convert()
ball_rect = ball.get_rect()

# Ball starting position
ball_rect.x = 350
ball_rect.y = 250

# Ball speed
ball_speed_x = 5
ball_speed_y = 5

# -------- Main Program Loop -----------
while not done:
    # --- Main event loop
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True

    # --- Game logic should go here
    ball_rect.x += ball_speed_x
    ball_rect.y += ball_speed_y

    # Check for ball hitting the edges of the screen
    if ball_rect.left < 0 or ball_rect.right > size[0]:
        ball_speed_x = -ball_speed_x
    if ball_rect.top < 0 or ball_rect.bottom > size[1]:
        ball_speed_y = -ball_speed_y

    # --- Drawing code should go here
    screen.fill((255, 255))

    # --- Limit to 60 frames per second
clock.tick(60)

'''
In this example, the Pygame library is used to create a simple ball game. The program sets up a window with a specified size, loads an image of a ball, and sets its initial position in the middle of the screen. The program then enters a main loop that updates the position of the ball and checks if it has hit the edges of the screen. If the ball hits the edges, the program reverses the direction of the ball's movement. The program also includes a basic event handling to check if the user closes the window.

This is a basic example that you could enhance by adding more features like score, lives, levels and obstacles.
'''
