var LibraryBook = function ( title = "Без названия", year = "нет данных", author = "нет данных" ) {
        var _title = title; 
        var _year = year;
        var _author = author;
        var readerName = null;
        var readerData = null;
        var giveTheBook = function (client, date = new Date()) {
                readerName = client,
                readerData = date
        };
        this.getBookInfo = function () {
                console.log(readerData );
        };
        this.getTheBook = function ( client ) {
                readerName === '' ?  giveTheBook (client) : null;
                return title;
        };
        this.returnBook = function () {
                readerName = null, 
                readerData = null
        };
};       

var book = new LibraryBook ('Выразительный JAVASCRIPT', '2011', 'Marijn Haverbeke');
        
console.log(book.getTheBook('Onopchenko Anton'));




























