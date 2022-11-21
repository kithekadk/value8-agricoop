CREATE OR ALTER PROCEDURE createRequest (@requestCreator VARCHAR(200), @productName VARCHAR(200),
@productPrice INT ,@productQuantity INT, @productCategory VARCHAR(200), @productUrl VARCHAR(200))
AS
BEGIN
	INSERT INTO dbo.FARMERREQUESTS (requestCreator, productName, productPrice, productQuantity, productCategory, productUrl)
	VALUES (@requestCreator, @productName, @productPrice, @productQuantity, @productCategory, @productUrl)
END