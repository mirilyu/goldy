function addCavern() {
	cavern = new lib.cavernBg();
	cavern.x = 0;
	cavern.y = 0;
	stage.addChild(cavern);
}

function addTopbar() {
	topbar = new lib.topbar();
	topbar.x = 480;
	topbar.y = 0;
	stage.addChild(topbar);
	topbar.gameName.font = "24px 'Heebo'";

	// clicking on about link;
	topbar.aboutLink.addEventListener('click', function() {
		addAboutModal();
	});
	// clicking on game rules link
	topbar.gameRulesLink.addEventListener('click', function() {
		addGameRulesModal();
	})
}

function addStartModal() {
	startModalWindow = new lib.modalWindow();
	startModalWindow.x = 480;
	startModalWindow.y= 200;
	startModalWindow.modalText.color = "#333333";
	startModalWindow.modalText.font = "32px 'Heebo'";
	startModalWindow.modalText.text = "בחרת: " + chosenTopic.topic;
	stage.addChild(startModalWindow);
	
	topbar.gameName.text = chosenTopic.topic;
	
	// returning to topic selection
	startModalWindow.returnBtn.addEventListener('click', function() {
		stage.removeChild(startModalWindow);
		$("#mycb").show();
		addSelectThemeDropdown();
	})
	// starting the game
	startModalWindow.continueBtn.addEventListener("click", function(){
		stage.removeChild(startModalWindow);
		startGame();
	});
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

function addSelectThemeDropdown() {
	selectThemeDropdown = new lib.forcomb();
	selectThemeDropdown.x = 480;
	selectThemeDropdown.y = 150;
	selectThemeDropdown.startbtn.alpha = 0.3;
	stage.addChild(selectThemeDropdown);
}

function addQuestionBoard(boardText) {
	questionBoard = new lib.questionBoard();
	questionBoard.questionText.color = "#333333";
	questionBoard.questionText.font = "20px 'Heebo'";
	questionBoard.questionText.text = boardText;
	questionBoard.x = 480;
	questionBoard.y = 0;
	stage.addChild(questionBoard);
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

function showFinalModal(finalScore) {
	var finalModal = new lib.finalModal();
	finalModal.gameFinish__text.font = "24px 'Heebo'";
	finalModal.gameTime__text.font = "24px 'Heebo'";
	finalModal.gameScore__text.font = "24px 'Heebo'";
	finalModal.gameFinish__text.text = 'סיימת את המשחק בנושא '+chosenTopic.topic;
	finalModal.gameTime__text.text = 'זמן: '+secondsToMinutes(timeSpent);
	finalModal.gameScore__text.text = 'ציון: '+Math.round(finalScore);
	finalModal.y = 150;
	finalModal.x = 480;

	finalModal.endGameBtn.addEventListener('click', function() {
		window.close();
	});
	finalModal.anotherGameBtn.addEventListener('click', function() {
		stage.removeChild(finalScene);
		resetVariables();
		stage.removeChild(finalModal);
		addGameStartScreen();
	});

	stage.addChild(finalModal);
}

function addAboutModal() {
	var aboutModalWindow = new lib.aboutModal();
	aboutModalWindow.x = 480;
	aboutModalWindow.y = 0;
	stage.addChild(aboutModalWindow);
	$('#mycb').hide();

	aboutModalWindow.closeBtn.addEventListener('click', function() {
		stage.removeChild(aboutModalWindow);
		$('#mycb').show();
	});
	aboutModalWindow.hitLogoLink.addEventListener('click', function() {
		window.open("http://www.hit.ac.il/", "_blank");
	});	
}

function addGameRulesModal() {
	console.log("Adding game rules modal window...");
}

function showFinalScene() {
	finalScene = new lib.finalScene();
	stage.addChild(finalScene);
}

function showOpeningScene() {
	var openingScene = new lib.openingScene();
	stage.addChild(openingScene);

	setTimeout(function() {
		stage.removeChild(openingScene);
		addGameStartScreen();
	}, 8041)
}