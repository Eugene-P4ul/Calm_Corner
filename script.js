// Get elements
let circle = document.getElementById('circle');
let instruction = document.getElementById('instruction');
let interval = null;
let speed = 4000; // Default speed

// Array of motivational quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Turn your wounds into wisdom. - Oprah Winfrey",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

// Function to show a specific section and hide others
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none'; // Hide all sections
  });
  document.getElementById(sectionId).style.display = 'flex'; // Show the selected section
}

// Event listeners for navigation buttons
document.addEventListener('DOMContentLoaded', () => {
  showSection('intro'); // Show intro section by default
});

document.getElementById('homeBtn').addEventListener('click', () => {
  showSection('intro');
});

document.getElementById('breathingBtn').addEventListener('click', () => {
  showSection('breathing');
});

document.getElementById('quotesBtn').addEventListener('click', () => {
  showSection('quotes');
});

// Function for the intro's Continue button
function startIntro() {
  showSection('breathing'); // Navigate to breathing section
}

// Breathing exercise functions
function breatheInOut() {
  circle.style.transform = 'scale(1.5)';
  instruction.textContent = 'Breathe In...';
  setTimeout(() => {
    circle.style.transform = 'scale(1)';
    instruction.textContent = 'Breathe Out...';
  }, speed);
}

function startBreathing() {
  if (!interval) {
    breatheInOut();
    interval = setInterval(breatheInOut, speed * 2);
    instruction.textContent = 'Breathe In...';
  }
}

function pauseBreathing() {
  clearInterval(interval);
  interval = null;
  instruction.textContent = 'Paused. Take a deep breath.';
}

function changeSpeed() {
  if (speed === 4000) {
    speed = 2000;
    instruction.textContent = 'Speed: Fast Breathing';
  } else if (speed === 2000) {
    speed = 6000;
    instruction.textContent = 'Speed: Slow Breathing';
  } else {
    speed = 4000;
    instruction.textContent = 'Speed: Normal Breathing';
  }
  pauseBreathing(); // Pause when changing speed
}

// Function to get and display a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
}