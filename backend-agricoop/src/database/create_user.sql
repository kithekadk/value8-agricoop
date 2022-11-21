CREATE OR ALTER PROCEDURE createUser (@firstname VARCHAR(200), @lastname VARCHAR(200),
@email VARCHAR(200) ,@password VARCHAR(200), @phonenumber VARCHAR(200))
AS
BEGIN
	IF EXISTS ( SELECT * FROM dbo.USERS WHERE email=@email)
		BEGIN
				RAISERROR('Email taken, use a different email', 11, 1);
				RETURN;
		END
	ELSE 
		BEGIN
				INSERT INTO dbo.USERS (firstname, lastname, email, password, phonenumber)
				VALUES (@firstname, @lastname, @email, @password, @phonenumber)
		END
END