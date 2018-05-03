window.every = function (array, callback) {};
window.some = function (array,callback) {};
window.forEach = function (array,callback) {
	for(var i = 0; i < array.length; i++){
		callback(array[i], i, array);
	}
};
window.filter = function () {};
window.map = function () {};
