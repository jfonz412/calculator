var input; // will be pushed to inputNums
var inputNums = []; 
var joinedInputNumbers = [];

$(document).ready(function(){

});

/************ FUNCTIONS *************/

$(".num").click(function(){
	console.log("Button " + $(this).val() + " clicked!");
	input = $(this).val();
	console.log("Input is " + input);
	inputNums.push(input);
	console.log("inputNums are " + inputNums);
})

// Doesn't work yet, might need to rearrange things. 
// Refer to sketchpad and github for guidance
$(".operator").click(function(){
	//this shoud trigger when something other than a number button is pressed
	x = inputNums.join("");
	joinedInputNumbers.push(x);
	console.log("Operator button pressed");
	console.log("joinedInputNumbers are " + joinedInputNumbers);
})

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