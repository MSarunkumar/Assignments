/*............       For find the data    ...........*/
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

SELECT  COUNT(ntEmpid)AS Total_Employee,
        COUNT(DISTINCT(ntlevel)) AS Distict_ntLevel,
        MIN(moSalary)AS Minimum_Salary
FROM        tblemp;


/* query 2.
2. Correct this query:

    SELECT [ntEmpID], E.[vcName],tblEmp.[vcMobieNumer]
    FROM tblEmp E
        
*/

SELECT e.[ntEmpID], e.[vcName],e.[vcMobieNumer]
FROM   tblEmp e ;
 
  /* GOOD ONE */
SELECT [ntEmpID], [vcName],[vcMobieNumer]
FROM   tblEmp ;  

/* query 3.

 Write a single SELECT query which satisfies the following cONditiONs:
    a. If any employee does not have a phONe number then SELECT that employee if ntLevel  equal to 1
    b. else SELECT those employees whose ntLevel is equal to 0   
     
     */
	 
	 SELECT * FROM tblemp
	 where 1 = (
	         SELECT   
	           CASE   
	             WHEN  (ntlevel=1 AND vcMobieNumer IS NULL) THEN '1'
		         WHEN    ntlevel=0  THEN '1'
		       ELSE '0'
		      END)
		  
/* query 4. 
Write a sql query which displays those employee data first, who knows javAScript.
 ............  complete.....
 */
SELECT  * 
FROM     tblemp
ORDER BY (CASE
             WHEN vcskills LIKE '%JavAScript%' THEN ntLevel
             ELSE ntEmpID
            END);

/* query 6.
When I executed this query:
           
   SELECT [vcName],[vcMobieNumer] FROM [dbo].[tblEmp] GROUP BY [vcName]
           
    I got following error message:
    Column 'dbo.tblEmp.vcMobieNumer' is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause.

    Can you explain above error message? Write at least two possible solutions. 

...>>>>>    Group by clause work in grouping so mobile no. will not be group with same name.
            and this table have one to many relationship b\t name and mobile

.............     solutiON 1:........*/
SELECT  vcName 
FROM    tblEmp
GROUP BY  vcName ;
 
/*..........    solution 2  .............. */ 

SELECT vcMobieNumer 
FROM   tblemp 
GROUP BY  vcMobieNumer ; 

/*............. solution 3  ......................*/

SELECT    vcName ,COUNT(vcMobieNumer) AS total_mobiles 
FROM      tblemp  
GROUP BY  vcName; 



/* query 7.
Write a sql query to get the ntLevel of the employees getting salary greater than 
average salary. */

USE MyDataBASe;

SELECT  ntlevel, vcname      
FROM    tblemp 
WHERE   mosalary >(SELECT AVG(mosalary)
                   FROM   tblemp);

/*     Query 8.
Write a query to get the count of employees with a valid Suffix       * /

USE AdventureWorks2012_Data;
SELECT  COUNT(BusinessEntityID) AS total_valid_suffix_employee 
FROM    PersON.PersON 
WHERE   Suffix IS NOT NULL;

/*Query 9. 
Using BusinessEntityAddress table (AND other tables AS required), list the full name of people living in the state of Florida
*/

USE AdventureWorks2012_Data;

/*  first (complexity is more) solutiON */
SELECT  CONCAT(pp.FirstName,' ',pp.MiddleName,' ',pp.LAStName) AS Persons_live_in_Florida
FROM    PersON.PersON AS pp , PersON.BusinessEntityAddress AS pb , PersON.Address AS pa 
WHERE   (pa.AddressLine1 LIKE '%Florida%' AND 
         pp.BusinessEntityID=pb.BusinessEntityID AND 
             pb.AddressID= pa.AddressID );

 

/*   Second SolutiON  */
SELECT	CONCAT(pp.FirstName,' ',pp.MiddleName,' ',pp.LAStName) AS PersONs_live_in_Florida 
FROM		PersON.PersON AS pp 
WHERE       pp.BusinessEntityID IN (SELECT   pb.AddressID 
                                    FROM     PersON.BusinessEntityAddress AS pb
                                    WHERE    pb.BusinessEntityID IN 
								       (SELECT  pa.AddressID 
									    FROM    PersON.Address AS pa 
                                        WHERE pa.AddressLine1 LIKE  '%Florida%' ));


/*   THIRD SOLUTION  ,GOOD ONE    */

SELECT  CONCAT(pp.FirstName,' ',pp.MiddleName,' ',pp.LAStName) AS Persons_live_in_Florida
FROM    Person.Person AS pp INNER JOIN Person.BusinessEntityAddress AS pb 
ON      (pp.BusinessEntityID=pb.BusinessEntityID)
        INNER JOIN  Person.Address AS pa 
ON      (pb.AddressID= pa.AddressID) 
WHERE   (pa.AddressLine1 LIKE '%Florida%');


/* USED  TABLES ..................................................... 
select * from PersON.PersON
select * from Person.BusinessEntityAddress
select * from Person.Address;
*/
   
/* query 10.
10. For each order show the SalesOrderID AND SubTotal calculated two ways:
      A) FROM the SalesOrderHeader
      B) Sum of OrderQty*UnitPrice
         All above must be in 1 query.
		 */

       /*     I did not get the meaning of this QUESTION;    */ 

SELECT   ssh.SalesOrderID,ssh.SubTotal, (ssd.OrderQty*ssd.UnitPrice) AS ANSWER_B
FROM     Sales.SalesOrderHeader ssh, Sales.SalesOrderDetail ssd,Production.Product pp
WHERE    ssh.SalesOrderID = ssd.SalesOrderID AND pp.ProductID = ssd.ProductID
GROUP BY ssh.SalesOrderID;



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



/* USED  TABLES ..................................................... 
select * from Production.ProductDescription;
select * from Production.ProductModelProductDescriptionCulture where CultureID='fr';
select * from Production.Product where ProductID=736;*/


 
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


/* USED  TABLES .....................................................
 
select * from Sales.SalesOrderHeader  where CustomerID=635;
select * from sales.SalesOrderDetail ;
select * from Production.Product;         */

/* query 14.
 How many products in ProductSubCategory 'Cranksets' have been sold to an address in 'LONdON'?
*/



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


/* USED  TABLES ..................................................... 
select * from Sales.SalesOrderHeader;
select * from Sales.SalesOrderDetail;
select * from Production.ProductCategory;
select * from Person.Address;
select * from Production.Product;*/






/*...............  ***         END       ***  ..... */

/*  For finding the data           */
SELECT Table_Name, Column_Name 
FROM  INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_CATALOG = 'AdventureWorks2012_Data'
AND   Column_NAME LIKE 'Culture';
