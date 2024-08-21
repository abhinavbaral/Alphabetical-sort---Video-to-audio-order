/**
 * Function to sort the list items alphabetically, ignoring case.
 */
function sortList() {
  // Get the input textarea and the unordered list
  const inputArea = document.getElementById("inputArea");
  const ul = document.getElementById("list");

  // Clear the existing list
  ul.innerHTML = "";

  // Get the value from the textarea, split by new lines, and trim whitespace
  const items = inputArea.value
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item);

  // Check if the total length of the input exceeds the limit
  const totalLength = items.join("").length;
  if (totalLength > 5000000) {
    alert("Input exceeds 5,000,000 characters. Please reduce the size.");
    return;
  }

  // Sort the items alphabetically, ignoring case
  items.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  // Append the sorted items to the unordered list
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}
//  video
function convertVideo() {
    const fileInput = document.getElementById('videoFile');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Please select a video file.');
      return;
    }
  
    const formData = new FormData();
    formData.append('videoFile', file);
  
    // Make a POST request to your server or API endpoint
    fetch('https://your-backend-api.com/convert', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.blob())
    .then(blob => {
      // Create a download link for the audio file
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted-audio.mp3'; // Change extension as needed
      link.textContent = 'Download Converted Audio';
      document.getElementById('result').innerHTML = '';
      document.getElementById('result').appendChild(link);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during the conversion.');
    });
  }
  
  // Toggle menu visibility on mobile
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Example functions for sorting list and video conversion
function sortList() {
  const inputArea = document.getElementById("inputArea");
  const ul = document.getElementById("list");

  ul.innerHTML = "";

  const items = inputArea.value
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item);

  const totalLength = items.join("").length;
  if (totalLength > 5000000) {
    alert("Input exceeds 5,000,000 characters. Please reduce the size.");
    return;
  }

  items.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function convertVideo() {
  const fileInput = document.getElementById('videoFile');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a video file.');
    return;
  }

  const formData = new FormData();
  formData.append('videoFile', file);

  fetch('https://your-backend-api.com/convert', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'converted-audio.mp3'; // Change extension as needed
    link.textContent = 'Download Converted Audio';
    document.querySelector('main').appendChild(link);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred during the conversion.');
  });
}
