window.every = function (arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
window.some = function (arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
window.forEach = function (arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};
window.filter = function (arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
window.map = function (arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
	  newArr.push(callback(arr[i], i, arr));
  }
  return newArr;	
};
