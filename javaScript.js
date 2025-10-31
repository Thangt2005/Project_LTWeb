// --- Hiển thị / ẩn mật khẩu ---
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

if (togglePassword && passwordInput) {
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Đổi icon mắt
    togglePassword.innerHTML = type === 'password'
      ? '<i class="fa-solid fa-eye"></i>'
      : '<i class="fa-solid fa-eye-slash"></i>';
  });
}

// --- Xử lý đăng nhập bằng form ---
const loginForm = document.querySelector('#login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn form reload trang

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Thông tin đăng nhập mẫu (có thể thay bằng dữ liệu thật)
    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    // Kiểm tra thông tin đăng nhập
    if (email === correctEmail && password === correctPassword) {
      alert("✅ Đăng nhập thành công!");
      window.location.href = "home.html"; 
    } else {
      alert("❌ Sai email hoặc mật khẩu! Vui lòng thử lại.");
    }
  });
}

// --- Xử lý khi nhấn nút đăng nhập (demo) ---
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      alert("Đăng nhập thành công!");
    } else {
      alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    }
  });
}
