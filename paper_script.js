var x = 0;
var y = 0;
var size = 15;
var strokeWidth = 2;

function next() {
    x = x+size;
    if(x > view.size.width) {
        x = 0;
        y = y+size;
    }
}

// (\)
function drawBackSlash() {
    new Path.Line({
        from: [x, y],
        to: [x+size, y+size],
        strokeColor: "black",
        strokeWidth: strokeWidth
    });
}

// (/)
function drawForwardSlash() {
    new Path.Line({
        from: [x+size, y],
        to: [x, y+size],
        strokeColor: "black",
        strokeWidth: strokeWidth
    });
}

function onFrame(event) {
    if(x <= view.size.width && y <= view.size.height) {
        if(Math.round(Math.random())) {
            drawBackSlash();
        }
        else {
            drawForwardSlash();
        }
        next();
    }
}
