
var userInfo = function () {
	if (this.registered) {
	    console.log(`Дата регистрации: ${this.data}`);
	}
	else {
        console.log( `Незарегистрированный пользователь: ${this.name}`);
	}
};

var first = {
	name : 'Ivan',
	registered : true,
	data : '18.03.19',
	getInfo: userInfo
};

var second = {
	name : 'Andrey',
	registered : false,
	data : '14.02.18',
	getInfo: userInfo
};

first.getInfo();
second.getInfo();