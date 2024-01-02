console.log('hello')

let turn = "X";

//let btn= document.querySelector('button')  //finds the first button element that it detects and returns it to the javascript file
//btn.innerText = turn;

//btn.addEventListener('click', play) //you called the function "play". Now you have to define it

let buttons = document.querySelectorAll('button')

/*a for loop*/ for (let i = 0; i<buttons.length; i++/*i is increased by 1*/) 
{
console.log(i)
buttons[i].addEventListener('click',play)
}


//selection si a fancy of saying function
function play(e)//when your browser calls the function
    {
        console.log(e.target);
        //"e" literally is the button so you can change the innerText to "turn"
        e.target.innerText = turn;
        if (turn=="X")
        {
            turn="O";
        }
        else{turn="X";}   
        e.target.disabled = true;
    }

console.log(buttons)