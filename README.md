
# MARSHAL TRAVEL AGENCY WEBSITE
## DESCRIPTION
This is an interactive Travel Agency website created to provide proactive customer service by maximizing customers feedback.

We are customer-centric, we essentially master your wants and needs to provide travel and tourism related services.

## UX
The visual flow of the site is intended to be pleasing and intuitive with the home page as the anchor.
The aim here is ensuring that users find value in what the website provides, more so it was a deliberate act to make it usable,
useful, desirable and accessible.

## User Stories

Users:
* As a prospective user, I want to know about the company and what they offer/particularly appealing benefits
* As a first time user, I want to be able to easily navigate throughout the site to find content about available flights, hotels, cars for rent and fare information
* As a user, I want to get expert advice, plan my trip itineraries, tour packages and suitable cost about my destination.
* As a user, I want make alternative booking arrangements or cancellation if changes arise before or during trip


Owners:
* As a owner, I want my website to be desirable and accessible to users I want users to see what sets me apart from the competition.
* As a owner, I want to know what my contemporaries are doing and ways to improve
* As a owner, I want end-user feedback in shaping services to fit their needs more accurately
* As a owner, I want users to get notifications and publications via newsletter when there are new offers

## Wireframe
The skeletal framework of this website was designed using [Balsamiq](https://balsamiq.com) as a visual guide to represent the page schematic and screen blueprint.

Links to final version of the wireframe can be found below:
* [Wireframe Final Version](https://seagather.github.io/Marshal-Travel-Agency/wireframes/marshal-travel-wireframe.pdf)

## FEATURES

## Existing Features
* The Index page offers four nav bars which uses internal hyperlinks page jump to take users to relevant sections.
It contains full-width responsive Hero Image Heading Caption with a call-to-action button and a popup design.
The call-to-action button takes user straight to booking section while the popup design additionally showcase the website appealing benefits.

* The services section features transparent Jumbotron with a brief text informing users about services.
After the brief text description, a Grid system with inner card elements presents different services.
Each of the eye-catching pictures has a button which takes user directly to contact section for more information as related to services.

* The Booking section contains togglable tab which utilizes JavaScript to click on the specified tab button.
Each tab houses relevant forms and button in tandem to the subject matter.
The Flight and hotel button specifically contains popover which makes use of JavaScript to inform users about discount.
The Flight and Hotel search Tab renders data with Dynamic API (Amadeus Content-based) while Flight+Hotel and Car makes use of Static API: it can be dynamically generated
but it is statically delivered.

* The Contact section contains contact form with EmailJS Integration for submission.
The contact form has a validating pop up modal assuring users upon submission of their enquires or request.

* When users get at the button of a long page, they often need to get back to the top.
There is a Back to Top button integration with JavaScript to allow users to quickly navigate to the top of the page.

## Features Left to Implement
* I will like to add more data for different locations.

* A Virtual Reality should be added for users. 
This will allow travelers to test out experiences before they book a trip. Guests can preview hotel rooms, attractions and experiences 
as if they’re really there. It helps guests ensure they are spending their time and money wisely and planning the trip of their dreams.

## TECHNOLOGIES USED
**Languages:**
* [HTML5:](https://www.w3schools.com/html/default.asp)
    - HTML5 was used to code the content of the website.
* [CSS:](https://www.w3schools.com/css/default.asp)
    - CSS3 was used to style the content.
* [JavaScript:](https://www.w3schools.com/js/default.asp)
    - JavaScript was used to style the significant interactive functionality.

**Tools and Libraries:**
* [Bootstrap:](https://getbootstrap.com/)
    - Bootstrap was used to structure the Modal, Carousel, grid system and card to render responsive website.
* [W3C Validator:](https://validator.w3.org/)
    - The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to clear syntax errors.
* [Font-Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons like the social media links for aesthetic and UX purposes.
* [jQuery:](https://jquery.com/)
    - jQuery library was used to simplify the JavaScript.
* [Tinypng:](https://tinypng.com)
    - Tinypng was used to compress the file size of PNG and JPG files.
* [GTmetrix:](https://gtmetrix.com)
    - GTmetrix was used to run speed tests on each page.
* [Pingdom:](https://tools.pingdom.com)
    - Pingdom was used to run speed tests on each page.
* [HTML and CSS Beautifier:](http://minifycode.com/html-beautifier/)
    - HTML and CSS was used to format the codes to make it more readable.
* [Google Fonts:](https://fonts.google.com/)
    - Exo and Roboto fonts were imported from google fonts.
* [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub:](https://github.com/)
    - This project has been deployed through and hosted by GitHub.

## MEDIA
* [Am I Responsive:](http://ami.responsivedesign.is/) used for UX Image section
* [Unsplash:](https://unsplash.com/) for website images.
* [LogoMaker:](https://logomaker.com) was used for the logo design.

I used [Tinypng](https://tinypng.com) which utilised smart lossy compression techniques to reduce the file size of PNG and JPG files. This shrunk the image size to 67%.
the site uses less bandwith and load faster.

![image-compressor](https://seagather.github.io/Marshal-Travel-Agency/assets/images/image-compressor.png)

## TESTING

## Speed Test
The Initial speed performance test generated a poor loading analysis which necessitated the use of Tinypng to shrink the image size to 67%.
The page sizes were reduced and the perfomance score was improved as seen below:

Website was tested on [GTmetrix](https://gtmetrix.com) and [Pingdom](https://tools.pingdom.com) platforms.

![speed-test](https://seagather.github.io/Marshal-Travel-Agency/assets/images/speed-test.png)

## EmailJS Test

Integration of the EmailJS was very easy because I followed the well implemented course in code institute module.
methods may vary as integration evolves but the end result was achieved as seen below:

## EmailJS Sent

![emailjs-test](https://seagather.github.io/Marshal-Travel-Agency/assets/images/emailjs-test.png)

## EmailJS Received

![emailjs-received](https://seagather.github.io/Marshal-Travel-Agency/assets/images/emailjs-received.png)

## Testing User Stories from User Experience (UX) Section

Users:
* As a prospective user, I want to know about the company and what they offer/particularly appealing benefits.
    - The Hero image and colors will essentially communicate visual aesthetic state of mind to viewers, first time user would assimilate the front page
      with various options of self explanatory navigation bar.
    - There is also a "click here for details" popup link at the bottom of the home section after the "Book Now" button which will inform users about our ethos at a glance.
    - There appears a popover box upon clicking the "Flight+Hotel" Tab button at the Booking section which will inform users about discount. 
    

* As a first time user, I want to be able to easily navigate throughout the site to find content about available flights, hotels, cars for rent and fare information
    - The site has been designed to be intuitive and accessible to user. At the top of the index page there is a clean navigation bar, each link describes at what section they will end up at clearly.
    - At the middle of the Hero image there is a "Book Now" call to action button that will take users directly to booking section.
    - The Booking section tab was well structured pertaining to each subject matter with relevant forms and button in sync for users quest.
    - When users must have completed the relevant inputs and check buttons for a particular tab, upon clicking search pops up another page to cleary render feedback information.
    
* As a user, I want to get expert advice, plan my trip itineraries, tour packages and suitable cost about my destination.
    - Users can make use of the Contact section which contains contact form with EmailJS Integration for submission.
      The contact form has a validating pop up modal assuring users upon submission of their enquires or request.
    - Users are provided with button options at the bottom card of each eye-catching picture on the service section which takes them directly to contact section for more information as related to services.
    - At the footer "Contact details" there is a clickable Email address and Phone number provided for user accessibility and easy workflow.
    
* As a user, I want make alternative booking arrangements or cancellation if changes arise before or during trip.
    - Users can always channel their relevant request through the Contact section.
    - At the footer of the "Connect With Us", the user can alternatively contact the organisation on social media which highlights the links to them.

Owners:
* As a owner, I want my website to be desirable and accessible to users, I want users to see what sets me apart from the competition.
    - The well detailed composition of the website speaks volume, the colors, the captions, the call to action buttons, pop ups and links
     strategically positioned and escalated to desired sections serves to interact with clients to determine travel needs, budgets and preferences.
    - The pop up modal at the contact form section after users submission of their enquires or request is reassuring.
    - Each page has a clickable Email address and Phone number at the footer "contact details" for accessibility.

* As a owner, I want to know what my contemporaries are doing and ways to improve.
    - The Feedback from users on the Contact section comment and the social media platforms depicted with icons on each footer of the page will generate resources for improvement.

* As a owner, I want end-user feedback in shaping services to fit their needs more accurately
    - The "connect with us" social media icons were clearly displayed at the footer for followers and feedbacks.

* As a owner, I want users to get notifications and publications via newsletter when there are new offers.
    - The newsletter subscription option is provided for users at the footer of the website to cascade vital information and promos which will promote the site.

## Further Testing

* All links were tested. Internal links all work. External links all work and open in new window.
* The Website was tested on Google Chrome, Internet Explorer, Firefox, Microsoft Edge and Safari browsers.
* The website was test run on a variety of devices such as Desktop, Laptop, iPhoneXR, Samsung Note3, Samsung Tab2 & Nokia.
* The site was test run by friends and colleagues for possible user experience issues and bugs.
* All the pages are responsive on all screen sizes.
* All the API calls returned responses as expected.
* The call to action buttons links as expected and the modal form pops up with all the input components validated.
* Each Search button generates feedback data on a new page which has a back to homepage link.
* The Email and Phone number at each footer "contact details" are clickable for users.
* All Codes were validated through the Markup Validator to erase syntax error.

## Bugs

## DEPLOYMENT

## Credits

## Media

## Acknowledgements