$(document).ready(function(){

	// alert("test3");

	validation();
    var utm_source = getParameterByNameIOL('utm_source');
    var utm_medium = getParameterByNameIOL('utm_medium');
    var utm_campaign = getParameterByNameIOL('utm_campaign');
    var utm_srd = getParameterByNameIOL('srd');
    var exdays = 3;
    if(utm_source != "")
    {
        
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "utm_source=" + utm_source + ";" + expires + ";path=/";
    }
    if(utm_medium != "")
    {
        
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "utm_medium=" + utm_medium + ";" + expires + ";path=/";
    }
    if(utm_campaign != "")
    {
        
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "utm_campaign=" + utm_campaign + ";" + expires + ";path=/";
    }
    if(utm_srd != "")
    {
        
        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "utm_srd=" + utm_srd + ";" + expires + ";path=/";
    }
    
    console.log(utm_source);
    console.log(utm_medium);
    console.log(utm_campaign);
    console.log(utm_srd);
// 	console.log('Current URL ->'+window.location.href);
	
	$('#project_name').on('change', function() {
	     	
	 	var form_id  = $(this).find(':selected').attr('data-id');
	 	$("#form_id").val(form_id);

	 });


	  $(".get_in_touch_submit_btn").click(function(){ 

	  console.log("debug 19");	  
	  
	  	/*CRM REST API*/			
    
        var name = $("#name_val").val();
        var mobileno = $("#mobile_val").val();
        var email_id = $("#email_val").val();
        var form_id = $("#form_id").val();

        if(name=="")
        	var name = $("#name_value").val();
        if(mobileno=="")
        	var mobileno = $("#mobile_value").val();
        if(email_id=="")
        	var email_id = $("#email_value").val();        
              
        var utm_source = getParameterByNameIOL('utm_source');
        var utm_medium = getParameterByNameIOL('utm_medium');
        var utm_campaign = getParameterByNameIOL('utm_campaign');
        
        $.ajax({
            url: 'https://crmapp.imageonline.co.in/Ionic-CRM/CRM/Api/rest_api_savelead.php',
            type: 'post',
            async: false,
            crossDomain:true,
		 	cache      : false,
            data: {
                name:name,
                mobileno:mobileno,
                email_id:email_id,
                form_id:form_id,
                lead_utm_source:utm_source,
                lead_medium_source:utm_medium,
                lead_campaign_source:utm_campaign,
                website:'asl',
            },
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );

                		setTimeout(function(){
				            window.location.href = 'https://www.asl.net.in/thankyou.html';
				         }, 3000);


            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });        
        /*CRM REST API*/

	  });
	

});
function getParameterByNameIOL(name)
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);

    if (results == null)
    {
         var url_string1 = document.referrer;
         if (url_string1 == null || url_string1==''){
         	var url_string ='https://www.asl.net.in/index.html';
         	// console.log(url_string);
         }else{
         	var url_string = url_string1;
         }
         var url = new URL(url_string);
         var results1 = url.searchParams.get(name);
         console.log(url_string);
         var d3 = new Date();
         d3.setTime(d3.getTime() + (1*24*60*60*1000));
         var expires = "expires="+ d3.toUTCString();
         document.cookie = "url_string=" + url_string + ";" + expires + ";path=/";

        if(results1 != '')
        {
           return results1;
        }
        else
        {
            return "";
        }

    }
    else
    {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}


function getParameterByName(name)
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);

    if (results == null)
    {
         var url_string1 = document.referrer;
         if (url_string1 == null || url_string1==''){
         	var url_string ='https://www.asl.net.in/index.html';
         	// console.log(url_string);
         }else{
         	var url_string = url_string1;
         }
         var url = new URL(url_string);
         var results1 = url.searchParams.get("utm_source");
         console.log(url_string);


        if(results1 != '')
        {
           return results1;
        }
        else
        {
            return "";
        }

    }
    else
    {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}

function validation(){


	// alert("test 89");

	$('#project_name').on('change', function() {
	     	

	 	var form_id  = $(this).find(':selected').attr('data-id');

	 	$("#form_id").val(form_id);

	 	// alert("test 53");

	 });


	var count = 0;
	$(".get_in_touch_submit_form").each(function(index){
		count++;
		$(this).find("#get_in_touch_submit").each(function(i){
			$(this).on('click',function(event){

				
				formObj = $(this).closest('form');
				formAction1 = formObj.attr('action');
				formAction = "php/"+formAction1;

			/* 	var captcha = '';
				noCaptchaVal      = 0;
				if(formObj.find("#tempc").length > 0){
					noCaptchaVal++;
				}else{
					if(count == 1){
						captcha = grecaptcha.getResponse();
					}else{
						if(index == 0){
							captcha = grecaptcha.getResponse(id1);
						}
					}
				} */

				// alert("test");	

				event.preventDefault();

				var mandatory_fields = {};

				formObj.find("input[type=text]").each(function(){
					if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':$(this).attr("type"),'value':$(this).val()};
					}
				});
				formObj.find("input[type=email]").each(function(){
					if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':$(this).attr("type"),'value':$(this).val()};
					}
				});
				formObj.find("input[type=file]").each(function(){
					if($(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':'file','value':$(this).val()};
					}
				});
				formObj.find("select").each(function(){
					if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':$(this).attr("type"),'value':$(this).val()};
					}
				});
				formObj.find("textarea").each(function(){
					search = "*";
					textArea = $(this).prop('placeholder');
					if(textArea.indexOf(search) != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':'textarea','value':$(this).val()};
					}
				});

				var source = getParameterByName('utm_source');

				if(source != '' && source != undefined)
				{
				    mandatory_fields['utm_source'] = {'type':'textarea','value':source};
				}

				if(noCaptchaVal == 0){
					mandatory_fields['recaptcha'] = {'type':'recaptcha','value':captcha};
				}
				if(formObj.find("#project").length > 0){
					mandatory_fields['project'] = {'type':'hidden','value':formObj.find("#project").val()};
				}
				if(formObj.find("#pagename").length > 0){
					mandatory_fields['pagename'] = {'type':'hidden','value':formObj.find("#pagename").val()};
				}
				if(formObj.find("#current_url").length > 0){
					mandatory_fields['current_url'] = {'type':'hidden','value':formObj.find("#current_url").val()};
				}
				if(formObj.find("#projectname").length > 0){
					mandatory_fields['projectname'] = {'type':'hidden','value':formObj.find("#projectname").val()};
				}
					if(formObj.find("#captcha_check").length > 0){
					mandatory_fields['captcha_check'] = {'type':'hidden','value':formObj.find("#captcha_check").val()};
				}
				if(formObj.find("#captcha_check_home").length > 0){
					mandatory_fields['captcha_check'] = {'type':'hidden','value':formObj.find("#captcha_check_home").val()};
				}



		/* 	var response = grecaptcha.getResponse();

                if(response.length == 0)
                {
                 //noCaptchaVal=1;
                 alert("please verify captcha");
                }
                else
                {
                     */


				$.ajax({
					type: "POST",
					url: "check_errors.php",
					dataType : "JSON",
					data : mandatory_fields,
					success: function(result){
						$(".error").html('<span></span>');
						if(result.required){
							$.each(result.required, function (index, value) {
								formObj.find('[name="'+index+'"]').parent().find(".error").html('<span>This field is mandatory</span>');
							});
						}else if(result.other){
							$(".error").html('<span></span>');
							$.each(result.other, function (index, value) {
								formObj.find('[name="'+index+'"]').parent().find(".error").find("span").html('Invalid '+value);
							});
						}else if(result.POST){
							$(".error").html('<span></span>');
							$.each(result.other, function (index, value) {
								$(".error").last().html(value);
							});
						}else{

							$(".error").html('<span></span>');
							//formObj.attr('action', formAction).off('submit').submit();
							
							/*CRM REST API*/

								// alert("test 182");

                            // var name = $("input[name='name']").val();
                            // var mobileno = $("input[name='mobile']").val();
                            // var email_id = $("input[name='email']").val();
                            // var form_id = $("input[name='form_id']").val();

                            var name = $("#name").val();
					        var mobileno = $("#mobile").val();
					        var email_id = $("#email").val();
					        var form_id = $("#form_id").val();
					        
					        var utm_source = getParameterByNameIOL('utm_source');
                            var utm_medium = getParameterByNameIOL('utm_medium');
                            var utm_campaign = getParameterByNameIOL('utm_campaign');

            
        //                     $.ajax({
        //                         url: 'https://crmapp.imageonline.co.in/Ionic-CRM/CRM/Api/rest_api_savelead.php',
        //                         type: 'post',
        //                         async: false,
        //                         crossDomain:true,
							 //	cache      : false,
        //                         data: {
        //                             name:name,
        //                             mobileno:mobileno,
        //                             email_id:email_id,
        //                             form_id:form_id,
        //                             website:'asl',
        //                             lead_utm_source:utm_source,
        //                             lead_medium_source:utm_medium,
        //                             lead_campaign_source:utm_campaign,
        //                         },
        //                         success: function( data, textStatus, jQxhr ){
        //                             $('#response pre').html( data );
        //                         },
        //                         error: function( jqXhr, textStatus, errorThrown ){
        //                             console.log( errorThrown );
        //                         }
        //                     });
                            
                            /*CRM REST API*/


				// 			$.ajax({
				// 			 	url: "https://arihant.netbizlabs.com/home/list_leads",
				// 			 	async: false,
				// 			 	type:'POST',
				// 			 	dataType : "JSON",
				// 			 	data:mandatory_fields,
				// 			 	crossDomain: true,
				// 			 	cache      : false,
				// 			 	success: function(result){
				// 			    		 //do nothing
				// 			  }});

							 $.post( formAction, {
								data:mandatory_fields
							}).done(function( data ) {                               

								$( "body" ).html(data);
							});
						}
					}
				});

                //}
			});
		});
	});

	


}
var onloadCallback = function() {
	if($("#recaptcha1").length>0){
		id1 = grecaptcha.render('recaptcha1', {'sitekey' : '6LeQyV0UAAAAAK7NUaP4Ao28DZXdOlFYMsPdWfpP', 'theme' : 'light' });
	}

};