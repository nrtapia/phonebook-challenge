<%@ page language="java" contentType="text/html; charset=US-ASCII" pageEncoding="US-ASCII"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
	<title>PhoneBook</title>
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/styles.css">
	<script>
		const API_HOST = "<%=request.getAttribute("API_HOST") %>"; 
	</script>
</head>
<body>
	<div class="container">
		<div class="pure-g">
			<div class="pure-u-1">
				<div class="header">
					<img class="logo" src="img/phonebook.png"/>
					<p>v 1.0</p>
				</div>
				
			</div>
		</div>
		<div class="pure-g">
		    <div class="pure-u-sm-1 pure-u-1-3">
		    	<div class="box">
		    		<h2><i class="fa fa-user-plus"></i>New contact</h2>
		    		<form class="pure-form">
					    <fieldset class="pure-group">
					        <input type="text" class="pure-input-1-2" placeholder="First Name" id="firstName-input" maxlength="60">
					        <input type="text" class="pure-input-1-2" placeholder="Last Name" id="lastName-input" maxlength="60">
					        <input type="text" class="pure-input-1-2" placeholder="Phone" id="phone-input"  maxlength="10">
					    </fieldset>
					    <button type="submit" class="pure-button pure-input-1-2 pure-button-primary" id="add-button">
					    <i class="fa fa-user-plus"></i>Add</button>
					</form>
				</div>
			</div>
		    <div class="pure-u-sm-1 pure-u-1-3">
				<div class="box">
		    		<h2><i class="fa fa-search"></i>Search contact</h2>
		    		<form class="pure-form">
		    			<fieldset class="pure-group">
					    	<input type="text" class="pure-input-1-2" id="search-input">
					     </fieldset>
					    <button type="button" id="search-btn" class="pure-button pure-input-1-2 pure-button-primary">
					    <i class="fa fa-search"></i>Search</button>
					</form>
				</div>
			</div>
			<div class="pure-u-sm-1 pure-u-1-3">
				<div class="box box-auto-heigth">
		    		<h2><i class="fa fa-users"></i> Contacts</h2>
	    			<table class="pure-table">
					    <thead>
					        <tr>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Phone</th>
					        </tr>
					    </thead>
					
					    <tbody id="contact-table-body">
					       
					    </tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" ></script>
	<script src="js/ContactService.js" ></script>
	<script src="js/ContactController.js" ></script>
	<script src="js/phonebook.js" ></script>

	<script id="contact-row-template" type="text/x-handlebars-template">
		{{#each this}}
  		<tr>
			<td>{{firstName}}</td>
			<td>{{lastName}}</td>
			<td>{{phone}}</td>
		</tr>
		{{else}}
			<tr><td colspan="3">No records found.</td></tr>
		{{/each}}
	</script>
</body>
</html>