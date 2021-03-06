function blankCanvas(event) {
    var table = document.getElementById('pixelCanvas');
    table.innerHTML = "";  // clears the table element for the next design
	var rows = document.getElementById("inputHeight").value;
    var cols = document.getElementById("inputWidth").value;
    makeGrid(rows, cols);
    return false;
}

function makeGrid(rows, cols) {
    var table = document.getElementById('pixelCanvas');
    var colorPicker = document.getElementById("colorPicker");
    for (r=0; r<rows; r++) {
        var row = table.insertRow(r);
        for (c=0; c<cols; c++) {
            var cell = row.insertCell(c);
            var mouseIsDown = false
            cell.addEventListener('mouseup', function(){mouseIsDown = false})
            cell.addEventListener('mousedown', function(){mouseIsDown = true})
            cell.addEventListener('mousemove', e => {
                if (mouseIsDown){
                    e.target.style.background = colorPicker.value;
                }
            })
        };
    };
};

makeGrid(25, 25);
