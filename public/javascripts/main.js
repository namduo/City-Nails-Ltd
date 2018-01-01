
// // FORM SUBMISSION
// document.getElementById('contact-form').addEventListener('submit', formSubmission);

// function formSubmission() {
// 	event.preventDefault();

// 	// FORM VALIDATE
// 	let formName = document.getElementById('name-field').value;
// 	let formEmail = document.getElementById('email-field').value;
// 	let formMessage = document.getElementById('message-field').value;

// 	if (formName === '' || formEmail === '' || formMessage === '') {
// 		alert('Please Fill In All Fields');
// 	} else {
// 		console.log('form submitted');

// 		fetch('/contact/form', {
// 			method: 'POST',
// 			headers: {
// 				'Accept': 'application/json, text/plain, */*', 'Content-type':'application/json'
// 			},
// 			body:JSON.stringify({
// 				name: formName,
// 				email: formEmail,
// 				message: formMessage
// 			})
// 		})
// 		.then((res) => res.json())
// 		.then((data) => console.log(data))
// 		.catch((err) => console.log(err))

// 		document.getElementById('contact-form').reset();
// 	}

// }


