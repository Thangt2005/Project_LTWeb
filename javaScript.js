// Ẩn / hiện mật khẩu khi nhấn biểu tượng 👁️
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
}

// Xử lý khi nhấn nút đăng nhập (demo)
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn trang reload

  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !username || !password) {
    alert('Vui lòng điền đầy đủ thông tin.');
  } else {
    alert(`Chào mừng ${username}!`);
  }
});
