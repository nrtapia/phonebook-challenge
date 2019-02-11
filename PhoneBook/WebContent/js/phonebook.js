/* Phonebook */

document.addEventListener('DOMContentLoaded', (event) => {
	let contactService = new ContactService(API_HOST); 
	let contactController = new ContactController(contactService);
})