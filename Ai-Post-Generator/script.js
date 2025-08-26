const mediaList = document.querySelectorAll('.fa-brands');
const msgTypeList = document.querySelectorAll('.btn');
const msg = document.querySelector('#msg-box');
const generateBtn = document.querySelector('.generate-btn');
let desiredTone = "neutral"; 

// Media redirection
mediaList.forEach((icon) => {
  icon.addEventListener('click', function (e) {
    let targetIcon = e.target.className;
    if (targetIcon.includes('facebook')) {
      window.location.href = 'https://facebook.com/';
    } else if (targetIcon.includes('twitter')) {
      window.location.href = 'https://x.com/';
    } else if (targetIcon.includes('pinterest')) {
      window.location.href = 'https://pinterest.com/';
    } else if (targetIcon.includes('linkedin')) {
      window.location.href = 'https://linkedin.com/';
    }
  });
});

// Tone selection
msgTypeList.forEach((button) => {
  button.addEventListener('click', function (e) {
    desiredTone = e.target.textContent.trim();
  });
});

// Gemini API
const API_KEY = "AIzaSyCHf5b1ftuasC7NqaZF6ZYEvYjGOXTh9Pw"; 

async function generateResponse(userPrompt, tone) {
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

  const fullPrompt = `${tone}. ${userPrompt}`;

  const requestBody = {
    contents: [{ parts: [{ text: fullPrompt }] }]
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Gemini API response:", data); 
    return data.candidates[0].content.parts[0].text; 
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "An error occurred while generating the response.";
  }
}

// Button click
generateBtn.addEventListener('click', function () {
  const userMessage = msg.value.trim(); 
  if (!userMessage) {
    alert("Please enter a message first!");
    return;
  }

  generateResponse(userMessage, desiredTone)
    .then(response => {
      const container = document.getElementById('response-container');
      container.textContent = response;
      container.classList.add('response-container');
    })
    .catch(error => {
      document.getElementById('response-container').textContent = error;
    });
});



