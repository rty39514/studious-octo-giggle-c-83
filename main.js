canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
var lpx,lpy
linewidth=2
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992) 
    {
        document.getElementById("myCanvas").width = new_width
        document.getElementById("myCanvas").height = new_height
        document.body.style.overflow = "hidden"
    }


canvas.addEventListener("touchstart",my_touchstart )

function my_touchstart(e)
{
    color = document.getElementById("colour").value;
    linewidth = document.getElementById("line").value;


    lpx = e.touches[0].clientX - canvas.offsetLeft
    lpy = e.touches[0].clientY - canvas.offsetTop
}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        
        ctx.moveTo(lpx,lpy);


        ctx.lineTo(cpx,cpy);
        ctx.stroke();

    

    lpx = cpx
    lpy = cpy
}


function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}