let container = document.getElementById("container")
const range_input = document.getElementById("range_number")
const range_label = document.querySelectorAll(".range_label")
const clear = document.querySelector(".clear")
const blackBtn = document.querySelector(".black_mode")
const rainbowBtn = document.querySelector(".rainbow_mode")



create_grid()



blackBtn.classList.add("black")
let color_mode = "black"

blackBtn.addEventListener("click", () => {
    color_mode = "black"
    blackBtn.classList.add("black")
    rainbowBtn.classList.remove("black")
    
})

rainbowBtn.addEventListener("click", () => {
    color_mode = "rainbow"
    blackBtn.classList.remove("black")
    rainbowBtn.classList.add("black")
    
})


// clearing the grid when the user click the clear button
clear.addEventListener("click", clearGrid)

function clearGrid() {
    let grids = document.querySelectorAll(".grid")
    grids.forEach(grid => {
        grid.style.backgroundColor = ""
    })
}

// update grid
range_input.addEventListener("input", changeGridSize)



// helper function or callbacks

function generate_grid(size){
    for(let i= 1; i <= size; i++){
        for(let j = 1; j <= size; j++){
            let div = document.createElement('div');
            div.setAttribute("class", "grid");
            container.appendChild(div)
        }
    }

    
}

function create_grid(s = 16){
    range_label.forEach(label => {
        label.textContent = s
    })

    if (container.children.length > 0){
        Array.from(container.children).forEach(div => div.remove())
    }

    generate_grid(s)


    const grids = document.querySelectorAll('.grid');
        grids.forEach(grid => {
        grid.addEventListener("mouseenter", handleBackground)
    })
    
    container.style.gridTemplateColumns = `repeat(${s}, 1fr)`
    container.style.gridTemplateRows = `repeat(${s}, 1fr)`  
}

function handleBackground(e) {
    let target = e.currentTarget;
    if (color_mode === "black"){
        target.style.backgroundColor = "black"
        
    }
    else {
        const colorWheel = Math.ceil(Math.random() * 360) + 1
        target.style.backgroundColor = `hsl(${colorWheel}, 100%, 50%)`
    }   
}

function changeGridSize(e) {
    let size = parseInt(e.target.value)
    
    create_grid(size)
    
}