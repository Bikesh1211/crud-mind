document.getElementById('resetPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (!email) {
      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-warning">Please enter your email.</div>
      `;
      return;
    }

    try {
    const apiBaseUrl = 'http://localhost:5000/api/auth/forgot-password'

      const response = await axios.post(apiBaseUrl, { email });

      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-success">Password reset link has been sent to your email.</div>
      `;

      console.log('Password reset response:', response);
    } catch (error) {
      console.error('Error resetting password:', error);
      const errorMessage ='Failed to reset password.';
      document.getElementById('responseMessage').innerHTML = `
        <div class="alert alert-danger">${errorMessage}</div>
      `;
    }
});
