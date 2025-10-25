function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "🙈"; // đổi biểu tượng khi hiện
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "👁️"; // đổi lại khi ẩn
  }
}

// Hàm kiểm tra định dạng email hợp lệ
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Bắt sự kiện khi nhấn nút "ĐĂNG NHẬP"
document.querySelector(".login-btn").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Kiểm tra trống
  if (email === "" || password === "") {
    alert("❌ Vui lòng nhập đầy đủ E-mail và mật khẩu!");
    return;
  }

  // Kiểm tra định dạng email
  if (!isValidEmail(email)) {
    alert("⚠️ Địa chỉ E-mail không hợp lệ!");
    return;
  }

  // Giả lập tài khoản đúng (bạn có thể thay bằng kiểm tra từ backend sau này)
  const correctEmail = "admin@example.com";
  const correctPassword = "123456";

  if (email === correctEmail && password === correctPassword) {
    alert("✅ Đăng nhập thành công!");
  } else {
    alert("❌ Đăng nhập không thành công! Vui lòng kiểm tra lại email hoặc mật khẩu.");
  }
});
