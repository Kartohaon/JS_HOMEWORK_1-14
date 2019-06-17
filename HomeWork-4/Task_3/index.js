function Sample ( params ) {

}

var obj = new Sample();

Sample.prototype.addProperty = function ( propName, propValue ) {
    this [ propName ] = propValue
};

obj.addProperty ( "name", "Anton" );