const userList = document.getElementById('user-list');
const searchInput = document.getElementById('search');
let users = [];

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

function renderUsers(usersToRender) {
  userList.innerHTML = '';
  usersToRender.forEach((user) => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p>`;
    userList.appendChild(card);
  });
}

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );
  renderUsers(filteredUsers);
});

fetchUsers();