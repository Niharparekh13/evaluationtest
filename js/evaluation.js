$(document).ready(function() {
  jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s-, ]+$/i.test(value);
  }, "Letters only please");
  
  jQuery.validator.addMethod('number', function(value, element) {
    return this.optional(element) || !!value.trim().match(/^\d{10}(?:[-\s]\d{4})?$/);
  }, 'Invalid phone number');
  
  jQuery.validator.addMethod('email', function(value, element) {
    return this.optional(element) || !!value.trim().match(/^([A-Za-z0-9_\-\.])+\@([tntra|GMAIL])+\.(io)$/ );
  }, 'Invalid phone number'); 
  
  
  $("#myform").validate({
      rules: {
        name : {
          required: true,
          lettersonly: true
        },
        age:{
          required:true,
          min:18,
          max:25
        },
        email:{
          email:true,
          required:true
        },
        Phone_num:{
          number:true,
          required:true
        },
        Gender:{
          required:true
        },
        d1:{
          required:true
        },
        d2:{
          required:true
        },
        d3:{
          required:true
        },
        d4:{
          required:true
        },
        d5:{
          required:true
        },
        d6:{
          required:true
        },
        d7:{
          required:true
        }
      },
        messages : {
      name: {
          required:"Please enter first your name",
        lettersonly:"Name should contain only letters."
      },

        age:{
          required:"Please enter your age",
          min:"Please enter age above 17",
          max:"Please enter age below 26"
        },
        email:{
          required:"Please enter your email",
          email:"Please enter mail in the formate abc@tntra.io"
        },
        Phone_num:{
          required:"Please enter your phone number",
          number:"Please enter valid phone number"
        },
        Gender:{
          required:"Please choose any one of them...<br/>"
        },
        d1:{
          required:"Please choose time"
        },
        d2:{
          required:"Please choose time"
        },
        d3:{
          required:"Please choose time"
        },
        d4:{
          required:"Please choose time"
        },
        d5:{
          required:"Please choose time"
        },
        d6:{
          required:"Please choose time"
        },
        d7:{
          required:"Please choose time"
        }
      },
      
      errorPlacement: function(error, element) 
      {
        error.appendTo( element.parents('.container') );
        },

    });

    $("#submitbtn").on('click', function() {
      localStorage.name = $('#fname').val();
      localStorage.age =  $('#age1').val();
      localStorage.Phone_num =  $('#Phone_num1').val();
      localStorage.email =  $('#email1').val();
      localStorage.gender = $("input[name='Gender']:checked").val();
      localStorage.sunday =  $('#sunday').val();
      localStorage.monday =  $('#mon').val();
      localStorage.tuesday =  $('#tuesday').val();
      localStorage.wednesday =  $('#wednesday').val();
      localStorage.thursday =  $('#thursday').val();
      localStorage.friday =  $('#friday').val();
      localStorage.saturday =  $('#sat').val();
     
     
      
      console.log("data saved");
  });

  $('.day7').attr('disabled', true);
  $('.selected').change(function() {
    $('.day7').attr('disabled', !this.checked);
  });
  $('.paid7').attr('disabled', true);
  $('.day7').change(function() {
    $('.paid7').attr('disabled', !this.checked);
  });
  $('.Monday').attr('disabled', true);
  $('.selected').change(function() {
    $('.Monday').attr('disabled', !this.checked);
  });
  $('.mon').attr('disabled', true);
  $('.Monday').change(function() {
    $('.mon').attr('disabled', !this.checked);
  });
  $('.Tuesday').attr('disabled', true);
  $('.selected').change(function() {
    $('.Tuesday').attr('disabled', !this.checked);
  });
  $('.paid2').attr('disabled', true);
  $('.Tuesday').change(function() {
    $('.paid2').attr('disabled', !this.checked);
  });
  $('.Wednesday').attr('disabled', true);
  $('.selected').change(function() {
    $('.Wednesday').attr('disabled', !this.checked);
  });
  $('.paid3').attr('disabled', true);
  $('.Wednesday').change(function() {
    $('.paid3').attr('disabled', !this.checked);
  });
  $('.Thursday').attr('disabled', true);
  $('.selected').change(function() {
    $('.Thursday').attr('disabled', !this.checked);
  });
  $('.paid4').attr('disabled', true);
  $('.Thursday').change(function() {
    $('.paid4').attr('disabled', !this.checked);
  });
  $('.Friday').attr('disabled', true);     
  $('.selected').change(function() {
    $('.Friday').attr('disabled', !this.checked);
  });
  $('.paid5').attr('disabled', true);
  $('.Friday').change(function() {
    $('.paid5').attr('disabled', !this.checked);
  });
  $('.day6').attr('disabled', true);
  $('.selected').change(function() {
    $('.day6').attr('disabled', !this.checked);
  });
  $('.sat').attr('disabled', true);
  $('.day6').change(function() {
    $('.sat').attr('disabled', !this.checked);
  });

});