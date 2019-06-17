var tags = [
   {
       name: 'header',
       attribs: {
           className: 'header',
           title: 'This is header'
        }
   },

   {
    name: 'main',
    attribs: {
        className: 'main',
        title: 'This is main'
    }
    },

    {
        name: 'footer',
        attribs: {
            className: 'footer',
            title: 'This is footer'
        }
    }
];

var style = document.head.appendChild(document.createElement('style'));

style.insertAdjacentHTML (`afterBegin`, `.header, .main, .footer {
	width: 150px;
	height: 150px;
}`);
style.insertAdjacentHTML (`afterBegin`,`.header {background-color: aa13bb;}`);
style.insertAdjacentHTML (`afterBegin`,`.main {background-color: bb14cc; margin-top: 22px;}`);
style.insertAdjacentHTML (`afterBegin`,`.footer {background-color: dd14ee; margin-top: 22px;}`);

function click (event) {
    function randomColor(){
        return Math.round(Math.random() * 255)
    }
    event.target.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
};
for(var tag of tags){
    var elem = document.body.appendChild(
        document.createElement(`${tag.name}`)
    )
    for(var attrib in tag.attribs)
        elem[attrib] = tag.attribs[attrib]
    elem.onclick = function (event){
        click(event)
    }
};