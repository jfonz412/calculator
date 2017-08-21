var input; // will be pushed to inputNums
var inputNums = []; 
var joinedInputNumbers = [];
var operator;

$(document).ready(function(){
	numberButton();
	operatorButton();
	equalButton();
	allClearButton();
});

/************ FUNCTIONS *************/

/** Button Functions **/
function numberButton(){ 
	$(".num").click(function(){
		console.log("Button " + $(this).val() + " clicked!");
		input = $(this).val();
		console.log("Input is " + input);
		inputNums.push(input);
		console.log("inputNums are " + inputNums);
	})
}

function operatorButton(){
	$(".operator").click(function(){
		joinInputNumbers();
		operator = $(this).val();
		console.log("Current operator is: " + operator);
	})
}

function equalButton(){
	$("#equal").click(function(){
		joinInputNumbers();
		switch(operator) {
			case "+":
				add();
				break;
			case "-":
				subtract();
				break;
			case "*":
				multiply();
				break;
			case "/":
				divide();
				break;
			default:
				console.log("Invalid entry");
		} 
	})
}

function allClearButton(){
	$("#ac").click(function(){
		clearAllInput();
	})
}

/** Helper Functions **/
function joinInputNumbers(){
	if(inputNums) {
		x = inputNums.join("");
		joinedInputNumbers.push(x);
		inputNums = [];
		console.log("Operator button pressed");
		console.log("joinedInputNumbers are " + joinedInputNumbers);
	} else {
		console.log("No inputNums");
	}

}

function clearAllInput(){
	input = null;
	operator = null;
	inputNums = [];
	joinedInputNumbers = [];
	console.log("Clearing all input");
}

/** Math Functions **/
function add(input){
	console.log("Adding");
	var total = 0;
	for(var i=0;i<joinedInputNumbers.length;i++) {
		total += Number(joinedInputNumbers[i]);
	}
	console.log("Sum is " + total);
	clearAllInput();
	return total;
}

function subtract(input){
	console.log("Subtracting");	
}

function multiply(input){
	console.log("Multiplying");	
}

function divide(input){
	console.log("Dividing");	
}



//Not currently used
function drawButtons(){
	for(var i=0;i<4;i++){
		$('.calculator').append('<div class="row"></div>');
	}
	for(var i=0;i<4;i++){
		$('.row').append('<div class="button"></div>');
	}
}