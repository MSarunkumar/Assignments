/* For find the data*/
SELECT Table_Name, Column_Name 
FROM  INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_CATALOG = 'AdventureWorks2012_Data'
AND   COLUMN_NAME LIKE 'ProductSubCategory';

/* query 1.
  1. Write a single sql query with following informatiON's:

a. Total number number of employees
b. Minimum salary received by any employees.
c. Total distinct ntLevel

*/

SELECT COUNT(ntEmpid)AS Total_Employee,
       COUNT(DISTINCT(ntlevel)) AS Distict_ntLevel,
       MIN(moSalary)AS Minimum_Salary
FROM tblemp;


/* query 2.
2. Correct this query:

    SELECT [ntEmpID], E.[vcName],tblEmp.[vcMobieNumer]
    FROM tblEmp E
        
*/

SELECT [ntEmpID], tblemp.[vcName],tblEmp.[vcMobieNumer]
    FROM tblEmp ;
 
  /* OR  */

  SELECT [ntEmpID], E.[vcName],E.[vcMobieNumer]
    FROM tblEmp E;  

/* query 3.

 Write a single SELECT query which satisfies the following cONditiONs:
    a. If any employee does not have a phONe number then SELECT that employee if ntLevel  equal to 1
    b. else SELECT those employees whose ntLevel is equal to 0   
     
     */
	 
	IF((SELECT vcMobieNumer FROM tblEmp WHERE vcMobieNumer is NULL 
	   AND  ntlevel=1) is NULL )
	  SELECT * FROM tblemp WHERE vcMobieNumer is NULL AND  ntlevel=1 ;
	 ELSE 
	      SELECT *  FROM tblemp WHERE ntlevel=0;
	  
/* query 4. 
Write a sql query which displays those employee data first, who knows javAScript.
 ............  complete.....
 */
SELECT  * 
FROM    tblemp 
WHERE   vcskills LIKE '%JavAScript%' 
UNION 
SELECT  * 
FROM    tblemp 
WHERE   vcskills not LIKE '%JavAScript%' ;


/* query 6.
Group by clause work in grouping so mobile no. will not group with same name.

solutiON 1:*/

SELECT vcName, vcMobieNumer 
FROM tblemp 
WHERE  vcname in (
                   SELECT   vcname 
                   FROM     tblemp 
                   GROUP BY vcName);



/* query 7.
Write a sql query to get the ntLevel of the employees getting salary greater than 
average salary. */

use MyDataBASe;

SELECT  ntlevel, vcname 
FROM    tblemp 
WHERE   mosalary >(SELECT AVG(mosalary)FROM tblemp);

/*     Query 8.
Write a query to get the count of employees with a valid Suffix */

use AdventureWorks2012_Data;
SELECT  COUNT(*) AS total_valid_suffix_employee 
FROM    PersON.PersON 
WHERE   Suffix is not NULL;

/*Query 9. 
Using BusinessEntityAddress table (AND other tables AS required), list the full name of people living in the state of Florida
*/
use AdventureWorks2012_Data;

/*  first (complexity is more) solutiON */
use AdventureWorks2012_Data;
SELECT  pp.FirstName+' '+pp.MiddleName+' '+pp.LAStName AS PersONs_live_in_Florida
FROM    Person.Person AS pp , Person.BusinessEntityAddress AS pb, Person.Address AS pa 
WHERE   (pa.AddressLine1 LIKE '%Florida%' AND 
         pp.BusinessEntityID=pb.BusinessEntityID AND 
             pb.AddressID= pa.AddressID );



/*   (Best) SolutiON  */
SELECT		pp.FirstName+' '+pp.MiddleName+' '+pp.LAStName AS PersONs_live_in_Florida 
FROM		PersON.PersON AS pp 
WHERE       pp.BusinessEntityID in (SELECT  pb.AddressID 
                                    FROM    Person.BusinessEntityAddress AS pb
                                    WHERE   pb.BusinessEntityID in 
								       (SELECT  pa.AddressID 
									FROM    PersON.Address AS pa 
                                                                        WHERE   pa.AddressLine1 LIKE  '%Florida%' ));


   
/* query 10.
10. For each order show the SalesOrderID AND SubTotal calculated two ways:
      A) FROM the SalesOrderHeader
      B) Sum of OrderQty*UnitPrice
         All above must be in 1 query.
		 */
     I did not get the meaning of this query; 


/* query 11
 "Single Item Order" is a customer order WHERE ONly ONe item is ordered. Show the SalesOrderID AND the UnitPrice for every Single Item Order.
*/

SELECT  SalesOrderID, UnitPrice 
FROM    Sales.SalesOrderDetail
WHERE   OrderQty=1 ;




/*query 12
Show the product descriptiON for culture 'fr' for product with ProductID 736.
*/
SELECT  ppd.DescriptiON AS descriptiON_for_culture_fr_AND_ProductID_736
FROM    Production.ProductDescription AS ppd 
        INNER JOIN Production.ProductModelProductDescriptionCulture AS ppmc
ON      (ppmc.ProductDescriptionid = ppd.ProductDescriptionid) 
        INNER JOIN Production.Product AS pp 
ON      (pp.ProductModelID = ppmc.ProductModelID)
WHERE   (ppmc.cultureID = 'fr' AND pp.ProductID = 736);

select * from Production.ProductDescription;
select * from Production.ProductModelProductDescriptionCulture where CultureID='fr';
select * from Production.Product where ProductID=736;
 
/* query 13
    Show OrderQty, the Name AND the ListPrice of the order made by CustomerID 635
*/
SELECT  ssd.OrderQty, pp.Name, pp.ListPrice
FROM    Sales.SalesOrderHeader AS ssh
        INNER JOIN Sales.SalesOrderDetail AS ssd
ON      (ssd.SalesOrderID = ssh.SalesOrderID)
        INNER JOIN Production.Product AS pp
ON      (ssd.ProductID=pp.ProductID)
WHERE   ssh.CustomerID=635;

select * from Sales.SalesOrderHeader  where CustomerID=635;
select * from sales.SalesOrderDetail ;
select * from Production.Product;

/* query 14.
 How many products in ProductSubCategory 'Cranksets' have been sold to an address in 'LONdON'?
*/
/*............ .......*/


SELECT  COUNT(ssd.ProductID) AS total_Cranksets_sold_in_London
FROM    Sales.SalesOrderHeader AS ssh 
        INNER JOIN Person.Address AS  pa
ON      (pa.AddressID = ssh.ShipToAddressID) 
        INNER JOIN Sales.SalesOrderDetail ssd 
ON      (ssd.SalesOrderID=ssh.SalesOrderID)
        INNER JOIN Production.Product pp 
ON      (pp.ProductID = ssd.ProductID)
        INNER JOIN Production.ProductCategory ppc 
ON      (ppc.ProductCategoryID = pp.ProductSubcategoryID)
WHERE   (pa.City = 'London' AND ppc.Name = 'Cranksets');

select * from Sales.SalesOrderHeader;
select * from Sales.SalesOrderDetail;
select * from Production.ProductCategory;
select * from Person.Address;






/*..........................................................*/



/*  For finding the data           */
SELECT Table_Name, Column_Name 
FROM  INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_CATALOG = 'AdventureWorks2012_Data'
AND   Column_NAME LIKE 'Culture';
