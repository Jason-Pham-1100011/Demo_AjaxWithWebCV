

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
}



var slideshow = document.getElementById("auto"),
  count = 1;
slideshow.onclick = function() {
	count *= -1;
	Auto();
}

function Auto()
{
	if(count<0)
	{
		plusSlides(1);
		setTimeout(Auto,2000);
	}
	
}

function validateEmail(email) 
{
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function btnSendMess(event)
{
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	if(email =="")
	{
		event.preventDefault();
		document.getElementById("err").style.display = "inline";
		document.getElementById("err").innerHTML="* Vui long nhap Email";
	}
	else
	{

		// var $result = $("#err");
		// var email = $("#email").val();
		// $result.text("");

		//if (validateEmail(email)) {
			//alert( "valid");
			// $result.text(email + " is valid :)");
			// $result.css("color", "green");
		if(!validateEmail(email)) {
			
			event.preventDefault();
			document.getElementById("err").style.display = "inline";
			document.getElementById("err").innerHTML="* Email khong hop le";
			// $result.text(email + " is not valid :(");
			// $result.css("color", "red");
		}
	}

	if(message=="")
	{
		event.preventDefault();
		document.getElementById("err").style.display = "inline";
		document.getElementById("err").innerHTML="* Vui long nhap Message";
	}
	else
	{	
		//alert(message.length)
		if(message.length >128)
		{
			event.preventDefault();
			document.getElementById("err").style.display = "inline";
			document.getElementById("err").innerHTML="Message dai qua 128 ki tu";
		}
	}
}