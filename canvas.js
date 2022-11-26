/*var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var box_width = window.innerWidth/12

var c = canvas.getContext("2d");
c.fillStyle = "#26A212";

var starting_x_location = 0
var starting_y_location = 0

for (let i = 0; i < 12; i++) {
    console.log(starting_y_location)
    for (let i = 0; i < 12; i++) {
        c.fillRect(starting_x_location, starting_y_location, box_width - 10, box_width - 10)
        starting_x_location = (starting_x_location + box_width)
    }
    starting_x_location = 0
    starting_y_location = (starting_y_location + box_width)
};
*/

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//Set size of HTML grid
window.onload = function(){
    var box_width = (window.innerWidth - 40)/12;
    var box_height = (window.innerHeight - 100)/12;
    var columnWidthString = ""
    var columnHeightString = ""

    for (let i = 0; i < 12; i++) {
            columnWidthString += box_width-7.5 + "px "
            columnHeightString += box_height + "px "
        }

    document.getElementById("drawnGrid").style.gridTemplateColumns = columnWidthString;
    document.getElementById("drawnGrid").style.gridTemplateRows = columnHeightString;
    
};

//Draw HTML Grid
const gridDrawing = document.getElementById("drawnGrid");

let htmlString = "";
for (let i = 0; i < 144; i++) {
    htmlString += '<div ondrop="drop(event)" ondragover="allowDrop(event)" class="grid-item"></div>'
}

gridDrawing.innerHTML = htmlString;

//Create new players

var playerCounter = 1

function new_blocker(player_type) {
    var img = document.createElement('img');
    img.id = "drag" + playerCounter;
    playerCounter = playerCounter + 1;
    switch(player_type) {
        case "KX":
            img.src = "KX.svg";
            break;
        case "SB":
            img.src = "SB.svg";
            break;
        case "SK":
            img.src = "SK.svg";
            break;
        case "CS":
            img.src = "CS.svg";
    };

    img.draggable = true;
    img.setAttribute('ondragstart', 'drag(event)');
    img.width = "75";
    img.height = "75";
    document.getElementById("bench").appendChild(img);
}