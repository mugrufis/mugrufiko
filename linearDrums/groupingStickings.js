/* Grouping Stickings. Should be a JSON in the future, 
but this is a start to make it look fine */



(function (global) {
	'use strict'
	var grouping2 = ["rl","rf"]

	var grouping3 = ["rlf","lrf","Rlf","rLf"]

	var grouping4 = ["rlff","rllf","rrlf"]

	var grouping5 = ["rlrlf","rlrrf","rllrf"]

	function get2(){
		return grouping2;
	}
	function get3(){
		return grouping3;
	}
	function get4(){
		return grouping4;
	}
	function get5(){
		return grouping5;
	}

	global.get2 = get2;
	global.get3 = get3;
	global.get4 = get4;
	global.get5 = get5;

})(window);