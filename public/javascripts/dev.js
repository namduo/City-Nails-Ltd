
const base = {
   formFields: {
      name: document.querySelector('#name-field'),
      phone: document.querySelector('#phone-field'),
      email: document.querySelector('#email-field'),
      message: document.querySelector('#message-field'),
      submitBtn: document.querySelector('#btn')
   }
}

base.formFields.submitBtn.addEventListener('click', () => {
   
   const data = {
      name: base.formFields.name.value,
      phone: base.formFields.phone.value,
      email: base.formFields.email.value,
      message: base.formFields.message.value
   }
   
   axios.post('/dev', { data })
      .then(response => {
         console.log(response);
      })
      .catch(error => {
         console.log(error);
      });
})


