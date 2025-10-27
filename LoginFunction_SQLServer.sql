-- =========================================
-- SQL SCRIPT: Đăng nhập người dùng
-- Database: QLDangNhap
-- =========================================

-- 1️⃣ Tạo cơ sở dữ liệu
CREATE DATABASE QLDangNhap;
GO

-- 2️⃣ Sử dụng cơ sở dữ liệu
USE QLDangNhap;
GO

-- 3️⃣ Tạo bảng Users
CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    password NVARCHAR(100) NOT NULL
);
GO

-- 4️⃣ Thêm dữ liệu mẫu
INSERT INTO Users (username, email, password) VALUES
(N'admin', N'admin@gmail.com', N'admin123'),
(N'test1', N'test1@gmail.com', N'123456'),
(N'test2', N'test2@gmail.com', N'abc123');
GO

-- 5️⃣ Tạo Stored Procedure: sp_LoginUser
CREATE PROCEDURE sp_LoginUser
    @username NVARCHAR(50),
    @email NVARCHAR(100),
    @password NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    IF EXISTS (
        SELECT 1 FROM Users
        WHERE username = @username AND email = @email AND password = @password
    )
    BEGIN
        SELECT 'Đăng nhập thành công!' AS Message, 1 AS Status;
    END
    ELSE
    BEGIN
        SELECT 'Sai tên đăng nhập hoặc mật khẩu!' AS Message, 0 AS Status;
    END
END;
GO

-- 6️⃣ Kiểm tra thử
EXEC sp_LoginUser 
    @username = N'admin', 
    @email = N'admin@gmail.com', 
    @password = N'admin123';
GO
