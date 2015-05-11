app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.loading = true;
	FlashCardsFactory.getFlashCards().then(function(result){
		$scope.loading = false;
		$scope.flashCards = result.map(function(el) {
			// This doesn't seem right
			el.scoreFactory = ScoreFactory;
			return el;
		});
	});

	$scope.categories = [
	'MongoDB',
	'Express',
	'Angular',
	'Node',
	'All'
	];
	$scope.activeCat = 'All';

	$scope.getCategoryCards = function(category) {
		$scope.loading = true;
		$scope.activeCat = category;
		if (category === 'All') category = '';
		FlashCardsFactory.getFlashCards(category).then(function(result){
			$scope.loading = false;
			$scope.flashCards = result.map(function(el) {
				el.scoreFactory = ScoreFactory;
				return el;
			});
		});
	};
});
