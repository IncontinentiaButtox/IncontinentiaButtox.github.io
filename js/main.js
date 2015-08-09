function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	$('h2').text('Yay, it\'s ' + fullName + '!');

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge == 35) {
		$('h1').text('Hey, spring chicken!');
		console.log('the perfect age');
	}

	if (userAge >= 18) {
		//Do something
		$('h1').text('Wow, you\'re old!');
		console.log('User is an adult');

	} else if (userAge >= 13) {
		$('h1').text('Yo, bro!');
		console.log('User is a teenager');
	}	
		else {
			$('h1').text('Go away, child!');
			console.log('Child Alert');
	}

	if (firstName.toLowerCase() === "general" && lastName.toLowerCase() !== "assembly") {
	console.log('Howdy, General ' + lastName + '!'); 
	}

	if (firstName.toLowerCase() === "sian" && lastName.toLowerCase() === "morris") {
		console.log('You\'re looking mighty fine, honey!')
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();
	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {
		$('h2').css('background-color', faveColour);
	}
}



/* This is a comment */
// This line of text is also a comment

//When the page has loaded
$(function() {

	//click on image to get questions
	$('img').on('click', askQuestions);
	
	//get all the sections
	var sections = $('h3').next();


	// Hide all the sections
	sections.hide();


	//When the user clicks an h3
	$('h3').on('click', function() {

		$(this).css('color','darkslategrey');

			//Remember the section the user wants to see
			var thisSection = $(this).next();

			//Hide all the sections except the one the user wants to see
			sections.not(thisSection).slideUp(500);

		// Toggle the one the user wants to see
		thisSection.slideToggle(300);


	})





});