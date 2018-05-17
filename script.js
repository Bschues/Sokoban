let maze = [
    "WWWWWWWW",
    "WWW   WW",
    "WOSB  WW",
    "WWW BOWW",
    "WOWWB WW",
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
let page = document.getElementById("body");
//console.log(maze[y - 1][x + 1]);

//let boxHolder1 = maze[2][1].classList.add("boxHolder");


function createMaze() {
    console.log(maze);
    const board = document.createElement("div");
    board.id = "board";
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
                case "X":
                    cell.classList.add("boxStorage");
                    cell.classList.add("box");
            }
        }
    }
    page.appendChild(board);
}
createMaze();
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
                break;
            };
            if (maze[y - 1][x] === "B") {
                if (maze[y - 2][x] === "W") {
                    break;
                }
                if (maze[y - 2][x] === "B") {
                    break;
                }

                let oneUp = maze[y - 1].split("");
                let twoUp = maze[y - 2].split("");
                let removeBoxOneUp = (oneUp.splice(x, 1, " "));
                let replaceBoxTwoUp = (twoUp.splice(x, 1, "B"));
                stringJoinerUpOne = oneUp.join("");
                stringJoinerUpTwo = twoUp.join("");
                let newMazeRowUpOne = maze.splice(y - 1, 1, stringJoinerUpOne);
                let newMazeRowUpTwo = maze.splice(y - 2, 1, stringJoinerUpTwo);
                board.remove();
                createMaze();
                y -= 1;
                personTop = personTop - 40;
                document.getElementById("person").style.top = personTop + "px";
                break;
            };
            if (maze[y - 1][x] === "O") {
                y -= 1;
                personTop = personTop - 40;
                document.getElementById("person").style.top = personTop + "px";
                break;
            };
            if (maze[y - 1][x] === "X") {
                y -= 1;
                personTop = personTop - 40;
                document.getElementById("person").style.top = personTop + "px";
                break;
            };
            break;
        case ("ArrowDown"):
            if (maze[y + 1][x] === " ") {
                y += 1;
                personTop = personTop + 40;
                document.getElementById("person").style.top = personTop + "px";
                break;
            };
            if (maze[y + 1][x] === "B") {
                if (maze[y + 2][x] === "B") {
                    break;
                }
                if(maze[y + 2][x] === "W") {
                    break;
                }
                let oneDown = maze[y + 1].split("");
                let twoDown = maze[y + 2].split("");
                let removeBoxOneDown = (oneDown.splice(x, 1, " "));
                let replaceBoxTwoDown = (twoDown.splice(x, 1, "B"));
                stringJoinerDownOne = oneDown.join("");
                stringJoinerDownTwo = twoDown.join("");
                let newMazeRowDownOne = maze.splice(y + 1, 1, stringJoinerDownOne);
                let newMazeRowDownTwo = maze.splice(y + 2, 1, stringJoinerDownTwo);
                board.remove();
                createMaze();
                y += 1;
                personTop = personTop + 40;
                document.getElementById("person").style.top = personTop + "px";
                break;
            };
            if (maze[y + 1][x] === "O") {
                y += 1;
                personTop = personTop + 40;
                document.getElementById("person").style.top = personTop + "px";
                break;
            };
            if (maze[y + 1][x] === "X") {
                y += 1;
                personTop = personTop + 40;
                document.getElementById("person").style.top = personTop + "px";
                break;
            };
            break;

        case ("ArrowRight"):
            // console.log("ArrowRight");
            if (maze[y][x + 1] === " ") {
                x += 1;
                personLeft = personLeft + 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            if (maze[y][x + 1] === "S") {
                x += 1;
                personLeft = personLeft + 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };

            if (maze[y][x + 1] === "B") {
                if (maze[y][x + 2] === "W") {
                    break;
                }
                if (maze[y][x + 2] === "B") {
                    break;
                }
                let currentYArray = maze[y].split("");
                let removeBoxinYarray = (currentYArray.splice(x + 1, 1, " "));
                let insertBoxatnextXpostion = (currentYArray.splice(x + 2, 1, "B"));
                let stringJoiner = currentYArray.join("");
                let newMazeRow = maze.splice(y, 1, stringJoiner);
                board.remove();
                createMaze();
                x += 1;
                personLeft = personLeft + 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            if (maze[y][x + 1] === "O") {
                x += 1;
                personLeft = personLeft + 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            if (maze[y][x + 1] === "X") {
                x += 1;
                personLeft = personLeft + 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            break;


        case ("ArrowLeft"):
            if (maze[y][x - 1] === " ") {
                personLeft = personLeft - 40;
                x -= 1;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            if (maze[y][x - 2] === "W") {
                break;
            }
            if (maze[y][x - 2] === "B") {
                break;
            }
            if (maze[y][x - 1] === "B") {
                let currentYArrayLeft = maze[y].split("");
                let removeBoxInYArrayLeft = (currentYArrayLeft.splice(x - 1, 1, " "));
                let addBoxAtNextXPositionLeft = (currentYArrayLeft.splice(x - 2, 1, "B"));
                let stringJoinerLeft = currentYArrayLeft.join("");
                let newMazeRow = maze.splice(y, 1, stringJoinerLeft);
                board.remove();
                createMaze();
                x -= 1;
                personLeft = personLeft - 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            if (maze[y][x - 1] === "S") {
                x -= 1;
                personLeft = personLeft - 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            if (maze[y][x - 1] === "O") {
                x -= 1;
                personLeft = personLeft - 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            if (maze[y][x - 1] === "X") {
                x -= 1;
                personLeft = personLeft - 40;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            break;
    };
})