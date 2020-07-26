import { Snake } from './snake';

const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
let snake = new Snake();
document.addEventListener('keydown',function(e){
    if(e.keyCode == 37)
    {
        //move left
        snake.dx = -10;
        snake.dy = 0;
    }
    if(e.keyCode == 38)
    {
        //move up
        snake.dy = -10;
        snake.dx = 0;
    }
    if(e.keyCode == 39)
    {
        //move right
        snake.dx = 10;
        snake.dy = 0;
    }
    if(e.keyCode == 40)
    {
        //move down
        snake.dy = 10;
        snake.dx = 0;
    }
});

setInterval(() =>
{
    snake.show(canvas);
    snake.update();
},100);
