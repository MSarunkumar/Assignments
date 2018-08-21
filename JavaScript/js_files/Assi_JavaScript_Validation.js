     var result;
	  var Valid=false;
	  var password='';
    /*   function formValidation() 
         {
              
                  var firstname     =document.getElementById("fname");
                  var lastname      =document.getElementById('lname');
                  var email         =document.getElementById("email").value;
                  var password      =document.getElementById('password');
                  var cpassword     =document.getElementById('cpassword');
                  var genders       =document.getElementsByName("gender");
                  var mobile1       =document.getElementById('mob1');
                  var mobile2       =document.getElementById('mob2');
                  var address1      =document.getElementById("addr1");
                  var address2      =document.getElementById("addr2");
                  var City1         =document.getElementById("city");
                  var state         =document.getElementById("selects");
                  var country       =document.getElementById('selectc');
                  var subscribes    =document.getElementsByName('subscribe');
				  if(Valid==true) return true;
				  else            return false;
				  
		 } 
                   
//...................................................           first name Validation 
     
	 /*   function firstNameValid()
            {
				
			       var firstname=document.getElementById("fname").value;
			       var reg = (/[@|#|!|$|%|^|*|(|)|-|=|_|&|.|<|>|?|:|;|'|"]/g);
			      
			     if(firstname =="")
                  {  
                         ShowError("fid",' Please Enter the your first name.   ');
                         Valid=false;
                    }
					
				 else if(firstname.trim()=='')
				   { 
				         ShowError("fid", '  Please Don`t Enter spaces.    ');	
				         Valid=false;
				   }
				
				 else if((/[0-9]/.exec(firstname))!=null ){
                         ShowError("fid", 'Please Don`t Enter digit in first name.   ');	   
                         Valid=false;				 			
				    }
			     else if((firstname).match(reg)!=null ){
                         ShowError("fid" ,'     Please Don`t Enter special character in first name.    ');	   
                         Valid=false;				 			
				    }
				 else if(firstname.length<3 || firstname.value.length>25){
					     ShowError("fid" ,'  Please Enter your first name in [2-25] lenght ');
				         Valid=false;
					 }
				 else if(getSpace(firstname)> 0)
				 {
					     ShowError("fid" ,'  Please Don`t Enter any spaces in First name  ');
				         Valid=false;
				     }
				 else{
					  document.getElementById("fid").innerHTML='';
				          Valid=true;
						  }
				
			}
			
//...................................................           last name Validation 
      
	  function lastNameValid()
            { 
			      var lastname=document.getElementById("lname");
			      var reg=(/[@|#|!|$|%|^|*|(|)|-|=|_|&|.|<|>|?|:|;|'|"]/g);
			      
			     if(lastname.value =="")
                  {  
                         ShowError("lid",' Please Enter the your last name.   ');
                         Valid=false;
                    }
					
				 else if(lastname.value.trim()=='')
				   { 
				         ShowError("lid", '  Please Don`t Enter spaces in last name    ');	
				         Valid=false;
				   }
				
				 else if((/[0-9]/.exec(lastname.value))!=null ){
                         ShowError("lid", 'Please Don`t Enter digit in last name.   ');	   
                         Valid=false;				 			
				    }
			     else if((lastname.value).match(reg)!=null ){
                         ShowError("lid" ,'     Please Don`t Enter special character in last name.    ');	   
                         Valid=false;				 			
				    }
				 else if(lastname.value.length<3 || lastname.value.length>25){
					     ShowError("lid" ,'  Please Enter your last name in [2-25] length ');
				         Valid=false;
					 }
				 else if(getSpace(lastname.value)>0)
				 {
					     ShowError("lid" ,'  Please Don`t Enter any spaces in last name  ');
				         Valid=false;
				     }
				 else{
					  document.getElementById("lid").innerHTML='';
				          Valid=true;}
				
				
			}   
//......................................................................................Email Validation 
      function emailValid()
	  {
		  
		       var email =document.getElementById("email").value;
		      // var reg=/[a-z0-9A-Z]/g/;
		       var regcopy=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
               
			   if(email == ""){
                  ShowError("eid" ," Please Enter the your Email ");
                    Valid=false;
                    }

                else if(getSpace(email)>0) {
					ShowError("eid" ," Please Don`t Enter spaces in Email ");
                    Valid=false;
				}
				 else if(email.length< 5 ) {
					ShowError("eid" ," Please Enter some more charecter in Email ");
                    Valid=false;
				}
				else if(email.length>50)
				{
					ShowError("eid" ," Please Enter less than 50  charecter in Email ");
					 Valid=false;
				 }
				
				
                     
   }
//...........................................................................        password Validation 
  */function passwordValid()
      {
	       password  =document.getElementById('password').value;
		  //var reg=/[a-z0-9A-Z!@#$%^&*()_+=<>.,?;:'"]/g/;   
			var regCopy=  /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;  
			 
			   if(password== '')
			  {
				   ShowError("pid" , " Please Enter the password ");
                   Valid= false;
				}
			  else if(password.length < 8)
              {
                 ShowError("pid" , "Password Lenght should be minimum 8 characters ");
                  Valid= false;
              }
			   else if(password.length > 15)
              {
                 ShowError("pid" , "Password Lenght should be maximum 15 characters ");
                  Valid= false;
              }
			  
			  else if(!(regCopy.test(password)))
			  {  
		            ShowError("pid" , "Password must be contain 1 lowercase 1 uppercase 1 digit 1 special char");
                    Valid= false;
				 }
			   else 
			   {
				   document.getElementById("pid").innerHTML='';
				          Valid=true;
						  }   
               
	   }

//.....................................................................  confirm - password 	   

     /*   function cpasswordValid()
         {
           var cpassword =document.getElementById('cpassword').value;
				  
			if(password != cpassword)
              {
                 ShowError("cpid","  The Confirm-Password did not match  ");
                 Valid=false;
              } 
              				 
		 }
			  
			 
	  
			  
			  
			  
			  
  

             
  } 
//...................................................................................... gender Validation
    /* function genderValid(){           
		   if (! (genders[0].checked || genders[1].checked|| genders[2].checked) ) {
                  alert("!!!...   Select at least one gender   ...!!!");
                  return false;
               }
	 }*/
//.......................................................................................  mobile1 Validation
  /*             function mobile1Valid()
			    {
				    // alert('hii   la la la');
					 
					var mobile1 =document.getElementById('mob1').value;
					//var reg=/   /;
					
					
                    if(mobile1 === ""){
                        ShowError("mid1"," Please enter the Contact number  ");
                           Valid= false;
                             }
                         
                     else if(mobile1.length != 10)
                        {
                           ShowError("mid1","  Please  Enter 10 digits  "); 
                            Valid= false;
                        }
                    

                     else if(isNaN(mobile1))
                      {   ShowError("mid1","   Please enter only digits   ");
                          Valid=false;
                         }
					 else if(mobile1=='0000000000')
					 {
						ShowError("mid1","   Please Enter Valid phone number    ");
					    Valid=false;
					 }						
					 else 
					 {
						  document.getElementById("mid1").innerHTML='';
				          Valid=true;}
						  
						 
				}   
//.......................................................................................  mobile2 Validation
           



		     function mobile2Valid(){
				  
				   var mobile2   =document.getElementById('mob2').value;
			
                   if(mobile2 != "")
				       {
                       
					   if( isNaN(mobile2))
                            {    ShowError("mid2" ,"   Please enter only digits in phone number  mobile 2 ");
                              Valid=false;
                             }
					     
                    

                          else if(mobile2.length!=10)
                         {
                             ShowError("mid2", " Enter only 10 digits in Phone number 2 "); 
                             Valid =false;
                           }
						    else if(mobile2=='0000000000')
					            {
						                ShowError("mid2","   Please Enter Valid phone number 2   ");
					                   Valid=false;
					                   }			
					      else 
					        {
						      document.getElementById("mid2").innerHTML='';
				              Valid=true;}
	                    }
			  }             
//............................................................................................................address 1
                /*  function address1Valid(){
				   if(address1.value== "")
                       {
                        alert("!!!... You have to enter address  - can`t vacant... ok");
                        return false;
                       }
				  }
//............................................................................................................address 2
                   function address2Valid(){                     
					 if(isNaN(address2.value))
                       {
                        alert("!!!...  address 2 can`t be only digit  -  ok");
                        return false;
                       }
				   }
//............................................................................................................city
                       function cityValid(){

					 if(City1.value== "")
                       {
                        alert("!!!... You have to enter city  - can`t vacant... ok");
                        return false;
                       }
					   }
//............................................................................................................state 
//.............................................................................................................country
//........................................................................................subscribe New
                    
                      if ( (subscribes[0].checked==false && subscribes[1].checked==false) ) {
                              alert("!!!... Do you want to subscribe or not ?  check one ...!!!");
                           return false;
                       }
//.......................................................................................................................capcha

           if(result == document.getElementById("result").value) {
                  alert("!!!   you are not  robot, so Form is going to submit.....ok   !!!");
                    return  true;
                 } 


           if(document.getElementById("result").value=='')
              {
                 alert("!!!... Enter the result of captcha value  ...!!!");
                 return false ;
                }
                  
             if(result != document.getElementById("result").value)
               {
                  
                 alert("@@@    you are robot. pakade gye    @@@");
                 return false;
                 }
             
        

//...........   It is genrating two numbers, operand and calling  calc fuction get a actual result of captcha 
		
function refresh()
  {
               var numberOne = parseInt(Math.floor(Math.random() * 10));
               var numberTwo = parseInt(Math.floor(Math.random() * 10));
               var  operands = parseInt(Math.floor(Math.random() * 10)%4);
               var arr=['-','+','*','/'];
                var op=  arr[operands];

               document.getElementById("num1").innerHTML=numberOne;
               document.getElementById("num2").innerHTML=numberTwo;
               document.getElementById("operand").innerHTML=op;
              result=Math.floor(calc(numberOne,numberTwo,op));
             

      }
	  
 //.......    It will performe calculation (two number and operands ) and return result.
 
 
function calc(firstnumber,lastnumber,opration){
            var result1;
            firstnumber = parseInt(firstnumber);
            lastnumber = parseInt(lastnumber);
         
switch(opration) {
    
    case "-":
          result1 = firstnumber - lastnumber;
          break;
    case "+":
          result1 = firstnumber + lastnumber;
          break;
    case "*":
          result1 = firstnumber * lastnumber;
          break;
    case "/":
          result1 = firstnumber / lastnumber;
          break;  
    default:
          result1= "No opration is enterd";
          break;
       }

    return(result1);
   }
   */
   
   //.......   It will return total no of spaces present in String 
   function getSpace(str)
   {
	   var count=parseInt(0);
	   for(var i=0;i< str.length;i=i+1)
	   {
		   if(str[i]==' ')
			   count=count+1;
	   }
        return count;	   
	   
   }
   
   //.............  ShowError(id,msg)
         function ShowError(ids,msg)
		 {
			  document.getElementById(ids).innerHTML= msg; 
		 }
   //................ check password formate return true if currect else return false             			 
		 
   
//................................................................................................................
  
