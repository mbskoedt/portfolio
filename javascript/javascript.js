const radius = 155;
TweenMax.staggerFromTo('.blob', 10, {
  cycle: {
    attr: function(i) {
      var r = i * 90;
      return {
        transform: 'rotate(' + r + ') translate(' + radius + ',0.1) rotate(' + (-r) + ')'
      }
    }
  }
}, {
  cycle: {
    attr: function(i) {
      var r = i * 90 + 360;
      return {
        transform: 'rotate(' + r + ') translate(' + radius + ',0.1) rotate(' + (-r) + ')'
      }
    }
  },
  ease: Linear.easeNone,
  repeat: -1
});

// SLIDESHOWS

// myFSTVL

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Cleanssneaks

var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

// Next/previous controls
function plusSlides_2(x) {
  showSlides_2(slideIndex_2 += x);
}

// Thumbnail image controls
function currentSlide_2(x) {
  showSlides_2(slideIndex_2 = x);
}

function showSlides_2(x) {
  var y;
  var slides_2 = document.getElementsByClassName("mySlides_2");
  if (x > slides_2.length) {
    slideIndex_2 = 1
  }
  if (x < 1) {
    slideIndex_2 = slides_2.length
  }
  for (y = 0; y < slides_2.length; y++) {
    slides_2[y].style.display = "none";
  }
  slides_2[slideIndex_2 - 1].style.display = "block";
}

// madpakkespil

var slideIndex_3 = 1;
showSlides_3(slideIndex_3);

// Next/previous controls
function plusSlides_3(q) {
  showSlides_3(slideIndex_3 += q);
}

// Thumbnail image controls
function currentSlide_3(q) {
  showSlides_3(slideIndex_3 = q);
}

function showSlides_3(q) {
  var w;
  var slides_3 = document.getElementsByClassName("mySlides_3");
  if (q > slides_3.length) {
    slideIndex_3 = 1
  }
  if (q < 1) {
    slideIndex_3 = slides_3.length
  }
  for (w = 0; w < slides_3.length; w++) {
    slides_3[w].style.display = "none";
  }
  slides_3[slideIndex_3 - 1].style.display = "block";
}
