var width = 200;
var height = 200;

var collection = [];

function over ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
};
function out ( event ) {
    event.target.style.backgroundColor = '#ff00ff50'
};
function clickHandler ( event ) {
    event.target.remove();
};

[ "first", "second", "third", "fourth" ].forEach (
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
        
        elem.title = tag;
        elem.onmouseover = over;
        elem.onmouseout = out;
        elem.onclick = clickHandler;
    }
)
