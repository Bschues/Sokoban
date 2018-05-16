const maze = [
    "  WWWWW ",
    "WWW   W ",
    "WOSB  W ",
    "WWW BOW ",
    "WOWWB W ",
    "W W O WW",
    "WB XBBOW",
    "W   O  W",
    "WWWWWWWW"
  ];

let personTop = 90;
let personLeft = 90;
let y = 2;
let x = 2;
let personPosition = maze[y][x];
//console.log(maze[y - 1][x + 1]);
const board = document.getElementById("board");
for (let row of maze) {
    //console.log(row);
    for (let cells of row) {
        let cell = document.createElement("div");
        cell.dataset.cellnumb = cells
        cell.classList.add("boardcells");
        board.appendChild(cell);
        //let cellposition = maze
        //console.log(cells);
        switch (cells) {
            case "W":
                cell.classList.add("walls");
                break;
            case "O":
                cell.classList.add("boxStorage");
                break;
            case "B":
                cell.classList.add("box")
        }
    }
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch (keyName) {
        case ("ArrowUp"):
            if (maze[y - 1][x] === " ") {
                y -= 1;
                personTop = personTop - 40;
                document.getElementById("person").style.top = personTop + "px";
                // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
            }
            break;
        case ("ArrowDown"):
            if (maze[y + 1][x] === " ") {
                y += 1;
                personTop = personTop + 40;
                document.getElementById("person").style.top = personTop + "px";
                // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
            }
            break;
        case ("ArrowRight"):
            // console.log("ArrowRight");
            if (maze[y][x + 1] === "F"){
                x += 1;
                personLeft = personLeft + 40;
                document.getElementById("person").style.left = personLeft + "px";
                // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
            }
            if (maze[y][x + 1] === " ") {
                x += 1;
                personLeft = personLeft + 40;
                document.getElementById("person").style.left = personLeft + "px";
                // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
            }
            break;

        case ("ArrowLeft"):
            if (maze[y][x - 1] === " ") {
                //maze[y][x-1];
                personLeft = personLeft - 40;
                x -= 1;
                document.getElementById("person").style.left = personLeft + "px";
                // console.log(maze[y][x]);
                // console.log("postion x:" + x + " " + "postion y:" + y);
            }
            break;
    };
});