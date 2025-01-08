document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Basic form validation
    if (!username || !email || !password || !confirmPassword) {
      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-warning">Please fill in all fields.</div>
      `;
      return;
    }
  
    // Password confirmation check
    if (password !== confirmPassword) {
      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-warning">Passwords do not match.</div>
      `;
      return;
    }
  
    try {
      // Make the Axios POST request to your API
      const response = await axios.post('https://example.com/api/register', {
        username,
        email,
        password,
      });
  
      // Display success message
      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-success">Registration successful! Welcome, ${response.data.username}.</div>
      `;
  
      console.log('Registration response:', response);
  
      // Optionally redirect to the login page or dashboard
      // window.location.href = '/login'; 
  
    } catch (error) {
      // Handle error and display message
      console.error('Registration error:', error);
      const errorMessage = error.response?.data?.message || 'Registration failed!';
      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-danger">${errorMessage}</div>
      `;
    }
  });
  