window.vela = window.vela || {};
vela.cacheSelectors = function () {
  	vela.cache = {
	    $html                    : $('html'),
	    $body                    : $('body')
  	};
};
vela.init = function () {
	
};

$(document).ready(function() {
	$(vela.init);
});