var input;
var inputNums = []; 
var joinedInputNumbers = [];
var operator;
var operatorInputs = [];
var total = 0;

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
		operatorInputs.push(operator);
		console.log("operatorInputs are " + operatorInputs);
	})
}

function equalButton(){
	$("#equal").click(function(){
		joinInputNumbers();
		var i = 0;
		total = joinedInputNumbers[i];
		while(i<operatorInputs.length){
			switch(operatorInputs[i]){
				case "+":
					total = joinedInputNumbers[i+1] + total;
					console.log("Adding...Current total is " + total);
					break;
				case "-":
					total -= joinedInputNumbers[i+1];
					console.log("Subtracting...Current total is " + total);
					break;
				case "*":
					total *= joinedInputNumbers[i+1];
					console.log("Multiplying...Current total is " + total);
					break;
				case "/":
					total /= joinedInputNumbers[i+1];
					console.log("Dividing...Current total is " + total);
					break;
				default:
					console.log("Invalid input");
			}
			i++;
		}
		clearAllInput();
		console.log("Final total is " + total);
		console.log("Calulations complete");
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
		convertNums();
		inputNums = [];
		console.log("Operator button pressed");
		console.log("joinedInputNumbers are " + joinedInputNumbers);
	} else {
		console.log("No inputNums");
	}
}

// Convert string inputs to ints
function convertNums(){
	for(i=0;i<joinedInputNumbers.length;i++){
		joinedInputNumbers[i] = parseInt(joinedInputNumbers[i]);
	}
}

function clearAllInput(){
	input = null;
	operator = null;
	inputNums = [];
	joinedInputNumbers = [];
	operatorInputs = [];
	console.log("Clearing all input");
}
