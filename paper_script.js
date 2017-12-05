var patternChoice = Math.floor(Math.random() * 3);

var x = 0;
var y = 0;
var size = 15;
var strokeWidth = 2;

var shape = {
    backSlash: {
        draw: function() {
            new Path.Line({
                from: [x, y],
                to: [x+size, y+size],
                strokeColor: "black",
                strokeWidth: strokeWidth
            });
        }
    },
    forwardSlash: {
        draw: function() {
            new Path.Line({
                from: [x+size, y],
                to: [x, y+size],
                strokeColor: "black",
                strokeWidth: strokeWidth
            });
        }
    },
    leftLine: {
        draw: function() {
            new Path.Line({
                from: [x, y],
                to: [x, y+size],
                strokeColor: "black",
                strokeWidth: strokeWidth
            });
        }
    },
    rightLine: {
        draw: function() {
            new Path.Line({
                from: [x+size, y+size],
                to: [x+size, y],
                strokeColor: "black",
                strokeWidth: strokeWidth
            });
        }
    },
    upLine: {
        draw: function() {
            new Path.Line({
                from: [x+size, y],
                to: [x, y],
                strokeColor: "black",
                strokeWidth: strokeWidth
            });
        }
    },
    downLine: {
        draw: function() {
            new Path.Line({
                from: [x, y+size],
                to: [x+size, y+size],
                strokeColor: "black",
                strokeWidth: strokeWidth
            });
        }
    }
};
var pattern = {
    slashes: {
        make: function() {
            var randomNumber = Math.floor(Math.random() * 2);
            if(randomNumber === 0) shape.backSlash.draw();
            if(randomNumber === 1) shape.forwardSlash.draw();
        }
    },
    lines: {
        make: function() {
            var randomNumber = Math.floor(Math.random() * 4);
            if(randomNumber === 0) shape.leftLine.draw();
            if(randomNumber === 1) shape.rightLine.draw();
            if(randomNumber === 2) shape.upLine.draw();
            if(randomNumber === 3) shape.downLine.draw();
        }
    },
    linesAndSlashes: {
        make: function() {
            var randomNumber = Math.floor(Math.random() * 6);
            if(randomNumber === 0) shape.leftLine.draw();
            if(randomNumber === 1) shape.rightLine.draw();
            if(randomNumber === 2) shape.upLine.draw();
            if(randomNumber === 3) shape.downLine.draw();
            if(randomNumber === 4) shape.backSlash.draw();
            if(randomNumber === 5) shape.forwardSlash.draw();
        }
    }
};

function onFrame(event) {
    if(x <= view.size.width && y <= view.size.height) {
        if(patternChoice === 0) pattern.slashes.make();
        if(patternChoice === 1) pattern.lines.make();
        if(patternChoice === 2) pattern.linesAndSlashes.make();
        next();
    }
}

function next() {
    x = x+size;
    if(x > view.size.width) {
        x = 0;
        y = y+size;
    }
}
