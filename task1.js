// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const users = await response.json();
  
      renderUserList(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  
  function renderUserList(users) {
    const usersList = document.querySelector('ul.usersList');
  
    usersList.innerHTML = '';
  
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name; 
      usersList.appendChild(listItem);
    });
  }
  
  fetchUsers();

  