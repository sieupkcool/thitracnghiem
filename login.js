const loginForm = document.querySelector('.login form');
const registerForm = document.querySelector('.register form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = loginForm.querySelector('input[name="username"]').value;
  const password = loginForm.querySelector('input[name="password"]').value;

  // Kiểm tra tính hợp lệ của thông tin đăng nhập
  // ... (gọi API backend để kiểm tra đăng nhập) ...

  // Hiển thị thông báo đăng nhập thành công
  alert('Đăng nhập thành công!');
})


// Chuyển trang
document.getElementById('register').addEventListener('click', (event) => {
    var login = document.querySelector('.login');
    var register = document.querySelector('.register');
    login.style.display = 'none';
    register.style.display = 'block';
});

document.getElementById('login').addEventListener('click', (event) => {
    var register = document.querySelector('.register');
    var login = document.querySelector('.login');
    register.style.display = 'none'
    login.style.display = 'block';
})