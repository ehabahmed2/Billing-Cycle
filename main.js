//varibales
let help = document.querySelector("header div");
let cycle = document.querySelector("select");
let btn = document.querySelector("button");


//making the pop up guy
setTimeout(pop, 4000);

function pop(){
    help.classList.add("active");
}

setTimeout(removePop, 13000);

function removePop(){
    help.classList.remove("active");
}
//end of pop up guy

// if conditoins for selecting the cycle 
btn.addEventListener('click', showing);



function showing (event){
    var value = cycle.options[cycle.selectedIndex].value; //value of the selected item from the dropdown menu
    let box = document.querySelectorAll(".box") //all the boxes at once
    let boxOne = document.querySelector(".one"); //cycle 1 and value 4
    let boxTwo = document.querySelector(".two"); //cycle 2 and value 10
    let boxThree = document.querySelector(".three"); //cycle 3 and value 18
    let boxFour = document.querySelector(".four"); //cycle 4 and value 26
    box.forEach(box=>{
        if(box.classList.contains("active")){
            box.classList.remove("active")

        }
    });
    if (value === "4"){
        boxOne.classList.add("active");
    } if (value === "10"){
        boxTwo.classList.add("active");

    } if (value === "18"){
        boxThree.classList.add("active");
    } if (value === "26"){
        boxFour.classList.add("active");
    }
    
    event.preventDefault();
}