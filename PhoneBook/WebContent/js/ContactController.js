/**
 * Class Contact Controller
 */
class ContactController {

	constructor( contactService ) {	  
	  
	  this.contactService = contactService;

	  // Add components
	  this.firstName = document.getElementById('firstName-input');
	  this.lastName = document.getElementById('lastName-input');
	  this.phone = document.getElementById('phone-input');
	  
	  // Search components
	  this.searchInput = document.getElementById('search-input');
	  
	  // Result Component
	  this.tableBody = document.getElementById("contact-table-body");
	  let source = document.getElementById("contact-row-template").innerHTML;
	  this.contactTemplate = Handlebars.compile(source);
	  
	  // Event Listeners
	  let self = this;
	  document.getElementById('search-btn').addEventListener('click', function(){ self.searchContact(); });
	  document.getElementById('add-button').addEventListener('click', function(event){ event.preventDefault(); self.addContact(); });
	}
	
	/**
	 * Method to perform the contact search
	 */
	searchContact() {
		let self = this;
		
		let term = self.searchInput.value.trim();
		if(term == ''){
			alert('Search contact input term is required!');
			return;
		}
		
		this.contactService.search(term, function(response) {
			self.tableBody.innerHTML = self.contactTemplate(response);
		});
	}
	
	/**
	 * Method to perform the contact creation
	 */
	addContact(){
		
		let firstName = this.firstName.value;
		let lastName =  this.lastName.value;
		let phone =  this.phone.value;
		
		if( this.isEmpty(firstName) || this.isEmpty(phone) ){
			alert('First Name and Phone are required!');
			return;
		}
		
		let self = this;
		this.contactService.save(JSON.stringify({firstName:firstName, lastName:lastName, phone:phone}), function(response){
			alert('Contact '+ response.firstName + ' added!');
			self.cleanForm();
		});
	}
	
	/**
	 * Method to validate is a string is empty
	 * 
	 * @param value
	 *            string data
	 * @returns true if the value is empty
	 */
	isEmpty(value){
		return value.trim() == '';
	}
	
	/**
	 * Method to erase form data
	 */
	cleanForm(){
		this.firstName.value = '';
		this.lastName.value = '';
		this.phone.value = '';
	}
  
}