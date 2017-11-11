
// use onload to make sure that html is fully loaded
window.onload = function()
{
	// Define a outer function
	function DisplayText() {
		
		// get the helpfulnote label
		var helpfulnote = document.getElementById("helpfulnote");

			// function to update helpfulnote html by passing input id
			function UpdateHelpNotesHTML(elementid) {				 

	 			if(elementid === "name")
	 				helpfulnote.innerHTML="Please input name";
	 			else if(elementid === "email")
					helpfulnote.innerHTML="Please input email id";
				else
					helpfulnote.innerHTML="Please input age";
				}

				// returns a refernce of UpdateHelpNotesHTML() to DisplayText
				return UpdateHelpNotesHTML;
			}

	// use this keyword to access method from html button click events
	// making displayHelpNotes as global so that it can be accessed from html as well
	this.displayHelpNotes = DisplayText();
}		

 