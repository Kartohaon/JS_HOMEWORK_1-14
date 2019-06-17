var elem = document.body.appendChild(document.createElement('p'));

elem.innerText = 'CLick ME(pls)';
elem.className = 'parag';
elem.style  = `
    text-align: center;
    transition: all 1s;
`
elem.onclick = function (event) {
		if (document.querySelector(".image")) return
		    var image = document.body.appendChild(document.createElement ("img"));
		    image.className = "image"
		    image.src = "https://pm1.narvii.com/6958/883f81e1b3cc7fc6e7cf216a6032c55c727c6a65r1-800-794v2_00.jpg"
            image.width = "100"
            image.style.transition = 'all 1s'
            image.onmouseover = function (event) {
                this.width = '300'

            }
            image.onmouseout = function (event) {
                this.width = '100'
            }
            image.onclick = function (event) {
                this.style.display = 'none'
            }
}

// elem.onmouseover = function (event) {
//     this.style.color = 'aabbcc'
//     this.style.fontSize = '25'
// }

// elem.onmouseout = function (event) {
//     this.style.color = 'black'
//     this.style.fontSize = '12'
// }