////////////////////////////////////////To  v   Do/////////////////////////////////////////////////////////////
//Create logic for when you're moving the player to the next space, and that next space contains
// a box on top of a box holder. Also need to create logic for when a box is moved onto a box holder.
////////////////////////////////////////To  ^   Do/////////////////////////////////////////////////////////////

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
//
//
// Creating variables to represent the person's position on the maze array [y][x] and on the webpage
let personTop = 90;
let personLeft = 90;
let y = 2;
let x = 2;
let personPosition = maze[y][x];
let page = document.getElementById("body");
//
//
// Creates divs for the individual characters in the maze arrays, and adds a class for each letter type
// that is then styled with css.
function createMaze() {
    const board = document.createElement("div");
    board.id = "board";
    for (let row of maze) {
        for (let cells of row) {
            let cell = document.createElement("div");
            cell.dataset.cellnumb = cells
            cell.classList.add("boardcells");
            board.appendChild(cell);
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
                    cell.classList.add("boxInStorage");
            }
        }
    }
    page.appendChild(board);
}
createMaze();
//
//
// Event listener for when keys are pressed on the keyboard
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch (keyName) {
        case ("ArrowUp"):
            if (maze[y - 1][x] === "W") {
                break;
            }
            //
            //
            // If the string element directly above the current string element is a space,
            // move the player up 40 pixels.
            if (maze[y - 1][x] === " ") {
                y -= 1;
                personTop = personTop - 40;
                document.getElementById("person").style.top = personTop + "px";
                // console.log(maze[y][x]);
                // console.log("position x:" + x + " " + "postion y:" + y);
                break;
            };
            //
            //
            //
            // If the index of the string directly above the current string index is a B, do these things.
            if (maze[y - 1][x] === "B") {
                //
                //
                // If the index of the string two above the current string index is a W or B,
                // disable movement in that direction
                if (maze[y - 2][x] === "W") {
                    break;
                }
                if (maze[y - 2][x] === "B") {
                    break;
                }
                if (maze[y - 2][x] === "X") {
                    break;
                }
                if (maze[y - 2][x] === "O") {
                    let oneUp = maze[y - 1].split("");
                    let twoUp = maze[y - 2].split("");
                    let removeBoxOneUp = (oneUp.splice(x, 1, " "));
                    let replaceBoxTwoUp = (twoUp.splice(x, 1, "X"));
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
                }
                //
                //
                //
                // Splits the string into an array at the index before the current index, and the string two before.
                let oneUp = maze[y - 1].split("");
                let twoUp = maze[y - 2].split("");
                //
                //
                //
                // Replaces the a letter in the array before the current array with a space at current index of x.
                // Replaces the a letter in the array two before the current array with a B at the current index of x.
                let removeBoxOneUp = (oneUp.splice(x, 1, " "));
                let replaceBoxTwoUp = (twoUp.splice(x, 1, "B"));

                //
                //
                //
                // Turns the arrays back into strings.
                stringJoinerUpOne = oneUp.join("");
                stringJoinerUpTwo = twoUp.join("");
                //
                //
                //
                // Replaces the strings in the maze array to reflect the current changes made to the maze.
                let newMazeRowUpOne = maze.splice(y - 1, 1, stringJoinerUpOne);
                let newMazeRowUpTwo = maze.splice(y - 2, 1, stringJoinerUpTwo);
                //
                //
                //
                // Removes the current board, and replaces it with a new one.
                board.remove();
                createMaze();
                //
                //
                //
                // Moves the person
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
                if (maze[y - 2][x] === "B") {
                    break;
                }
                if (maze[y - 2][x] === "W") {
                    break;
                }
                let oneUp = maze[y - 1].split("");
                let twoUp = maze[y - 2].split("");
                let removeBoxOneUp = (oneUp.splice(x, 1, "O"));
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
            break;
            //
            //
            //
            //
        case ("ArrowDown"):
            if (maze[y + 1][x] === "W") {
                break;
            }
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
                if (maze[y + 2][x] === "W") {
                    break;
                }
                if (maze[y + 2][x] === "X") {
                    break;
                }
                if (maze[y + 2][x] === "O") {
                    let oneDown = maze[y + 1].split("");
                let twoDown = maze[y + 2].split("");
                let removeBoxOneDown = (oneDown.splice(x, 1, " "));
                let replaceBoxTwoDown = (twoDown.splice(x, 1, "X"));
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
                if (maze[y + 2][x] === "W") {
                    break;
                }
                if (maze[y + 2][x] === "B") {
                    break;
                }
                let oneUp = maze[y + 1].split("");
                let twoUp = maze[y + 2].split("");
                let removeBoxOneUp = (oneUp.splice(x, 1, "O"));
                let replaceBoxTwoUp = (twoUp.splice(x, 1, "B"));
                stringJoinerUpOne = oneUp.join("");
                stringJoinerUpTwo = twoUp.join("");
                let newMazeRowUpOne = maze.splice(y + 1, 1, stringJoinerUpOne);
                let newMazeRowUpTwo = maze.splice(y + 2, 1, stringJoinerUpTwo);
                board.remove();
                createMaze();
                y += 1;
                personTop = personTop + 40;
                document.getElementById("person").style.top = personTop + "px";
                break;
            };
            break;

        case ("ArrowRight"):
            // console.log("ArrowRight");
            if (maze[y][x + 1] === "W") {
                break;
            }
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
                if (maze[y][x + 2] === "X") {
                    break
                }
                if (maze[y][x + 2] === "O") {
                    let currentYArray = maze[y].split("");
                    let removeBoxinYarray = (currentYArray.splice(x + 1, 1, " "));
                    let insertBoxatnextXpostion = (currentYArray.splice(x + 2, 1, "X"));
                    let stringJoiner = currentYArray.join("");
                    let newMazeRow = maze.splice(y, 1, stringJoiner);
                    board.remove();
                    createMaze();
                    x += 1;
                    personLeft = personLeft + 40;
                    document.getElementById("person").style.left = personLeft + "px";
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
                if (maze[y][x + 2] === "W") {
                    break;
                }
                if (maze[y][x + 2] === "B") {
                    break;
                }
                let currentYArray = maze[y].split("");
                let removeBoxinYarray = (currentYArray.splice(x + 1, 1, "O"));
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
            break;


        case ("ArrowLeft"):
            if (maze[y][x - 1] === "W") {
                break;
            }
            if (maze[y][x - 1] === " ") {
                personLeft = personLeft - 40;
                x -= 1;
                document.getElementById("person").style.left = personLeft + "px";
                break;
            };
            if (maze[y][x - 2] === "W") {
                break;
            }
            if (maze[y][x - 1] === "B") {
                if (maze[y][x - 2] === "X") {
                    break;
                }
                if (maze[y][x - 2] === "B") {
                    break;
                }
                if (maze[y][x - 2] === "O") {
                    let currentYArrayLeft = maze[y].split("");
                    let removeBoxInYArrayLeft = (currentYArrayLeft.splice(x - 1, 1, " "));
                    let addBoxAtNextXPositionLeft = (currentYArrayLeft.splice(x - 2, 1, "X"));
                    let stringJoinerLeft = currentYArrayLeft.join("");
                    let newMazeRow = maze.splice(y, 1, stringJoinerLeft);
                    board.remove();
                    createMaze();
                    x -= 1;
                    personLeft = personLeft - 40;
                    document.getElementById("person").style.left = personLeft + "px";
                    break;
                }
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
                let currentYArrayLeft = maze[y].split("");
                let removeBoxInYArrayLeft = (currentYArrayLeft.splice(x - 1, 1, "O"));
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
            break;
    };
})
console.log(maze);