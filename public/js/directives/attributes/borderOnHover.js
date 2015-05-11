app.directive('borderOnHover', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attributes) {
			var origBorder, newBorder = 'black 2px solid';
			element.on('mouseenter', function() {
				origBorder = element.css('border');
				element.css({'border': newBorder});
			});
			element.on('mouseleave', function() {
				element.css({'border': origBorder});
			});
		}
	};
});
