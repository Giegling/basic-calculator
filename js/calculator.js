var equalHistory = [];
var equalNumbers = [];

function run1(){
	document.case.display.value += "1"
};

function run2(){
	document.case.display.value += "2"
};

function run3(){
	document.case.display.value += "3"
};

function run4(){
	document.case.display.value += "4"
};

function run5(){
	document.case.display.value += "5"
};

function run6(){
	document.case.display.value += "6"
};

function run7(){
	document.case.display.value += "7"
};

function run8(){
	document.case.display.value += "8"
};

function run9(){
	document.case.display.value += "9"
};

function run0(){
	document.case.display.value += "0"
};

function runPlus(){
	document.case.display.value += "+"
};

function runMinus(){
	document.case.display.value += "-"
};

function runMultiply(){
	document.case.display.value += "*"
};

function runDivide(){
	document.case.display.value += "/"
};

function runC(){
	document.case.display.value = ""
	document.case.result.value = "0"
};

function editHistory(){
		document.getElementById("history").innerHTML += document.case.display.value + " = " + eval(document.case.display.value) + "<br>";
}

function runEqual(){
	var equal = eval(document.case.display.value);
	document.case.result.value = equal;
	editHistory();
};
