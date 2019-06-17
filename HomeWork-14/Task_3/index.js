function printString ( text, container ) {
    printLetter = ( letter, index ) => new Promise (
        resolve => setTimeout (
            () => resolve ( letter ),
            1000*index
        )
    )
    let demo = container && container.nodeType === 1 ?
        container : document.body.appendChild (
            document.createElement ( "div" )
        )
    let tmp = text.split("")
    let index = 0;
    ( async function () {
        demo.appendChild ( document.createTextNode(
            await printLetter ( tmp.shift(), index++ )
        ))
        while ( tmp.length ) arguments.callee ()
    })()
}