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
    text.split("")
        .forEach (
            async ( letter, index ) => demo.appendChild (
                document.createTextNode(
                    await printLetter ( letter, index )
                )
            )
        )
}