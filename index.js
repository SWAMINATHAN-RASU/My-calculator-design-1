



function Clear()
{
   output.value=""
}

function Square()
{
   output.value=output.value*output.value
}

function Cube()
{
   output.value=output.value*output.value*output.value;
}

function Diagonal()
{
    output.value=Math.sqrt(3*output.value)
}

function Squareroot()
{
   output.value=Math.sqrt(output.value);
}

function Cuberoot()
{
   output.value=Math.cbrt(output.value);
}

function Delete()
{
   output.value=output.value.slice(0,-1)
}

function Equalet()
{
   output.value=eval(output.value);
}


let output=document.getElementById('output')

function  Display(call)
 {
    output.value=output.value+call;
 }