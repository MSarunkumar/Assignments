       
$(document).ready(function() {
   

   
     	   var result;
	      var Valid=false;
	      var password='';
	      var flag_Password=0;
		  var f_Valid=false;
		  var l_Valid=false;
		  var e_Valid=false;
		  var p_Valid=false;
		  var cp_Valid=false;
		  var m1_Valid=false;
		  var m2_Valid=true;
		  var a1_Valid=false;
		  var a2_Valid=true;
		  var c_Valid=false;
		  var ca_Valid=false;
	//.............................................    Blur event trigger	  
		  
	$('#fname').blur(function (){
		firstNameValid();
	});  
	$('#lname').blur(function (){
		lastNameValid();
	});  
	$('#email').blur(function (){
		emailValid();
	}); 
	$('#password').blur(function (){
		passwordValid()
	}); 
	$('#cpassword').blur(function (){
		cpasswordValid()
	}); 
	$('#mob1').blur(function (){
		mobile1Valid()
	}); 
	$('#mob2').blur(function (){
		mobile2Valid()
	}); 
	$('#addr1').blur(function (){
		address1Valid();
	}); 
	$('#addr2').blur(function (){
		address2Valid();
	}); 
     $('#city').blur(function (){
	     cityValid();   
	}); 
	$('#User_result').blur(function (){
	    captchaValid();	
	}); 
	$('#rid').click(function (){
	    refresh();
	}); 
	
	//refresh();
    
	$('#subid').submit(function (){
	    formValidation();
	});
		  
    function formValidation() 
         {
			    alert('fjgdjf');
            /*      var genders       =$("gender");
                  var state         =$("#stt");
                  var country       =$('#ctt');
                  var subscribes    =$('subscribe');
				  
				  
		            if(f_Valid==false)
					  {
					     ShowError("#fid",' Please Fix the your first name.   ');
						 return false;}
                     else if(l_Valid== false)
					   {
                        ShowError("#lid",' Please Fix the your last name.   ');
				      	 return false;	}

                      else if(e_Valid==false)
					     { ShowError("#eid" ," Please Fix the your Email ");
                                return false;
					        }
				      else if(p_Valid==false)
					     { ShowError("#pid" ," Please Fix the your Password ");
                                return false;
					        }
				      else if(cp_Valid==false)
					   { ShowError("#cpid" ," Please Fix the your confirm-password ");
                                return false;
					        }
					 else if (!(genders[0].checked || genders[1].checked|| genders[2].checked) ) {
                        ShowError("#gid"," Please select gender  ");
				           return false;
                         }
                      else if(m1_Valid==false)
					   { ShowError("#mid1" ," Please Fix the your phone 1 ");
                                return false;
					        }					
                      else if(m2_Valid==false)
					   { ShowError("#mid2" ," Please Fix the your phone 2 ");
                                return false;
					        }
                      else if(a1_Valid==false)
					     { ShowError("#aid1" ," Please Fix the your address 1 ");
                                return false;
					        }
                      else if(a2_Valid==false)
					     { ShowError("#aid2" ," Please Fix the your address 2");
                                return false;
					        }									
                      else if(c_Valid==false)
					      { ShowError("#cid" ," Please Fix the your city");
                                return false;
					        } 
					 else if (state.options[state.selectedIndex].text=='Choose One')
					     {
						 ShowError("#stid" ," Please select the your state");
						 return false;}
						
						 
				     else if (country.options[country.selectedIndex].text=='Choose One')
					     {
						 ShowError("#coid" ," Please select the your country");
						 return false;} 
						 
					     
						 else if ( (subscribes[0].checked==false && subscribes[1].checked==false) ) {
                             ShowError("#sid"," Do you want to subscribe or not  ");
                            return false; 
                             }
					else if(ca_Valid==false)
					     { ShowError("#captcha_id" ," Please Fix the your captcha");
                                return false;
					        }
					
					else 
					{
						confirm(" Form is going to submit ..Okay ");
						   return true;
					}*/
        } 
                   
//...................................................                                     first name Validation 
     
	   function firstNameValid()
            {
				    
			       var firstname= $("#fname").val();
				   var reg = (/[@|#|!|$|%|^|*|(|)|-|=|_|&|.|<|>|?|:|;|'|"]/g);
			      
			     if(firstname =="")
                  {  
			           
                         ShowError("#fid",' Please Enter your first name.   ');
                         f_Valid=false;
                    }
					
				 else if(firstname.trim()=='')
				   { 
				         ShowError("#fid", '  Please Don`t Enter spaces.    ');	
				         f_Valid=false;
				   }
				
				 else if((/[0-9]/.exec(firstname))!=null ){
                         ShowError("#fid", 'Please Don`t Enter digit in first name.   ');	   
                         f_Valid=false;				 			
				    }
			     else if((firstname).match(reg)!=null ){
                         ShowError("#fid" ,'     Please Don`t Enter special character in first name.    ');	   
                         f_Valid=false;				 			
				    }
				 else if(firstname.length <2 || firstname.length>25){
					     ShowError("#fid" ,'  Please Enter your first name in [2-25] lenght ');
				         f_Valid=false;
					 }
				 else if(getSpace(firstname)> 0)
				 {
					     ShowError("#fid" ,'  Please Don`t Enter any spaces in First name  ');
				         f_Valid=false;
				     }
				 else{
					
					  $("#fid").html('');
				          f_Valid=true;
						  }
				
			}
//...................................................                                      last name Validation 
      
	      function lastNameValid()
            { 
			      var lastname=$("#lname").val();
			      var reg=(/[@|#|!|$|%|^|*|(|)|-|=|_|&|.|<|>|?|:|;|'|"]/g);
			      
			     if(lastname =="")
                  {  
                         ShowError("#lid",' Please Enter the your last name.   ');
                         l_Valid=false;
                    }
					
				 else if(lastname.trim()=='')
				   { 
				         ShowError("#lid", '  Please Don`t Enter spaces in last name    ');	
				         l_Valid=false;
				   }
				
				 else if((/[0-9]/.exec(lastname))!=null ){
                         ShowError("#lid", 'Please Don`t Enter digit in last name.   ');	   
                         l_Valid=false;				 			
				    }
			     else if((lastname).match(reg)!=null ){
                         ShowError("#lid" ,'     Please Don`t Enter special character in last name.    ');	   
                         l_Valid=false;				 			
				    }
				 else if(lastname.length<3 || lastname.length>25){
					     ShowError("#lid" ,'  Please Enter your last name in [2-25] length ');
				         l_Valid=false;
					 }
				 else if(getSpace(lastname)>0)
				 {
					     ShowError("#lid" ,'  Please Don`t Enter any spaces in last name  ');
				         l_Valid=false;
				     }
				 else{
					 
					  $("#lid").html('');
				          l_Valid=true;}
				
				
			}   
//............................................................                             Email Validation 
         function emailValid()
	       {
		  
		       var email =$("#email").val();
		      // var reg=/[a-z0-9A-Z]/g/;
		       //var regcopy=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

                      

       
			   if(email == ""){
                  ShowError("#eid" ," Please Enter the your Email ");
                    e_Valid=false;
                    }

                else if(getSpace(email)>0) {
					ShowError("#eid" ," Please Don`t Enter spaces in Email ");
                    e_Valid=false;
				}
				 else if(email.length< 5 ) {
					ShowError("#eid" ," Please Enter some more charecter in Email ");
                    e_Valid=false;
				}
				else if(email.length>50)
				{
					ShowError("#eid" ," Please Enter less than 50  charecter in Email ");
					 e_Valid=false;
				 }
				 else if (!filter.test(email))
				 {
					ShowError("#eid" ," Please Enter Email in correct formate ");
					 e_Valid=false;  
				 }
				 
				 else 
				 {
					   $("#eid").html('');
					 e_Valid=true;
					 
				 }
				 
				
				
                     
         }
//...........................................................................              password Validation 
          function passwordValid()
             {
	       password  =$('#password').val();
		 
			var lowerCaseLetters=/[a-z]/g;
			var upperCaseLetters =/[A-Z]/g;
			var specialLetters=/[~!@#$%^&*()_+<>:"?;'/]/g;
			var numberLetters=/[0-9]/g;
			 
			   if(password== '')
			    {
				   ShowError("#pid" , " Please Enter the password ");
                   p_Valid= false;
				   flag_Password=0;
				  }
			  else if(password.length < 8)
              {
                 ShowError("#pid" , "Password Lenght should be minimum 8 characters ");
                  p_Valid= false;
				  flag_Password=0;
              }
			   else if(password.length > 15)
			   {
                 ShowError("#pid" , "Password Lenght should be maximum 15 characters ");
                  p_Valid= false;
				  flag_Password=0;
              }
			  
			  else if(!((password.match(lowerCaseLetters)) && (password.match(upperCaseLetters)) 
				         && (password.match(numberLetters)) && (password.match(specialLetters)) ))
			  {  
		            ShowError("#pid" , "Password must be contain 1 lower 1 upper 1 digit 1 special letters");
                    p_Valid= false;
					flag_Password=0;
				 }
			   else 
			   {
				          $("#pid").HTML('');
				          p_Valid=true;
						  flag_Password=1;
						  }   
               
	   }
//.....................................................................                     confirm - password 	   
          function cpasswordValid()
              {
           var cpassword =$('cpassword').val();
			if( flag_Password==1)
			{
				
			if(password != cpassword)
              {
                 ShowError("#cpid","  The Confirm-Password did not match  ");
                 cp_Valid=false;
              }
			  else 
			  {
			       $("#cpid").html('');
				   cp_Valid=true;
				   flag_Password=0; 
			   }
			}
			else {
			 
			    ShowError("#cpid"," Please First Enter correct Password than confirm-password ");
				cp_Valid=false;
			 }
          			
              				 
		 }
//.......................................................................................   mobile1 Validation
          function mobile1Valid()
			    {
				   
					 
					var mobile1 =$('#mob1').val();
					
			       if(mobile1 === ""){
                        ShowError("#mid1"," Please enter the Contact number  ");
                           m1_Valid= false;
                             }
                     else if(getSpace(mobile1)>0)
                        {
                           ShowError("#mid1","  Please Don`t  Enter spaces"); 
                            m1_Valid= false;
                        }
					 
					 else if(isNaN(mobile1))
                      {   ShowError("#mid1","   Please enter only digits   ");
                          m1_Valid=false;
                         }
                     
					 else if(mobile1.length != 10)
                        {
                           ShowError("#mid1","  Please  Enter 10 digits  "); 
                            m1_Valid= false;
                        }
                      
                    

                    else if(mobile1=='0000000000')
					 {
						ShowError("#mid1","   Please Enter Valid phone number    ");
					    m1_Valid=false;
					 }						
					 else 
					 {
						  $("#mid1").html('');
				          m1_Valid=true;}
						  
						 
				}   
//.......................................................................................    mobile2 Validation
          function mobile2Valid(){
				  
				   var mobile2   =$('#mob2').val();
			
                   if(mobile2 != "")
				       {
                       
					   if( isNaN(mobile2))
                            {    ShowError("#mid2" ,"   Please enter only digits in phone number 2 ");
                                 m2_Valid=false;
                             }
							  else if(getSpace(mobile2)>0)
                                {
                                 ShowError("#mid2","  Please Don`t  Enter spaces"); 
                                  m2_Valid= false;
                                  }
					     
                                else if(mobile2.length!=10)
                                    {
                                      ShowError("#mid2", " Enter only 10 digits in Phone number 2 "); 
                                       m2_Valid =false;
                                      }
							  
							  
							     else if(mobile2=='0000000000')
					                 {
						                ShowError("#mid2"," Please Enter Valid phone number 2   ");
					                     m2_Valid=false;
					                   }			
					      else 
					        {
						      $("#mid2").html('');
				              m2_Valid=true;
							  }
	                    }
						else m2_Valid=true;
			  }             
//............................................................................................   address 1
          function address1Valid(){
				   var address1   =$("#addr1").val();
				   if(address1== "")
                       {
                         ShowError("#aid1","   Please Enter address 1   ");
                          a1_Valid= false;
                       }
					  else if(!(isNaN(address1)))
                       {
                         ShowError("#aid1","   Please Enter Valid addresss 1   ");
                         a1_Valid=false;
                       }
					    else if(getSpace(address1)>10)
					   { 
				         ShowError("#aid1","   Please Remove Spaces  ");
                         a1_Valid=false; 
					   }
					   else 
					   {
						$("#aid1").html('');
				              a1_Valid=true;   
					   }
				  }
//............................................................................................................address 2
          function address2Valid(){   
			       
                  var address2     =$("#addr2").val();
                     if(address2!=''){
					 if(!(isNaN(address2)))
                       {
                         ShowError("#aid2","   Please Enter Valid addresss 2   ");
                         a2_Valid=false;
                       }
					   else if(getSpace(address2)>10)
					   { 
				         ShowError("#aid2","   Please Remove Spaces  ");
                         a2_Valid=false; 
					   }
					   else
					   {
						 $("#aid2").html('');
				              a2_Valid=true;   
					   }  
					   
					 }
					 
				   }
//............................................................................................................city
          function cityValid(){
				     var City1   =$("#city").val();
                      if(City1== "")
                       {
                          ShowError("#cid","   Please Enter the City  ");
                           c_Valid= false;
                       }
					  else if(getSpace(City1)>0)
					   { 
				           ShowError("#cid","   Please Remove Spaces  ");
                            c_Valid=false; 
					   }
					   if(!(isNaN(City1)))
                       {
                         ShowError("#cid","   Please Enter Valid City   ");
                         c_Valid=false;
                       }
					   else 
					   {
						  $("#cid").html(''); 
                              c_Valid=true;						  
					   }
					}
//............................................................................................................state 
//.............................................................................................................country
//......................................................................................................... Captcha Validation
	function captchaValid()
		  {
                var User_result=$("#User_result").val(); 
				if(User_result =='')
				{
					ShowError("#captcha_id", ' Enter the result of captcha');
					    ca_Valid=false;
				  }
                else if(result!='')
				 {
					 if(parseInt(User_result)!= parseInt(result))
					 {
						 ShowError("#captcha_id",' You are robot');
						 ca_Valid=false;
					 }
					 else
					 {
						$("#captcha_id").HTML('');
				          ca_Valid=true;
					     }
				   }
				 else{
					  
					ShowError("#captcha_id",' Captcha Result not performe by DOM');
					  ca_Valid=false;
				        }
				 
			 }
//...........   It is genrating two numbers, operand and calling  calc fuction get a actual result of captcha 
		
          function refresh()
           {
               var numberOne = parseInt(Math.floor(Math.random() * 100)%13);
               var numberTwo = parseInt(Math.floor((Math.random()) * 100)%13);
               var  operands = parseInt(Math.floor(Math.random() * 10)%4);
               var arr=['-','+','*','/'];
                var op=  arr[operands];
                if(numberTwo==0 && op=='/')
				{
					op='+';
				}
               $("#num1").html(numberOne);
               $("#num2").html(numberTwo);
               $("#operand").html(op);
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
   
   
   //...........    It will return total no of spaces present in String 
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
   
   //.............  It will display error message on specified position(based on ids)
         function ShowError(ids,msg)
		 { 
			  $(ids).html(msg); 
		 }
   //................ check password formate return true if currect else return false             			 
		}); 
   
//................................................................................................................
  