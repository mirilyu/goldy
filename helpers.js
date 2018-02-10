function resetVariables() {
	numberOfQuestions = 0;

	// arrays
	optionsArray = [];
	cursorsArray = [];
	questionTries = {};

	// animate CC object
	pickAxeCursor = {};
	questionBoard = {};
	animationContainer = {};
	answerModal = {};
	chosenTopic = {};
	chosenTopicQuestions = [];
	timer = {};
	trolley = {};
	timerSeconds = {};

	// counters
	correctAnswersCounter = 0;
	questionTime = 59;
	timeSpent = 0;
}

function startGame() {
	addTimer();
	addTrolley();		
	printQuestion();
}

function toggleElementVisibility(element) {
	element.visible = !element.visible;
}

function moveQuestionToEnd() {
	chosenTopicQuestions.splice(chosenTopicQuestions.length, 0, chosenTopicQuestions[0]);
	chosenTopicQuestions.splice(0,1);
}

function addListenersToOptions(questionOption) {
	questionOption.addEventListener("click", selectOption, false);
	questionOption.addEventListener('mouseover', enterOption, false);
	questionOption.addEventListener('mouseout', leaveOption, false);
}

function removeListenersFromOptions() {
	optionsArray.forEach(function(questionOption) {
		questionOption.removeEventListener("click", selectOption, false);
		questionOption.removeEventListener('mouseover', enterOption, false);
		questionOption.removeEventListener('mouseout', leaveOption, false);
	});
}

function movePickAxe() {
	var scaleCoeff = 1-(Math.abs(1-stage.scaleX));
	pickAxeCursor.x = (stage.mouseX)*scaleCoeff;
	pickAxeCursor.y = (stage.mouseY)*scaleCoeff;
}

function cleanStage(mode) {
	stage.removeChild(answerModal);
	removeListenersFromOptions();
	optionsArray.forEach(function(option) {
		stage.removeChild(option);
	});
	optionsArray = [];
	stage.removeChild(questionBoard);

	if(mode == 'all') {
		stage.removeChild(timer);
		stage.removeChild(trolley);
	}
}

function startTimer() {
	timer.timer__text.text = questionTime;

	timerSeconds = setInterval(function() {
		var remainingTime = timer.timer__text.text - 1;
		if(remainingTime == 0) {
			stopTimer();
			moveQuestionToEnd();
			cleanStage();
			showAnswerModal('timeout');
			return;
		}
		timer.timer__text.text = remainingTime;
	}, 1000);
}

function stopTimer() {
    clearInterval(timerSeconds);
    timeSpent += questionTime - parseInt(timer.timer__text.text);
	//console.log(timeSpent);
}

function secondsToMinutes(seconds) {
	var minutes = Math.floor(seconds/60);
	var remainder = seconds % 60;

	if(minutes < 10) {
		minutes = '0'+minutes;
	}
	if(remainder < 10) {
		remainder = '0'+remainder;
	}

	return minutes+':'+remainder;
}