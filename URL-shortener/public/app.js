// public/app.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('urlForm');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevents page refresh

    // Get form values
    const redirectID = document.getElementById('redirectID').value.trim();
    const shortID = document.getElementById('shortID').value.trim();

    // Basic check
    if (!redirectID) {
      messageDiv.textContent = 'Please provide a valid URL.';
      return;
    }

    try {
      // POST the data to your server
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ redirectID, shortID })
      });

      const data = await response.json();

      // If server returned an error status
      if (!response.ok) {
        messageDiv.textContent = data.msg || 'An error occurred!';
        return;
      }

      // If successful, show the shortID or success message
      messageDiv.innerHTML = `
        <p>Short code created: <strong>${data.shortID}</strong></p>
        <p>You can use it at <code>http://localhost:8000/${data.shortID}</code></p>
      `;
      // Clear the form
      form.reset();

    } catch (err) {
      console.error(err);
      messageDiv.textContent = 'Something went wrong. Check console for details.';
    }
  });
});
