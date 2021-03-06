// on page load function that executes when page loads
// on page load will initiate API request call to get and store API access token to be used for making subsequent API calls
window.onload = function () {
	// API request body payload 
	var data = "client_id=u7FbgcRQda0HGn2yTxSGk2WZAG4IlvVq&client_secret=QuQoeBidCP5gGW8Y&grant_type=client_credentials";
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	// function run when API request is made
	xhr.onreadystatechange = function () {
		// get API access token if request returns status 200
		if (xhr.readyState == 4 && xhr.status == 200) {
			// set request response in variable named data,
			var data = xhr.responseText;
			// parse responseText to JSON so its iterable
			var jsonResponse = JSON.parse(data);
			// store API access token in localstorage
			localStorage.setItem("token", jsonResponse.access_token);
		}
	};
	// request url
	xhr.open("POST", "https://test.api.amadeus.com/v1/security/oauth2/token");
	// set request header to form urlencoded
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	// disable request header credentials
	xhr.withCredentials = false;
	// post request body payload
	xhr.send(data);
};
// back-to-top-button            
var btn = $('#button');
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});
});
// flight+hotel popover for discount  
$(document).ready(function () {
	$('[data-toggle="popover"]').popover();
});
// Newsletter feedback  
function myFunction() {
	alert("Thanks for subscribing to our Newsletter");
}