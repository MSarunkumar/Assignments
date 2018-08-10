      var result;
       function formValidation() 
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
                  
                
//......................................................................................first name
             if(firstname.value == "")
              {
                alert("Enter the your first name - can`t vacant... ok");
                return false;
                }
//......................................................................................last name
                if(lastname.value== "")
                {
                  alert("Enter the your last name - can`t vacant... ok");
                   return false;
                }
//......................................................................................Email

                if(email == ""){
                  alert("Enter the your Email - can`t vacant... ok");
                   return false;
                    }

                else{
                  
                    var at = email.indexOf("@");
                    var dot = email.lastIndexOf(".");
                    if (at<1 || dot<at+2 || dot+2>=email.length) {
                             alert(" !!!... Formate is not currect of email  ...!!!");
                                return false;
                       }
                     }
//...........................................................................................................password

              if(password.value.length < 8)
              {
                alert("!!!...  Password Lenght should be minimum 8 characters  ...!!!");
                return false;
              }
//...........................................................................................................conform password
                      
              if(password.value != cpassword.value)
              {
                alert("!!!...  The Confirm-Password did not match  ...!!!");
                return false;
              }
//...................................................................................... gender 
               if (! (genders[0].checked || genders[1].checked|| genders[2].checked) ) {
                  alert("!!!...   Select at least one gender   ...!!!");
                  return false;
               }
//............................................................................................................mobile1
              
                    if(mobile1.value==""){
                        alert("!!!...   Please enter the Contact number   ...!!!");
                           return false;
                             }
                         
                     if(mobile1.value.length!=10)
                        {
                           alert("!!!...   Enter only 10 digits   ...!!!"); 
                            return false;
                        }
                    

                     if(isNaN(mobile1.value))
                      {   alert("!!!...   Please enter only digits   ...!!!");
                          return false;
                         }
//............................................................................................................mobile 2

              if(mobile2.value==""){
                        alert("!!!...   Please enter the Contact number  mobile 2 ...!!!");
                           return false;
                             }


                     if(mobile2.value.length!=10)
                        {
                           alert("!!!...   Enter only 10 digits mobile 2  ...!!!"); 
                            return false;
                        }
                    

                     if( isNaN(mobile2.value))
                      {   alert("!!!...   Please enter only digits  mobile 2 ...!!!");
                          return false;
                         }
//............................................................................................................address 1
                      if(address1.value== "")
                       {
                        alert("!!!... You have to enter address  - can`t vacant... ok");
                        return false;
                       }
//............................................................................................................address 2
                      if(isNaN(address2.value))
                       {
                        alert("!!!...  address 2 can`t be only digit  -  ok");
                        return false;
                       }
//............................................................................................................city
                      if(City1.value== "")
                       {
                        alert("!!!... You have to enter city  - can`t vacant... ok");
                        return false;
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
             
 }

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
//................................................................................................................
  