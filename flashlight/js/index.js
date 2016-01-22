var svg = doc.getElem('svg');
var hole = doc.getElem('#hole');
var rect = doc.getElem('#rect');
var rectTop = doc.getElem('#rect-top');
var path = doc.getElem('#path');
var gradInvert = doc.getElem('#rad-grad-invert');

var holeR = 100;

var svgW = svg.clientWidth;
var svgH = svg.clientHeight;

var svgHorcenter = svgW / 2;

setCoords();

function setCoords( event ) {
    
    var cx = hole.cx.baseVal.value;
    var cy = hole.cy.baseVal.value;
    
    if ( event ) {
        cx = event.offsetX;
        cy = event.offsetY;
    }    
    
    hole.setAttr({
        'cx': cx,
        'cy': cy
    });
    
    gradInvert.setAttr({
        'cx': cx,
        'cy': cy
    });
    
    var pathCoordsList = [
        cx - holeR, cy,
        cx + holeR, cy,
        svgHorcenter, svgH
    ];
    
    var pathCoords = pathCoordsList.join(' ');
    
    path.setAttr({
        'd': 'M' + pathCoords
    });
}

rectTop.onmousemove = function( event ) {
    setCoords( event );
}

window.onresize = function () {
    svgW = svg.clientWidth;
    svgH = svg.clientHeight;

    svgHorcenter = svgW / 2;

    setCoords();
}