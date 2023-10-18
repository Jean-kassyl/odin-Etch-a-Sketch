const container = document.getElementById("container")

function create_grid(){
    for(i= 0; i < 16; i++){
        for(j = 0; j < 16; j++){
            let div = document.createElement('div');
            div.setAttribute("class", "grid");
            container.appendChild(div)
        }
    }
}

create_grid()

const grids = document.querySelectorAll('.grid');
console.log(grids);