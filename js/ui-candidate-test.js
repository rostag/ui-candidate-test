$(document).ready(function() {
	
	var currentPulseItem = $('.pulse .fisheye li.active');
	$(".pulse .fisheye li.active .medium-content").fadeIn('fast');

	$('#showHelpModal').click(function(){		
		$.ajax({
			dataType: "json",
			url: "data/help.json",
			success: function( msg ) {

				var helpHtmlCode = '';

				$(msg.help).each(function( index, element ){
					helpHtmlCode += '<h4><a href="' + element.URL + '" target="#" </a>' + element.title + '</h4>';
				}) 

				$("#helpModal .modal-body").html( helpHtmlCode );
			},
			error: function( msg ) {
				console.log( "Loading error: " + JSON.stringify( msg ) ) ;
			}
		});
	});

	$(".pulse .fisheye").on("click", "li", function(event) {
		if (currentPulseItem && event.currentTarget != currentPulseItem) {
			$(".pulse .fisheye li.active .medium-content").hide();
			$(currentPulseItem).toggleClass('active');

			currentPulseItem = event.currentTarget;

			$(event.currentTarget).toggleClass('active');
			$(".pulse .fisheye li.active .medium-content").fadeIn('fast');
		}
	});
})