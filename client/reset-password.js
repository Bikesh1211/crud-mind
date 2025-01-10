document.getElementById('resetPasswordForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!password || !confirmPassword) {
    document.getElementById('responseMessage').innerHTML = `
      <div class="alert alert-warning">Please fill in all fields.</div>
    `;
    return;
  }

  if (password !== confirmPassword) {
    document.getElementById('responseMessage').innerHTML = `
      <div class="alert alert-warning">Passwords do not match.</div>
    `;
    return;
  }

  const queryString = window.location.search;

const resetToken = queryString.substring(1);
  try {
    const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
      resetToken,
      newPassword:password,
    });

    document.getElementById('responseMessage').innerHTML = `
      <div class="alert alert-success">Password reset successfully! You can now <a href="/">login</a>.</div>
    `;
  } catch (error) {
    const errorMessage = 'Failed to reset password.';
    document.getElementById('responseMessage').innerHTML = `
      <div class="alert alert-danger">${errorMessage}</div>
    `;
  }
});