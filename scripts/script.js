var input;
var inputNums = []; 
var joinedInputNumbers = [];
var operator;
var operatorInputs = [];
var total = 0;
var done = false;
var lastClicked;

$(document).ready(function(){
	numberButton();
	operatorButton();
	equalButton();
	allClearButton();
	mysteryButton();
});

/************ FUNCTIONS *************/

/** Button Functions **/
function numberButton(){ 
	$(".num").click(function(){
		if(done){
			clearDisplay();
			done = !done;
		}
		console.log("Button " + $(this).val() + " clicked!");
		input = $(this).val();
		console.log("Input is " + input);
		inputNums.push(input);
		console.log("inputNums are " + inputNums);
		lastClicked = "number";
		display(input);
	})
}

function operatorButton(){
	$(".operator").click(function(){
		if(lastClicked === "operator"){
			operatorInputs.pop();
		} else {
			joinInputNumbers();
		}
		operator = $(this).val();
		console.log("Current operator is: " + operator);
		operatorInputs.push(operator);
		console.log("operatorInputs are " + operatorInputs);
		done = !done;
		lastClicked = "operator";
		clearDisplay();
		display(operator);
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
		console.log("Final total is " + total);
		console.log("Calulations complete");
		done = !done;
		clearAllInput();
		clearDisplay();
		display(total);
		// User can continue working with total
		inputNums.push(total);
	})
}

function allClearButton(){
	$("#ac").click(function(){
		clearDisplay();
		clearAllInput();
	})
}

function mysteryButton(){
	$("#mystery-button").click(function(){
		message = "BY JIMMY";
		clearDisplay();
		clearAllInput();
		display(message);
	})
}

/** Display Functions **/
function display(input){
	$("#screen").append("<div class='text'>" + input + "</div>");
}

function clearDisplay(){
	$(".text").remove();
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

// Convert string inputs to integerss
function convertNums(){
	for(i=0;i<joinedInputNumbers.length;i++){
		joinedInputNumbers[i] = Number(joinedInputNumbers[i]);
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

