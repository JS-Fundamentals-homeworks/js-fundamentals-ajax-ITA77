// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
// Функція для отримання даних про користувачів
async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Fetched users:', data); 
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
  
  async function findUserByName(userName) {
    const users = await fetchUsers();
  
    return users.find(user => user.name.trim().toLowerCase() === userName.trim().toLowerCase()) || null;
  }
  
  async function handleGetUserCity() {
    const userNameInput = document.querySelector('#userNameInput').value.trim();
  
    if (!userNameInput) {
      alert('Please enter a user name.');
      return;
    }
  
    const user = await findUserByName(userNameInput);
  
    const userCityElement = document.querySelector('#userCity');
    if (user && user.address && user.address.city) {
      userCityElement.textContent = `${user.address.city}`;
    } else {
      userCityElement.textContent = 'User not found or city information unavailable.';
    }
  }
  
  document.querySelector('#getUserButton').addEventListener('click', handleGetUserCity);
  