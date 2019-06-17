var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
            document.getElementById ( "demo" ) :
            document.body.appendChild (document.createElement ( "h3" ));
    container.style = `color: magenta;`;
    var index = 0;
    return function ( message ) {
        if (message === '') {return;}
        
        container.textContent += message[0]; 
        
        setTimeout ( () => {arguments.callee(message.slice(1))}, 700 );
    };
})( 1 );

typeMessage ( `Welcome to the hell!` );