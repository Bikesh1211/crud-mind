document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const apiBaseUrl = 'http://localhost:5000/api/auth/login'
    try {
      // Make an Axios POST request to the API
      const response = await axios.post(apiBaseUrl, {
        email,
        password,
      });
  
      // Display success message or redirect to another page
      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-success">Login successful! Welcome back.</div>
      `;
  
      // Redirect to a dashboard or another page (optional)
      window.location.href = '/users.html';
    } catch (error) {
      // Display error message
      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-danger">${error.response?.data?.message || 'Login failed!'}</div>
      `;
    }
  });