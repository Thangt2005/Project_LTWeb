// Ẩn / hiện mật khẩu khi nhấn biểu tượng 👁️
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
}

// Xử lý khi nhấn nút đăng nhập (demo)
document.getElementById("login-btn").addEventListener("click",function (){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
        alert("Đăng nhập thành công!");
    } else {
        alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    }

});
