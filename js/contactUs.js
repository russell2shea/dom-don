// On Submit to let required do the validation
$( ".contact_form" ).submit(function( event ) {

  	// Prevent page reload 
  	event.preventDefault();

	// get values from FORM
	var name = $("input[name='name']").val();
	var email = $("input[name='email']").val();
	var phone = $("input[name='telephone']").val();
	var message = $("textarea[name='message']").val();

	console.log(name + " " + email + " " + phone + " " + message);

    $.ajax({
        url: "https://sites.agorafinancial.com/promos/test/contactUs.php",
        type: "POST",
        data: {
            name: name,
            email: email,
            phone: phone,
            message: message
        },
        cache: false,
        success: function() {

        	alert('Made it');

        },
        error: function() {

        	alert('Fail');

        },

    })











});




