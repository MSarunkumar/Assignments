/* find data*/
SELECT Table_Name, Column_Name 
FROM  INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_CATALOG = 'AdventureWorks2012_Data'
AND   COLUMN_NAME LIKE '%OrderQty%'


/* query 1.
  1. Write a single sql query with following information's:

a. Total number number of employees
b. Minimum salary received by any employees.
c. Total distinct ntLevel

*/

select COUNT(ntEmpid)as Total_Employee,
       count(distinct(ntlevel)) as Distict_ntLevel,
       min(moSalary)as Minimum_Salary
from tblemp;


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

 Write a single select query which satisfies the following conditions:
    a. If any employee does not have a phone number then select that employee if ntLevel  equal to 1
    b. else select those employees whose ntLevel is equal to 0   
     
     */
	 
	if((select vcMobieNumer from tblEmp where vcMobieNumer is NULL 
	   and  ntlevel=1) is NULL )
	  select * from tblemp where vcMobieNumer is NULL and  ntlevel=1 ;
	 else 
	      select *  from tblemp where ntlevel=0;
	  
/* query 4. 
Write a sql query which displays those employee data first, who knows javascript.
 ............ not complete.....
 */
SELECT  * 
FROM    tblemp 
WHERE   vcskills like '%JavaScript%' 
union 
SELECT  * 
FROM    tblemp;


/* query 6.
Group by clause work in grouping so mobile no. will not group with same name.

solution 1:*/

SELECT vcName, vcMobieNumer 
FROM tblemp 
where  vcname in (
                   select   vcname 
                   from     tblemp 
                   GROUP BY vcName);


/* query 7.
Write a sql query to get the ntLevel of the employees getting salary greater than 
average salary. */

use MyDataBase;

SELECT  ntlevel, vcname 
from    tblemp 
where   mosalary >(select AVG(mosalary)from tblemp);

/*     Query 8.
Write a query to get the count of employees with a valid Suffix */

use AdventureWorks2012_Data;
select  COUNT(*) as total_valid_suffix_employee 
from    Person.Person 
where   Suffix is not NULL;

/*Query 9. 
Using BusinessEntityAddress table (and other tables as required), list the full name of people living in the state of Florida
*/
use AdventureWorks2012_Data;

/*  first solution */
select pp.FirstName+' '+pp.MiddleName+' '+pp.LastName as Persons_live_in_Florida
from Person.Person as pp , Person.BusinessEntityAddress as pb
   , Person.Address as pa 
    where  ( pa.AddressLine1 like '%Florida%' and 
             pp.BusinessEntityID=pb.BusinessEntityID and 
             pb.AddressID= pa.AddressID );*/

/* second solution */
use AdventureWorks2012_Data;
  select  pp.FirstName+' '+pp.MiddleName+' '+pp.LastName as Persons_live_in_Florida from Person.Person as pp where
  pp.BusinessEntityID=(select top(1) pb.AddressID from  Person.BusinessEntityAddress as pb
   where pb.BusinessEntityID=(select top(1) pa.AddressID from Person.Address as pa 
    where pa.AddressLine1 like  '%Florida%' ));
   
/* query 10.
10. For each order show the SalesOrderID and SubTotal calculated two ways:
      A) From the SalesOrderHeader
      B) Sum of OrderQty*UnitPrice
         All above must be in 1 query.
		 */
		I did not get the meaning of this query;
/* query 11
 "Single Item Order" is a customer order where only one item is ordered. Show the SalesOrderID and the UnitPrice for every Single Item Order.
*/

select SalesOrderID,UnitPrice
from   customer_order
where ordered= "Single Item Order" ;


/*query 12
Show the product description for culture 'fr' for product with ProductID 736.
*/
 select description 
 from product
 where (culture='fr' and ProductID=736);

/* query 13
    Show OrderQty, the Name and the ListPrice of the order made by CustomerID 635
*/
I could not find table;

select * from Production.Product;
select * from Production.ProductListPriceHistory;
select * from Purchasing.PurchaseOrderDetail;
/* query 14.
 How many products in ProductSubCategory 'Cranksets' have been sold to an address in 'London'?
*/
select count(*) as total_Cranksets_in_london 
from ProductSubCategory
where (products='Cranksets' and address='London');





         


