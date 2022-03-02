$(document).ready(function(){
	validation();
	
	$(".add-more").each(function(){
		$(this).click(function(){
			var refer_a_friend_div_clone = $(".refer-a-friend-div:first").html();
			$(".refer-a-friend-outer-div").append("<div class='refer-a-friend-div'>"+refer_a_friend_div_clone+"<div class='loyalty-formfild'><button type='button'  id='remove'  class='add-more'>- Remove</button></div></div>");
		});
	});
	
		
 $(".refer-a-friend-outer-div").on('click', '#remove', function(e){
       
       $(this).parents(".refer-a-friend-div").remove();	  
	
	});	
	
	
	
});	
function validation(){
 
	var count = 0;
	$(".get_in_touch_submit_form").each(function(index){
		count++;
		$(this).find("#get_in_touch_submit").each(function(i){
			$(this).click(function(event){
			    
			    event.preventDefault();
			    formObj = $(this).closest('form').find(".member-details-div");
			    formObj1 = $(this).closest('form').find(".refer-a-friend-outer-div");
				
				formAction = $(this).closest('form').attr('action');
				
				var mandatory_fields = {};
				
				var final_array = {};
				
				
				formObj.find("input[type=text]").each(function(){
					if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':$(this).attr("type"),'value':$(this).val()};
					}
				});

				formObj1.find("input[type=text]").each(function(){
					if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':$(this).attr("type"),'value':$(this).val()};
					}
				});
				
				formObj.find("input[type=email]").each(function(){
					if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':$(this).attr("type"),'value':$(this).val()};
					}
				});

				formObj1.find("input[type=email]").each(function(){
					if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':$(this).attr("type"),'value':$(this).val()};
					}
				});
				
				formObj.find("input[type=file]").each(function(){
					if($(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':'file','value':$(this).val()};
					}
				});
				
				formObj1.find("select").each(function(){
					
					if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':'select','value':$(this).val()};
					}
				});
				
				formObj.find("textarea").each(function(){
					search = "*";
					textArea = $(this).prop('placeholder');
					if(textArea.indexOf(search) != -1 && $(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("name")] = {'type':'textarea','value':$(this).val()};
					}
				});
				
				formObj.find("input[type=hidden]").each(function(){
					if($(this).prop("disabled") == false){
						mandatory_fields[$(this).attr("id")] = {'type':$(this).attr("type"),'value':$(this).val()};
					}
				});
				
				
				final_array['member_details_div'] = mandatory_fields;
				
				
				
				
				var refer_fields = [];
				$(this).closest('form').find(".refer-a-friend-div").each(function(k,v){
					refer_fields.push({details:[]});
					$(this).find("input[type=text]").each(function(k1,v1){
						if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
							refer_fields[k].details.push({'name':$(this).attr("name"),'type':$(this).attr("type"),'value':$(this).val()});
						}
					});
					
					$(this).find("input[type=email]").each(function(k1,v1){
						if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
							refer_fields.push({details:[]});
							refer_fields[k].details.push({'name':$(this).attr("name"),'type':$(this).attr("type"),'value':$(this).val()});
						}
					});
					
					
					$(this).find("select").each(function(k1,v1){
						if($(this).attr('placeholder').indexOf('*') != -1 && $(this).prop("disabled") == false){
							refer_fields.push({details:[]});
							refer_fields[k].details.push({'name':$(this).attr("name"),'type':'select','value':$(this).val()});
						}
					});
					
					
				});
				
				
				
				final_array['refer_fields_div'] = refer_fields;
				
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

							$.each(result.required, function (index, value) {
								formObj1.find('[name="'+index+'"]').parent().find(".error").html('<span>This field is mandatory</span>');
							});
						}else if(result.other){
							$(".error").html('<span></span>');
							$.each(result.other, function (index, value) {
								formObj.find('[name="'+index+'"]').parent().find(".error").find("span").html('Invalid '+value);
							});
							$.each(result.other, function (index, value) {
								formObj1.find('[name="'+index+'"]').parent().find(".error").find("span").html('Invalid '+value);
							});
						}else if(result.POST){
							$(".error").html('<span></span>');
					
							$.each(result.other, function (index, value){
								$(".error").last().html(value);
							});
						}else{
						    $(".error").html('<span></span>');
							//alert($('#project').length);
							//formObj.attr('action', formAction).off('submit').submit();
							$.post( formAction, { 
								data:final_array
							}).done(function( data ) {
								$( "body" ).html(data);
							}); 
                        }
					}, 
					error:function(exception){//alert('Exeption:'+exception);
					}
				});
			});
			
		});
	});
}
/*var onloadCallback = function() {
	if($("#recaptcha1").length>0){
		id1 = grecaptcha.render('recaptcha1', {'sitekey' : '6LdIyWAUAAAAADq9-3dzmuj-F87aq8W8qc_QlUPc', 'theme' : 'light' });  
	}
};*/