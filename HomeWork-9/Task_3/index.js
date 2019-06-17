let changeClass = ( classname, styleString ) =>  
    Array.from ( document.styleSheets )
        .filter ( sheet => !sheet.href 
                ).forEach (
                    sheet => 
                        Array.from(sheet.cssRules)
                            .filter(
                                rule => rule.style[styleString.split(':')[0]] = 
                                    styleString.split(':')[1]
                                    )                   
                )

//changeClass ('вписываем нужный класс', "что хотим поменять, например: 'bgc'" )