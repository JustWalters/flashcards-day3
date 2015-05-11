app.factory('FlashCardsFactory', function($http) {
	return {
		getFlashCards: function(category) {
			if (!category) category = '';
			return $http.get('/cards?category=' + category).then(function (response) {
				return response.data;
			});
		}
	};
});
