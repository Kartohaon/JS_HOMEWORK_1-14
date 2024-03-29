var addElem = tagName => document.body.appendChild (
    document.createElement ( tagName )
)

var selector = addElem ( 'input' )

selector.type = 'file'
selector.multiple = true
selector.id = 'selectImages'
selector.style.display = 'none'

var label = addElem ( 'label' )

label.htmlFor = 'selectImages'
label.innerText = 'Select images'

var testFile = file => new Promise (
    ( resolve, reject ) => {
        if ( file.type.indexOf ( "image/" ) < 0 ) {
            reject ( `файл ${file.name} не является изображением` )
            return
        }
        var fileReader = new FileReader ()
        fileReader.readAsDataURL ( file )
        fileReader.onload = event =>
            resolve ( event.target.result )
        fileReader.onerror = event =>
            reject ( `Error: ${file.name}` )
    }
)


selector.onchange = function ( event ) {
    for ( var file of event.target.files ) {
        testFile ( file )
            .then ( result => addElem ( "img" ).src = result )
            .catch ( error => console.error ( error ) )
    }
}