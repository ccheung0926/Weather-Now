// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === "number" || typeof obj === "boolean"){
  	// console.log(typeof obj.toString());
  	//console.log(obj)
  	return obj.toString();
  }
  if(obj === null){

  	return ""+obj;
  }
  if(typeof obj === 'string'){
  	return "\""+obj+"\"";
  }
  if(Array.isArray(obj)){
  	var head = "[";
  	var tail = "]";
  	for(var i = 0; i < obj.length; i++){
  		if(i === obj.length - 1){
  			head += stringifyJSON(obj[i]);
  		}
  		else{
  			head += stringifyJSON(obj[i]) + ",";
  		}
  	}
  	return head + tail;
  }
  else{
  	var head = "{";
  	var tail = "}";
  	for(var keys = Object.keys(obj), i = 0, end = keys.length; i < end; i++){
  		var key = keys[i]
  		var value = obj[key];
  		if(i !== end - 1){
  			if(typeof value === 'function' || typeof value === "undefined"){
  				return '{}';
  			}
  			head += stringifyJSON(key) + ":" + stringifyJSON(value) + ",";
  		}
  		else{
  			if(typeof value === 'function' || typeof value === "undefined"){
  				return '{}';
  			}
  			head += stringifyJSON(key) + ":" + stringifyJSON(value);	
  		}
  	}
  	return head + tail;
  }
};








