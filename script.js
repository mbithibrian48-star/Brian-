// Reusable function to initialize a slider
function createSlider(trackId, slideSelector, duration = 8000) {
  const track = document.getElementById(trackId);
  if (!track) return; // Guard clause in case element isn't on the page

  // Only find the slides inside THIS specific track container
  const slides = track.querySelectorAll(slideSelector);
  const totalSlides = slides.length;
  let currentIndex = 0;

  const nextSlide = () => {
    let nextIndex = currentIndex + 1;

    if (nextIndex < totalSlides) {
      currentIndex = nextIndex;
    } else {
      currentIndex = 0;
    }
    
    // Moves the inner track horizontally
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Start the timer loop
  setInterval(nextSlide, duration);
}

// Initialize both sliders when the window loads
window.addEventListener('DOMContentLoaded', () => {
  // 1. Image Slider (8 seconds)
  createSlider('imageSliderTrack', '.slide', 8000);
  
  // 2. Text Review Slider (8 seconds)
  createSlider('textSliderTrack', '.slide', 8000);
});


// Select the HTML elements
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mySidenav = document.getElementById('mySidenav');

// Open the sidebar when the menu button is clicked
menuBtn.addEventListener('click', () => {
  mySidenav.classList.add('open');
});

// Close the sidebar when the close button is clicked
closeBtn.addEventListener('click', () => {
  mySidenav.classList.remove('open');
});

// Optional: Close the sidebar when clicking anywhere outside of it
window.addEventListener('click', (event) => {
  if (event.target !== mySidenav && event.target !== menuBtn && !mySidenav.contains(event.target)) {
    mySidenav.classList.remove('open');
  }
});

const waWidgetBtn = document.getElementById('waWidgetBtn');
const waChatBox = document.getElementById('waChatBox');
const waCloseBtn = document.getElementById('waCloseBtn');
const waSendBtn = document.getElementById('waSendBtn');
const waUserInput = document.getElementById('waUserInput');

// Target Phone Number (Clean international format: NO plus sign, spaces, or dashes)
const BUSINESS_PHONE = "254724039720"; 

// Toggle open widget window
waWidgetBtn.addEventListener('click', () => {
  waChatBox.style.display = 'flex';
});

// Close widget window
waCloseBtn.addEventListener('click', () => {
  waChatBox.style.display = 'none';
});

// Fire message query to WhatsApp on submit click
waSendBtn.addEventListener('click', executeRouting);

// Also submit if the user presses "Enter" inside the text field
waUserInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') executeRouting();
});

function executeRouting() {
  const userText = waUserInput.value.trim();
  if (!userText) return; // Exit if input is empty
  
  // URL-encode text payload safely
  const completeMessage = encodeURIComponent(userText);
  
  // CORRECTED: Added the missing '/' and '\$' for a valid template literal link
  const targetWhatsAppUrl = `https://wa.me/${BUSINESS_PHONE}?text=${completeMessage}`;
  
  // Force a secure redirect open context out to a fresh tab
  window.open(targetWhatsAppUrl, '_blank');
  
  // Clean input and close window
  waUserInput.value = '';
  waChatBox.style.display = 'none';
}



const footer = document.getElementById('footer');
const myBtn = document.getElementById('contact');

myBtn.addEventListener('click',function(){
footer.scrollIntoView({behavior:'smooth'})  
});
