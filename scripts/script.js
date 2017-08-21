var input; // will be pushed to inputNums
var inputNums = []; 
var joinedInputNumbers = [];
var operator;

$(document).ready(function(){
	numberButton();
	operatorButton();
});

/************ FUNCTIONS *************/

// Button Functions
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

function joinInputNumbers(){
	x = inputNums.join("");
	joinedInputNumbers.push(x);
	inputNums = [];
	console.log("Operator button pressed");
	console.log("joinedInputNumbers are " + joinedInputNumbers);
}

// Math Functions
function add(input){

}

function subtract(input){
	
}

function multiply(input){
	
}

function divide(input){
	
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