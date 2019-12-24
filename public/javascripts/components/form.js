export default function formSubmission(){
   $('#contact-form').submit(function(e) {

      e.preventDefault();
      
      // Form Validate
      if (
            $('#name-field').val() === '' || 
            $('#email-field').val() === '' || 
            $('#message-field').val() === '' || 
            $('#phone-field').val() === '' ){  
               alert('Please Fill All Fields')
            } else {
            
         $.ajax({
            type: 'post',
            url: '/contact',
            data: {
               name: $('#name-field').val(),
               email: $('#email-field').val(),
                  message: $('#message-field').val(),
                  phone: $('#phone-field').val()
               },
               
            success: function() {
               // Clear the form
               $('#name-field').val('');
               $('#email-field').val('');
               $('#message-field').val('');
               $('#phone-field').val('');
      
               // Success Message
               $('#form-message').append('Message sent! We\'ll get back to you as soon as we can.');
               }
               
            });
      }

      });
}

