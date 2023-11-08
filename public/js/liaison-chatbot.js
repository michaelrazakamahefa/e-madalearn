document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      const chatbotContainer = document.getElementById('chatbot-container');
  
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '../../views/chatbot/chatbot.html', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          chatbotContainer.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
    }, 3000);
  });
  