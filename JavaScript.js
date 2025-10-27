document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn reload trang

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Kiểm tra trống
        if (email === "" || password === "") {
            alert("Vui lòng nhập đầy đủ Email và Mật khẩu!");
            return;
        }

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Email không hợp lệ! Vui lòng nhập đúng định dạng (ví dụ: ten@gmail.com)");
            return;
        }

        // Kiểm tra độ dài mật khẩu
        if (password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        // Nếu hợp lệ → xử lý đăng nhập (giả lập)
        if (email === "admin@gmail.com" && password === "123456") {
            alert("Đăng nhập thành công!");
            window.location.href = "home.html"; // Chuyển trang sau khi login 
            alert("Sai Email hoặc Mật khẩu!");
        }
    });
});
