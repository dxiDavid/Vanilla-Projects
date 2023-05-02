//Most of the comments short notes for me so I could better understand what I'm doing since this is all pretty new
//It makes the code noisy but bear with me for now

const ratingCardDiv = document.querySelector(".rating-container")
const thankYouCard = document.querySelector(".thank-you-container")
const ratingList = document.querySelectorAll(".number");
const button = document.querySelector(".submit");
const selected = document.querySelector(".selected");
let value = document.querySelector(".rating");
let selectedNumber = undefined;



ratingList.forEach((function (number){
	number.addEventListener("click", function(e){
		//get rating value on click and store it in a varaible
		selectedNumber = e.target.getAttribute("itemid");

		// Toggle active state on rating component
		if (!selected) {
			e.target.classList.toggle("selected");
		  }
	  
		// Remove active state from last selected rating component and add active class the to new selected rating component
		if (e.target.classList.contains("selected")) {
			ratingList.forEach((e) => e.classList.remove("selected"));
			number.classList.add("selected");
		  }
	})
}))

//change card content from rating to thank you and check whether the user actually rated
button.addEventListener("click", () => {
	//alert if no rating selected
	if(!selectedNumber){
		alert("Please Rate Us");
	}
	if(selectedNumber){
		thankYouCard.classList.remove("display-none");
		ratingCardDiv.classList.add("display-none");
		value.textContent =  `You selected ${selectedNumber} out of 5`;
	}
})

// Remove active number state when clicking somewhere on the page
document.addEventListener("click", function (e) {
	if (!e.target.matches(".selected")) {
	  ratingList.forEach((e) => e.classList.remove("selected"));
	  selectedNumber = undefined;
	}
  });

