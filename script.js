//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue = `${name}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieValue;
}

// Function to get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

// Set the initial values from cookies if available
const savedFontSize = getCookie('font_size');
const savedFontColor = getCookie('font_color');

if (savedFontSize) {
  document.documentElement.style.setProperty('--fontsize', savedFontSize);
  document.getElementById('fontsize').value = savedFontSize;
}

if (savedFontColor) {
  document.documentElement.style.setProperty('--fontcolor', savedFontColor);
  document.getElementById('fontcolor').value = savedFontColor;
}

// Handle form submission
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  const newFontSize = fontSizeInput.value + 'px';
  const newFontColor = fontColorInput.value;

  // Update CSS variables
  document.documentElement.style.setProperty('--fontsize', newFontSize);
  document.documentElement.style.setProperty('--fontcolor', newFontColor);

  // Save preferences in cookies
  setCookie('font_size', newFontSize, 365); // Cookie will expire in 1 year
  setCookie('font_color', newFontColor, 365); // Cookie will expire in 1 year
});


