export function Snake()
{
    this.x = 0;
    this.y = 0;
    this.dx = 10;
    this.dy = 0;
    this.update = function()
    {
        snake.x += snake.dx;
        if(snake.x >=200 && snake.dx == 10)snake.x = 0;
        else if(snake.x==-10 && snake.dx == -10)snake.x = 200;
        snake.y += snake.dy;
        if(snake.y>=200 && snake.dy == 10)snake.y = 0;
        else if(snake.y==-10 && snake.dy == -10)snake.y = 200;
    }
    this.show = function(canvas)
    {
        canvas.fillStyle = 'white';
        canvas.clearRect(0,0,200,200);
        canvas.fillRect(snake.x,snake.y,10,10);
    }
}