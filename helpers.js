function toggleElementVisibility(element) {
	element.visible = !element.visible;
}

function addQuestionBoard(boardText) {
	questionBoard = new lib.questionBoard();
	questionBoard.questionText.color = "#333333";
	questionBoard.questionText.font = "24px 'Heebo'";
	questionBoard.questionText.text = boardText;
	questionBoard.x = 480;
	questionBoard.y = 0;
	stage.addChild(questionBoard);
}

function moveQuestionToEnd() {
	chosenTopic.questions.splice(chosenTopic.questions.length,0,chosenTopic.questions[0]);
	chosenTopic.questions.splice(0,1);
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

function startGame() {
	printQuestion();
}

function cleanStage() {
	stage.removeChild(answerModal);
	removeListenersFromOptions();
	optionsArray.forEach(function(option) {
		stage.removeChild(option);
	});
	optionsArray = [];
	stage.removeChild(questionBoard);
}

function startTimer() {
	timer = new lib.timer();
	timer.x = 32;
	timer.y = 60;
	timer.timer__text.font = "50px 'Heebo'";
	timer.timer__text.text = questionTime;
	stage.addChild(timer);

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
	console.log(timeSpent);
}