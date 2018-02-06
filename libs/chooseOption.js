var optionsArray = [];
var cursorsArray = [];
var pickAxeCursor = {};
var questionBoard = {};
var animationContainer = {};
var answerModal = {};

function movePickAxe() {
	var scaleCoeff = 1-(Math.abs(1-stage.scaleX));
	pickAxeCursor.x = (stage.mouseX)*scaleCoeff;
	pickAxeCursor.y = (stage.mouseY)*scaleCoeff;
}

function startGame() {
	printQuestion();
}

function showAnswerModal(isCorrect) {
	answerModal = new lib.answerModal();
	if(isCorrect) {
		answerModal.instance_1.alpha = 0;
		answerModal.instance_2.alpha = 1;
		answerModal.answerModal__text.text = 'תשובתך נכונה!';
	} else {
		answerModal.instance_1.alpha = 1;
		answerModal.instance_2.alpha = 0;
		answerModal.answerModal__text.text = 'תשובתך לא נכונה!';
	}
	answerModal.instance_3.alpha = 0.3;
	answerModal.y = 0;
	answerModal.x = 480;
	answerModal.instance.addEventListener('click', function() {
		stage.removeChild(answerModal);
		optionsArray.forEach(function(e) {
			stage.removeChild(e);
		});
		optionsArray = [];
		stage.removeChild(questionBoard);
		printQuestion(0);
	})
	stage.addChild(answerModal);
}

function correctAnswer() {
	console.log('Correct!');
	questions.splice(0,1);
	if(questions.length > 0) {
		showAnswerModal(true);
	} else {
		alert("There are no questions left");
	}
}

function wrongAnswer() {
	console.log('Wrong!');
	questions.splice(questions.length,0,questions[0]);
	questions.splice(0,1);
	showAnswerModal(false);
}

function chooseOptionFn(questionOption) {
	var isCorrect = questionOption.isCorrect;
	if(isCorrect === true) {
		correctAnswer();
	} else {
		wrongAnswer();
	}
}

function enterOption() {
	console.log("Over...");
	//stage.cursor = 'none';

	pickAxeCursor = new lib.pickaxe();
	movePickAxe();
	stage.addChild(pickAxeCursor);
	cursorsArray.push(pickAxeCursor);

	animationContainer = document.getElementById('canvas');
	animationContainer.addEventListener('mousemove', movePickAxe);
}

function leaveOption() {
	console.log("Out..");
	//stage.cursor = 'default';
	cursorsArray.forEach(function(e) {
		stage.removeChild(e);
	});
	cursorsArray = [];
	animationContainer.removeEventListener('mousemove', movePickAxe, false);
}

function selectOption(event) {
	leaveOption();
	chooseOptionFn(event.currentTarget);

	optionsArray.forEach(function(option) {
		if(option != event.currentTarget) {
			option.alpha = 0.5;
		}
		option.removeEventListener("click", selectOption, false);
		option.removeEventListener('mouseover', enterOption, false);
		option.removeEventListener('mouseout', leaveOption, false);
	})
}

function printQuestion() {

	questionBoard = new lib.questionBoard();
	questionBoard.questionText.color = "#333333";
	questionBoard.questionText.font = "16px 'Heebo'";
	questionBoard.questionText.text = questions[0].questionText;
	questionBoard.x = 480;
	questionBoard.y = 0;
	stage.addChild(questionBoard);

	questions[0].options.forEach(function(option, index) {
		var questionOption = new lib.stoneOption();
		questionOption.optionText.color = "#333333";
		questionOption.optionText.font = "16px 'Heebo'";
		questionOption.optionText.text = option.text;
		var circleWidth = questionOption.nominalBounds.width;
		
		var stageWidth = document.getElementById("animation_container").offsetWidth;
		questionOption.x = (stageWidth-((circleWidth)*questions[0].options.length))/2+((circleWidth+gutter)*index);
		questionOption.x = questionOption.x-gutter;
		questionOption.y = 342;
		questionOption.isCorrect = option.isCorrect;
		
		optionsArray.push(questionOption);
		
		questionOption.addEventListener("click", selectOption, false);
		questionOption.addEventListener('mouseover', enterOption, false);
		questionOption.addEventListener('mouseout', leaveOption, false);

		stage.addChild(questionOption);
	});
}

