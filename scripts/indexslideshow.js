//var x = window.matchMedia("(max-device-width: 800px)");


    if(window.matchMedia("(max-device-width: 600px)").matches)
    {
        var slideIndex = 1;
        showSlides(slideIndex);
    }

    // Next/previous controls
    function plusSlides(n) 
    {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) 
    {
    showSlides(slideIndex = n); 
    }

    function showSlides(n) 
    {
        var i;
        var slides = document.getElementsByClassName("mySlide");
        //var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) 
        {
            slides[i].style.display = "none";
        }
        /* for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }*/
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
    
    function test2() { 
        window.scrollBy({ top: 700, left: 0, behavior: "smooth" });
    }

    function test1() {
        window.scrollTo({ top: 340, left: 0, behavior: "smooth" });
    }