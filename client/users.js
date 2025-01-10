axios.get('http://localhost:5000/api/auth/users') 
  .then(response => {
    const users = response.data;
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';

    users.forEach((user, index) => {
      const row = document.createElement('tr');
      row.setAttribute('data-id', user._id); 

      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>Admin</td> <!-- Static value, can be dynamic based on user data -->
        <td><span class="badge bg-success">Active</span></td>
      `;

      row.addEventListener('click', () => {
        document.getElementById('modalUserName').innerText = user.name;
        document.getElementById('modalUserEmail').innerText = user.email;
        document.getElementById('modalUserRole').innerText = 'Admin'; 
        document.getElementById('modalUserStatus').innerText = 'Active'; 

        const userModal = new bootstrap.Modal(document.getElementById('userDetailsModal'));
        userModal.show();
      });

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });