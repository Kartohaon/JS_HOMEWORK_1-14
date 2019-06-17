var width = 200;
var height = 200;

var collection = [];

function enter  ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
};
function leave  ( event ) {
    event.target.style.backgroundColor = '#ff00ff50'
};
function clickHandler ( event ) {
    var currentElement = event.target;
    var child = currentElement.querySelector('div');

    if (child !== null) {
        currentElement.parentNode.appendChild(child);
    }
    currentElement.remove();
};

[ 1, 2, 3, 4, 5, 6, 7  ].forEach (
    function ( tag, index, arr  ) {
        var elem = document.createElement('div');
        if (index === 0) {
             document.body.appendChild(elem);
        } else {
            var prevElem = collection[index - 1]; 
            width -= 20;
            height -= 20;

            prevElem.appendChild(elem);
        }
        collection.push(elem);
        elem.style = `
            background-color: #ff00ff50;
            border: dotted 1px yellow;
            `;
        elem.style.width = `${width}px`;
        elem.style.height = `${height}px`;
            
        elem.onmouseover = enter;
        elem.onmouseout = leave ;
        elem.onclick = clickHandler;
        elem.title = tag;
    }
)
