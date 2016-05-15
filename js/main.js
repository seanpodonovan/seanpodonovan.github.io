function askQuestions() 

{
	var firstName = prompt('What is your first name?')
	var lastName = prompt('What is your last name ' + firstName + '?')
	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	// var age = prompt('How old are you?');
	// // age = parseInt(age);
	// } else if (age >=13) {
	// 	console.log(fullName + ' is a teenager')
	// } else {
	// 	console.log(fullName + ' is a child')
	// }

	if (firstName == "General") {
		console.log('Is a General')
	}

	if (lastName == "Assembly"){
		console.log('Last name is Assembly')
	}

	if (firstName.toLowerCase() === "general" && lastName.toLowerCase() !== "assembly"){
		$('h1').text('Greetings General ' + lastName + '!');
		$('h2').text('Welcome Back');
		console.log('Welcome General ' + lastName);
		var faveColour = prompt('What is your favourite colour ' + firstName + '?').toLowerCase();
	}
	
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {

		$('h1').css('color', faveColour);
		$('h2').css('color', faveColour);
	}

	else {
		$('h1').text('Go away ' + firstName + '!');
		$('h2').text('you are not welcome');
		$('h1').css('color', 'red');
		$('h2').css('color', 'red');
		$('.seanimg').attr({src: "images/leave.jpg"});
		$('.seanimg').css('box-shadow', '0 0 0 10px red')

	}
}

//When page loads
$(function() {

	$('img').on('click', askQuestions);
	
	//when user clicks a heading use an event listener (on click)
	$('h3').on('click', function() { 
	
		//toggle content after the heading
		$(this).next().slideToggle(200);

	});
	

	
});