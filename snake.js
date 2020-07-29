export function Snake()
{
    this.x = 0;
    this.y = 0;
    this.dx = 10;
    this.dy = 0;
    this.update = function()
    {
        this.x += this.dx;
        if(this.x >=200 && this.dx == 10)this.x = 0;
        else if(this.x==-10 && this.dx == -10)this.x = 200;
        this.y += this.dy;
        if(this.y>=200 && this.dy == 10)this.y = 0;
        else if(this.y==-10 && this.dy == -10)this.y = 200;
    }
    this.show = function()
    {
        canvas.fillStyle = 'white';
        canvas.clearRect(0,0,200,200);
        canvas.fillRect(this.x,this.y,10,10);
    }
}