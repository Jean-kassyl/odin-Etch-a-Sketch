
const range_input = document.getElementById("range_number")
const range_label = document.querySelectorAll(".range_label")


function generate_grid(size){
    for(let i= 1; i <= size; i++){
        for(let j = 1; j <= size; j++){
            let div = document.createElement('div');
            div.setAttribute("class", "grid");
            let container = document.getElementById("container")
            container.appendChild(div)
        }
    }

    
}

function create_grid(s = 16){
    range_label.forEach(label => {
        label.textContent = s
    })

    let container = document.getElementById("container")
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
    let target = e.currentTarget;
    target.style.backgroundColor = "black"
}



range_input.addEventListener("input", changeGridSize)

function changeGridSize(e) {
    let size = parseInt(e.target.value)
    
    create_grid(size)
    
}