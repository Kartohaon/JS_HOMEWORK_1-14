var handBag = {
    technologies: ['phone', 'headphones'],
    cosmetics: ['stick',  'powder'],
    additionFunc: function (obj, prop) {
        handBag[ obj ] = prop
    },
    deleteFunc: function (obj) {
        if(handBag['obj'] === handBag['']) {
            delete handBag[obj]
        }   
    }
};

handBag.additionFunc('money', '2000');
handBag.deleteFunc('cosmetics');
console.log(handBag);