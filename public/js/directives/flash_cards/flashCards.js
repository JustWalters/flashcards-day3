app.directive('flashCard', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flash_cards/flash-card.html',
		scope: { card: '=' },
		link: function(scope, element, attrs) {
			scope.answerQuestion = function (answer, flashCard) {
				if (!flashCard.answered) {
					flashCard.answered = true;
					flashCard.answeredCorrectly = answer.correct;

					if (answer.correct) flashCard.scoreFactory.correct += 1;
					else flashCard.scoreFactory.incorrect += 1;
				}
			};
		}
	};
});
