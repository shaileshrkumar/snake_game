let canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
let snake = new Snake();
let i;
let counter = 0;

document.addEventListener('keydown',function(e){
    if(e.keyCode == 37 && snake.dy==10 || e.keyCode == 37 && snake.dy==-10)
    {
        //move left
        snake.dx = -10;
        snake.dy = 0;
    }
    if(e.keyCode == 38 && snake.dx == 10 || e.keyCode == 38 && snake.dx == -10)
    {
        //move up
        snake.dy = -10;
        snake.dx = 0;
    }
    if(e.keyCode == 39 && snake.dy==10 || e.keyCode == 39 && snake.dy==-10)
    {
        //move right
        snake.dx = 10;
        snake.dy = 0;
    }
    if(e.keyCode == 40 && snake.dx == 10 || e.keyCode == 40 && snake.dx == -10)
    {
        //move down
        snake.dy = 10;
        snake.dx = 0;
    }
});
function Snake()
{
// ( x,y ) - snake position   ( X,Y ) - Food position
// ( dx,dx ) - varying snake position
    this.X = 100;
    this.Y = 100;
    this.x = 0;
    this.y = 0;
    this.dx = 10;
    this.dy = 0;
    this.x_append=[];
    this.y_append=[];
    this.update = function()
    {
        for(i=counter;i>0;i--)
        {
            this.x_append[i] = this.x_append[i-1];
            this.y_append[i] = this.y_append[i-1]; 
        }
        this.x_append[0] = this.x;
        this.y_append[0] = this.y;
        this.x += this.dx;
        if(this.x == 200)
            this.x = 0;
        else if(this.x == -10)
            this.x = 190;
        this.y += this.dy;
        if(this.y == 200)
            this.y = 0;
        else if(this.y == -10)
            this.y = 190;
    }
    this.updateFoodPosition = function()
    {
        this.X = Math.floor(Math.floor(Math.random()*(181)+10)/10)*10;
        this.Y = Math.floor(Math.floor(Math.random()*(181)+10)/10)*10;
    }
    this.show = function()
    {
        canvas.clearRect(0,0,200,200);
        canvas.fillStyle = 'red';
        canvas.fillRect(this.X,this.Y,10,10);
        canvas.fillStyle = 'blue';
        canvas.fillRect(this.x,this.y,10,10);
        canvas.fillStyle = 'white';
        for(i=0; i<counter; i++)
        {
            canvas.fillRect(this.x_append[i],this.y_append[i],10,10);
        }
        //checking if snake bites its tail
        for(i=0;i<counter;i++)
        {
            if(this.x_append[i] == this.x && this.y_append[i]==this.y)
            {
                canvas.fillStyle = 'yellow';
                canvas.fillRect(this.x,this.y,10,10);
                counter = 0;
                break;
            }
        }
        //snake eats the food
        if(this.x == this.X && this.y == this.Y)
        {
            this.updateFoodPosition();
            counter++;
        }
    }
}
setInterval(() =>
{
    snake.show();
    snake.update();
},100);
