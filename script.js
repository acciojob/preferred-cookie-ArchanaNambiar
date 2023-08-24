//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()}`;
}

// Function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

// Apply user preferences from cookies
function applyUserPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', fontSize);
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Event listener for form submission
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const fontSize = document.getElementById('fontsize').value + 'px';
  const fontColor = document.getElementById('fontcolor').value;

  setCookie('fontsize', fontSize, 365);
  setCookie('fontcolor', fontColor, 365);

  document.documentElement.style.setProperty('--fontsize', fontSize);
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});

// Apply user preferences when the page loads
applyUserPreferences();
