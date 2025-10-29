// --- Hiển thị / ẩn mật khẩu ---
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Đổi icon mắt
  togglePassword.innerHTML = type === 'password'
    ? '<i class="fa-solid fa-eye"></i>'
    : '<i class="fa-solid fa-eye-slash"></i>';
});

// --- Xử lý đăng nhập ---
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Ngăn form reload trang

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  // Thông tin đăng nhập mẫu (bạn có thể thay bằng dữ liệu thật)
  const correctEmail = "admin@gmail.com";
  const correctPassword = "123456";

  // Kiểm tra thông tin đăng nhập
  if (email === correctEmail && password === correctPassword) {
    alert("✅ Đăng nhập thành công!");
    // Chuyển hướng đến trang chính sau khi đăng nhập
    window.location.href = "home.html"; 
  } else {
    alert("❌ Sai email hoặc mật khẩu! Vui lòng thử lại.");
  }
});
