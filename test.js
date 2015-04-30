
function simulateClick(elem) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var canceled = !elem.dispatchEvent(evt);
}

var input1 = document.createElement('input');
input1.id = 'one';
document.body.appendChild(input1);

var input2 = document.createElement('input');
input2.id = 'two';
document.body.appendChild(input2);


$('input').on('click', function(e) {
    console.log('PASS!', e.target.id, ' clicked! ');
})





// either click 'em or this is for testing…

function simulateClick(elem) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var canceled = !elem.dispatchEvent(evt);
}


simulateClick(input1)

setTimeout(function(){ simulateClick(input2)  }, 500);