$(document).ready(() => {
    const apiBaseUrl = 'http://localhost:5000/api/users';
  
    // Handle form submission
    $('#userForm').submit(async (event) => {
      event.preventDefault();
  
      const name = $('#name').val();
      const email = $('#email').val();
      const password = $('#password').val();
  
      try {
        // Send a POST request to the backend
        const response = await axios.post(`${apiBaseUrl}/register`, { name, email, password });
        alert(response.data.message);
  
        // Clear form inputs
        $('#userForm')[0].reset();
  
        // Refresh user table
        fetchUsers();
      } catch (error) {
        console.error(error.response.data.message);
        alert('Error: Unable to register user.');
      }
    });
  
    // Fetch and display users in the table
    async function fetchUsers() {
      try {
        const response = await axios.get(`${apiBaseUrl}`);
        const users = response.data;
  
        const tbody = $('#usersTable tbody');
        tbody.empty(); // Clear the table
  
        users.forEach((user, index) => {
          const row = `
            <tr data-id="${user._id}">
              <td>${index + 1}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
            </tr>
          `;
          tbody.append(row);
        });
  
        // Add click event to rows
        $('#usersTable tbody tr').click(function () {
          const userId = $(this).data('id');
          showUserDetails(userId);
        });
      } catch (error) {
        console.error('Error fetching users:', error.response.data.message);
      }
    }
  
    // Show user details in modal
    async function showUserDetails(userId) {
      try {
        const response = await axios.get(`${apiBaseUrl}/${userId}`);
        const user = response.data;
  
        $('#modalName').text(user.name);
        $('#modalEmail').text(user.email);
  
        const userModal = new bootstrap.Modal($('#userModal'));
        userModal.show();
      } catch (error) {
        console.error('Error fetching user details:', error.response.data.message);
      }
    }
  
    // Initial fetch
    fetchUsers();
  });
  