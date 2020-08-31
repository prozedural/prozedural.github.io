var canvas    = document.querySelector('canvas');
var ctx       = canvas.getContext('2d');

var beginPath = false;

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;


function randomColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return 'rgb(' +  r.toString() + ',' +  g.toString() + ',' + b.toString() + ')';
}

function grayColor() {
    var gray = Math.round(Math.random() * 200);
    return 'rgb(' +  gray.toString() + ',' +  gray.toString() + ',' + gray.toString() + ')';
}


var colorA = randomColor();
var colorB = randomColor();
var colorC = randomColor();

var gray = grayColor();

document.getElementById('cvs').style.backgroundColor = gray;
document.getElementsByClassName('logo')[0].style.color = gray;


document.body.addEventListener('mousemove', function (event) {
	var x = event.clientX, y = event.clientY;
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
   
    gradient.addColorStop("0", colorA);
    gradient.addColorStop("0.5" ,colorB);
    gradient.addColorStop('1', colorC);
    

        
    if (beginPath) {
        
        /*ctx.setLineDash([1, 13]);*/

        ctx.lineTo(x, y);
		ctx.stroke();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 400;
        
        
    } 
    else {
		ctx.beginPath();
		ctx.moveTo(x, y);
        beginPath = true;
    
	}
}, false);
