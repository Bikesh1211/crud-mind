document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const apiBaseUrl = "http://localhost:5000/api/auth/login";
  try {

    const response = await axios.post(apiBaseUrl, {
      email,
      password,
    });
    console.log({ response });
    document.getElementById("responseMessage").innerHTML = `
        <div class="alert alert-success">Login successful! Welcome back.</div>
      `;
    if (response) {
      localStorage.setItem("username", response?.data?.userName);
    }
    window.location.href = '/users.html';
  } catch (error) {
    document.getElementById("responseMessage").innerHTML = `
        <div class="alert alert-danger">${
          error.response?.data?.message || "Login failed!"
        }</div>
      `;
  }
});
