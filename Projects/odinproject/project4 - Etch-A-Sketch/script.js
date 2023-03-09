const container = document.querySelector(".container");
const sliderValue = document.querySelector(".sliderValue");
const slider = document.querySelector(".slider");
const pickColor = document.querySelector(".pickColor");
let currentColor = "black";
let grids;
let mousedown = false;


document.addEventListener("mousedown", function(e){
    mousedown = true;
    console.log(e.type);
})

document.addEventListener("mouseup", function(e){
    mousedown = false;
    console.log(e.type);
})

slider.addEventListener("mousemove", function(){
    sliderValue.textContent = slider.value + "x" + slider.value; 
});

slider.addEventListener("mouseup", changeGrid);

pickColor.addEventListener("change", changeColor);


function leaveTrail(e){
    if(!mousedown && e.type == "mouseover") return
    e.target.style.backgroundColor = currentColor;

}

function changeGrid(){
    n = slider.value;
    makeGrid(n);
}

function changeColor(){
    currentColor = pickColor.value;

}

function makeGrid(n){
    container.innerHTML = '';

    for(let i = 0; i < n * n; i++){
        let grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        container.appendChild(grid);
    }   

    container.style.gridTemplateColumns = "repeat("+n+",auto)";
    grids = document.querySelectorAll(".grid");

    grids.forEach(grid =>{
        grid.addEventListener("mouseover", leaveTrail);
        grid.addEventListener("mousedown", leaveTrail);
    });
}

function clearBoard(){
    grids.forEach(grid =>{
        grid.style.backgroundColor = "white";
    });
}

//start game
let n = 16;
makeGrid(n);
sliderValue.textContent = slider.value + "x" + slider.value;