var tags = [ 'div', 'h1', 'main', 'section' ];
var classes = [ 'header', 'left', 'right', 'footer'];

var style = document.head.appendChild(document.createElement('style'));

style.insertAdjacentHTML (`afterBegin`, `.header, .left, .right, .footer {
	width: 150px;
	height: 150px;
}`);
style.insertAdjacentHTML (`afterBegin`,`.header {background-color: aa13bb;}`);
style.insertAdjacentHTML (`afterBegin`,`.left {background-color: bb14cc;}`);
style.insertAdjacentHTML (`afterBegin`,`.right {background-color: cc15dd;}`);
style.insertAdjacentHTML (`afterBegin`,`.footer {background-color: dd14ee; margin-top: 22px;}`);

for (var i = 0; i < tags.length; i++) {
	var tagHTML = document.body.appendChild(document.createElement(tags[i]));
	tagHTML.classList.add(classes[i]);	
}