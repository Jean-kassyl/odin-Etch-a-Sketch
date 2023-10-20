let container = document.getElementById("container")
const range_input = document.getElementById("range_number")
const range_label = document.querySelectorAll(".range_label")
const clear = document.querySelector(".clear")



clear.addEventListener("click", clearGrid)

function clearGrid() {
    let grids = document.querySelectorAll(".grid")
    grids.forEach(grid => {
        grid.style.backgroundColor = ""
    })
}



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

create_grid()




function handleBackground(e) {
    const colorWheel = Math.floor(Math.random() * 360) + 1
    let target = e.currentTarget;
    target.style.backgroundColor = `hsl(${colorWheel}, 100%, 0%)`
    console.log(colorWheel)
}



range_input.addEventListener("input", changeGridSize)

function changeGridSize(e) {
    let size = parseInt(e.target.value)
    
    create_grid(size)
    
}