// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var found = [];
  function explore(node){
  	console.log(node.childNodes[1].childNodes[0]);
  	// for(var i = 0; i < node.childNodes.length; i++){
  	// 	var child = node.childNodes[i];
  	// 	var name = child.className;
  	// 	if(!child.has)
  	// }
  	// return found;
  }
  explore(document);
  return found;
  
  // console.log("document.body", document.body);
};