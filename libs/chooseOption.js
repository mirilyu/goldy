var numberOfQuestions = 0;

// arrays
var optionsArray = [];
var cursorsArray = [];
var answeredQuestionsArray = [];
var questionTries = {};

// animate CC object
var pickAxeCursor = {};
var questionBoard = {};
var animationContainer = {};
var answerModal = {};
var chosenTopic = [];
var timer = {};
var trolley = {};
var timerSeconds = {};
var selectThemeDropdown = {};

// counters
var correctAnswersCounter = 0;
var questionTime = 59;
var timeSpent = 0;

function resetVariables() {
	numberOfQuestions = 0;

	// arrays
	optionsArray = [];
	cursorsArray = [];
	answeredQuestionsArray = [];
	questionTries = {};

	// animate CC object
	pickAxeCursor = {};
	questionBoard = {};
	animationContainer = {};
	answerModal = {};
	chosenTopic = [];
	timer = {};
	trolley = {};
	timerSeconds = {};

	// counters
	correctAnswersCounter = 0;
	questionTime = 59;
	timeSpent = 0;
}

function showAnswerModal(answer) {
	answerModal = new lib.answerModal();

	switch(answer) {
		case 'correct':
			answerModal.instance_1.alpha = 0;
			answerModal.instance_2.alpha = 1;
			answerModal.instance_3.alpha = 0.3;
			answerModal.answerModal__text.text = 'תשובתך נכונה!';
			break;
		case 'wrong':
			answerModal.instance_1.alpha = 1;
			answerModal.instance_2.alpha = 0;
			answerModal.instance_3.alpha = 0.3;
			answerModal.answerModal__text.text = 'תשובתך לא נכונה!';
			break;
		case 'timeout':
			answerModal.instance_1.alpha = 0;
			answerModal.instance_2.alpha = 0;
			answerModal.instance_3.alpha = 0.3;
			answerModal.answerModal__text.text = 'הזמן נגמר!';
			break;
	}
	
	answerModal.y = 0;
	answerModal.x = 480;

	answerModal.instance.addEventListener('click', function() {
		cleanStage('questions');
		printQuestion(0);
	});

	stage.addChild(answerModal);
}

function correctAnswer(questionOption) {
	trolley.gotoAndPlay(1);
	
	//answeredQuestionsArray.push(chosenTopic.questions[0]);
	if(!questionTries[chosenTopic.questions[0].numberOfTries]) {
		questionTries[chosenTopic.questions[0].numberOfTries] = 1;
	} else {
		questionTries[chosenTopic.questions[0].numberOfTries]++;
	}

	trolley.goldTrolley__text.text = ++correctAnswersCounter;
	setTimeout(function() {
		chosenTopic.questions.splice(0,1);
		if(chosenTopic.questions.length > 0) {
			showAnswerModal('correct');
		} else {
			var finalScore = 0;
			for (var property1 in questionTries) {
				finalScore += parseInt(questionTries[property1])*(100 / (numberOfQuestions * parseInt(property1)));
				debugger;
			}
			console.log(Math.round(finalScore));
			cleanStage('all');
			showFinalModal(finalScore);
		}
	}, 850);
}

function wrongAnswer(questionOption) {
	moveQuestionToEnd();
	showAnswerModal('wrong');
}

function chooseOptionFn(questionOption) {
	stopTimer();
	chosenTopic.questions[0].numberOfTries++;

	var isCorrect = questionOption.isCorrect;
	if(isCorrect) {
		correctAnswer(questionOption);
	} else {
		wrongAnswer(questionOption);
	}
}

function enterOption() {
	stage.cursor = 'none';

	pickAxeCursor = new lib.pickaxe();
	pickAxeCursor.stop();
	movePickAxe();
	stage.addChild(pickAxeCursor);
	cursorsArray.push(pickAxeCursor);

	animationContainer = document.getElementById('canvas');
	animationContainer.addEventListener('mousemove', movePickAxe);
}

function leaveOption() {
	stage.cursor = 'default';
	cursorsArray.forEach(function(e) {
		stage.removeChild(e);
	});
	cursorsArray = [];
	animationContainer.removeEventListener('mousemove', movePickAxe, false);
}

function selectOption(event) {
	pickAxeCursor.gotoAndPlay(0);

	setTimeout(function() {
		leaveOption();
		chooseOptionFn(event.currentTarget);
		optionsArray.forEach(function(questionOption) {
			if(questionOption != event.currentTarget) {
				questionOption.alpha = 0.5;
			}
		});
		removeListenersFromOptions();
	}, 524);
}

function printQuestion() {

	addQuestionBoard(chosenTopic.questions[0].questionText);

	chosenTopic.questions[0].options.forEach(function(option, index) {
		var questionOption = new lib.stoneOption();
		questionOption.optionText.color = "#333333";
		questionOption.optionText.font = "12px 'Heebo'";
		questionOption.optionText.text = option.text;
		var circleWidth = questionOption.nominalBounds.width;
		
		var stageWidth = document.getElementById("animation_container").offsetWidth;
		questionOption.x = (stageWidth-((circleWidth)*chosenTopic.questions[0].options.length))/2+((circleWidth+gutter)*index);
		questionOption.x = questionOption.x-gutter;
		questionOption.y = 342;
		questionOption.isCorrect = option.isCorrect;
		
		optionsArray.push(questionOption);

		addListenersToOptions(questionOption);

		stage.addChild(questionOption);
	});
	
	startTimer();
}

