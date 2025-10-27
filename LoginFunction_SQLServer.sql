-- SQL SCRIPT: Đăng nhập người dùng
-- Database: QLDangNhap

-- 1️ Tạo cơ sở dữ liệu
CREATE DATABASE QLDangNhap;
GO

-- 2️ Sử dụng cơ sở dữ liệu
USE QLDangNhap;
GO

-- 3️ Tạo bảng Users
CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    password NVARCHAR(100) NOT NULL
);
GO

-- 4️ Thêm dữ liệu mẫu
INSERT INTO Users (username, email, password) VALUES
(N'admin', N'tranhuuthang592@gmail.com', N'Thang2005@'),
(N'test1', N'minhnguyen823@example.com', N'Minh@2024!'),
(N'test2', N'hoangtruc456@example.com', N'Truc#1999');
GO

-- 5️Tạo Stored Procedure: sp_LoginUser
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
    @email = N'tranhuuthang592@gmail.com', 
    @password = N'Thang2005@';
GO
