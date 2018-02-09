function startGame() {
	addTimer();
	addTrolley();		
	printQuestion();
}

function addSelectThemeDropdown() {
	selectThemeDropdown = new lib.forcomb();
	selectThemeDropdown.x = 480;
	selectThemeDropdown.y = 150;
	stage.addChild(selectThemeDropdown);
	//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
	selectThemeDropdown.startbtn.alpha = 0.3;
}

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
	chosenTopicQuestions.splice(chosenTopicQuestions.length,0,chosenTopicQuestions[0]);
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

function addTimer() {
	timer = new lib.timer();
	timer.x = 32;
	timer.y = 60;
	timer.timer__text.font = "50px 'Heebo'";
	stage.addChild(timer);
}

function addTrolley() {
	trolley = new lib.goldTrolley();
	trolley.y = 100;
	trolley.x = 800;
	trolley.goldTrolley__text.font = "60px 'Heebo'";
	stage.addChild(trolley);
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

function showFinalModal(finalScore) {
	var finalModal = new lib.finalModal();
	finalModal.gameFinish__text.text = 'סיימת את המשחק בנושא '+chosenTopic.topic;
	finalModal.gameTime__text.text = 'זמן: '+secondsToMinutes(timeSpent);
	finalModal.gameScore__text.text = 'ציון: '+Math.round(finalScore);
	finalModal.y = 150;
	finalModal.x = 480;

	finalModal.endGameBtn.addEventListener('click', function() {
		window.close();
	});
	finalModal.anotherGameBtn.addEventListener('click', function() {
		resetVariables();
		stage.removeChild(finalModal);
		addSelectThemeDropdown();
	});

	stage.addChild(finalModal);
}