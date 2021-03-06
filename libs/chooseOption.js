var numberOfQuestions = 0;

// arrays and objects
var optionsArray = [];
var cursorsArray = [];
var questionTries = {};

// animate CC objects
var cavern = {};
var topbar = {};
var startModalWindow = {};
var pickAxeCursor = {};
var questionBoard = {};
var animationContainer = {};
var answerModal = {};
var chosenTopic = {};
var chosenTopicQuestions = [];
var timer = {};
var trolley = {};
var timerSeconds = {};
var selectThemeDropdown = {};
var finalScene = {};

// counters
var correctAnswersCounter = 0;
var questionTime = 59;
var timeSpent = 0;
var goldQuantity = 10;

function correctAnswer(questionOption) {
	trolley.gotoAndPlay(1);
	
	//answeredQuestionsArray.push(chosenTopicQuestions[0]);
	if(!questionTries[chosenTopicQuestions[0].numberOfTries]) {
		questionTries[chosenTopicQuestions[0].numberOfTries] = 1;
	} else {
		questionTries[chosenTopicQuestions[0].numberOfTries]++;
	}

	trolley.goldTrolley__text.text = ++correctAnswersCounter;
	setTimeout(function() {
		chosenTopicQuestions.splice(0,1);
		if(chosenTopicQuestions.length > 0) {
			showAnswerModal('correct');
		} else {
			var finalScore = 0;
			for (var property1 in questionTries) {
				finalScore += parseInt(questionTries[property1])*(100 / (numberOfQuestions * parseInt(property1)));
			}
			cleanStage('all');
			stage.removeChild(topbar);
			stage.removeChild(cavern);
			showFinalScene();

			setTimeout(function() {
				finalScene.stop();
				showFinalModal(finalScore);
			}, 3000)
		}
	}, 850);
}

function wrongAnswer(questionOption) {
	moveQuestionToEnd();
	showAnswerModal('wrong');
}

function chooseOptionFn(questionOption) {
	stopTimer();
	chosenTopicQuestions[0].numberOfTries++;

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

	addQuestionBoard(chosenTopicQuestions[0].questionText);
		chosenTopicQuestions[0].options.forEach(function(option, index) {

		var questionOption = new lib.stoneOption();
		var circleWidth = questionOption.nominalBounds.width;

		if(option.text) {
			questionOption.optionText.color = "#333333";
			questionOption.optionText.font = "12px 'Heebo'";
			questionOption.optionText.text = option.text;
			questionOption.imageBounds.alpha = 0;		
		} else {
			var optionImage = new lib[option.image+'MC']();
			var scaleValue = 0;
			scaleValue = resizeImage(questionOption.imageBounds, optionImage);
			optionImage.scaleX = scaleValue;
			optionImage.scaleY = scaleValue;
			questionOption.imageBounds.addChild(optionImage);

			//questionOption.imageBounds.addEventListener("mouseover", showBigImage, false);
		}
		
		var stageWidth = document.getElementById("animation_container").offsetWidth;
		questionOption.x = (stageWidth-((circleWidth)*chosenTopicQuestions[0].options.length))/2+((circleWidth+gutter)*index);
		questionOption.x = questionOption.x-gutter;
		questionOption.y = 342;
		questionOption.isCorrect = option.isCorrect;
		
		optionsArray.push(questionOption);

		addListenersToOptions(questionOption);

		stage.addChild(questionOption);
	});
	
	startTimer();
}

