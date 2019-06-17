style = document.head.appendChild(document.createElement('style'));

style.insertAdjacentHTML (`afterBegin`,`.redBack {background-color: red!important;}`);

for ( var elem of document.body.children );
 elem.tagName !== 'script' ? elem.className = 'redBack' : null ;