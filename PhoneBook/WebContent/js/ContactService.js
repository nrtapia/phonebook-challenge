/**
 * Class Contact Service
 */
class ContactService{
	
constructor(host){
  this.saveEnpoint =  host + '/contacts';
  this.searchEndpoint = this.saveEnpoint  + '?term=';
}


/**
 * Function to call Search GET Contact API
 * 
 * @param term
 *            word to search
 * @param callback
 *            success function to call
 * @returns a promise
 */
  search(term, callback) {
	  return fetch(this.searchEndpoint + term)
	  	.then(this.handleErrors)
	  	.then(this.parseToJson)
	  	.then(callback)
	  	.catch(function(error) {
	  		alert('Error: ' + error.message);
	  	});
  }
  
 /**
 * Function to call POST Contact API
 * 
 * @param contact
 *            JSON contact data
 * @param callback
 *            success function to call
 * @returns a promise
 */
 save(contactData, callback) {
  return fetch(this.saveEnpoint, {
      method: 'POST',
      headers: {
    	  'Content-Type': 'application/json'
	  },
      body: contactData 
    })
  	.then(this.handleErrors)
  	.then(this.parseToJson)
  	.then(callback)
  	.catch(function(error) {
  		alert('Error: ' + error.message);
  	 });
  }
   
  
 /**
	 * Callback handler to catch fetch error and throws
	 * 
	 * @param response
	 *            API response
	 * @returns throw Error if the response fail
	 */
  handleErrors(response) {
	    if (!response.ok) {
	    	var resp = response.json().then(function(data){
	    		throw Error(data.message);
	    	});
	        
	    }
	    return response;
  }
  
  /**
	 * Function to parse response data to JSON
	 * 
	 * @param response
	 *            API response
	 * @returns JSON response
	 */
    parseToJson(response) {
  	    return response.json();
    }
  
}