var app = angular.module('flashCards', []);

app.filter('cheat', function() {
	return function(answers) {
		return answers.filter(function(el) {
			return el.correct;
		});
	};
});
