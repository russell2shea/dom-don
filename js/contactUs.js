/*
// On Submit to let required do the validation
$( ".contact_form" ).submit(function( event ) {

  	// Prevent page reload 
  	event.preventDefault();
  	console.log('hey');
	// get values from FORM
	var name = $("input[name='name']").val();
	var email = $("input[name='email']").val();
	var phone = $("input[name='telephone']").val();
	var message = $("textarea[name='message']").val();

	console.log(name + " " + email + " " + phone + " " + message);

    $.ajax({
            url : 'https://platinoid-morning.000webhostapp.com',
       
            dataTYpe : 'jsonp',        type: "POST",
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
*/

    $('document').ready(function(){
        $('.contact_form').on('submit',function(e){
            e.preventDefault(); //prevent default form submition
            var FormData = $('.contact_form').serialize();

        $.ajax({

            type : 'post',
            url : 'https://platinoid-morning.000webhostapp.com',
            data : FormData,
            dataTYpe : 'jsonp',
            encode : true,
          
            beforeSend : function(){

                //$('$mybtn').html('<span class="glyphicon glyphicon-repeat fast-right-spinner"></span> Sending');
            },

      
            success : function(response){
            	console.log(response);
                //response = JSON.parse(response);
                if($('p.success').is(':visible')){
                	$('p.success').fadeOut();
                }
                if($('p.fail').is(':visible')){
                	$('p.fail').fadeOut();
                }

                if(response== "ok"){
                	$('p.success').fadeIn().delay(3000).fadeOut();
                    //$('sendmessage').html('Your message has been sent successfully.');
                }else{
                	$('p.fail').fadeIn().delay(3000).fadeOut();
                    //$('errormessage').html(response);
                }

            }




        });

        });


    });


