          var result = '';
          
          var password = '';
          //var flag_Password = 0;
          var f_Valid = false;
          var l_Valid = false;
          var e_Valid = false;
          var p_Valid = false;
          var cp_Valid = false;
          var m1_Valid = false;
          var m2_Valid = true;
          var a1_Valid = false;
          var a2_Valid = true;
          var c_Valid = false;
          var st_Valid = false;
          var co_Valid = false;
          var ca_Valid = false;
          var ge_Valid = false;
          var sub_Valid = false;
          document.getElementById("cpassword").disabled = true;
          window.onload = refresh;


          function formValidation() {

              firstNameValid();
              lastNameValid();
              emailValid();
              passwordValid();
              cpasswordValid();
              genderValid();
              mobile1Valid();
              mobile2Valid();
              address1Valid();
              address1Valid();
              countryValid();
              stateValid();
              cityValid();
              subscribeValid();
              captchaValid();

              if (f_Valid && l_Valid && e_Valid && p_Valid && cp_Valid && m1_Valid && m2_Valid && a1_Valid && a2_Valid &&
                  c_Valid && st_Valid && co_Valid && ca_Valid && ge_Valid && sub_Valid) {
                  if (confirm('form is going to submit ... okey'))
                      return true;
                  else
                      return false;
              } else return false;
          }
          //...................................................                                     first name Validation 
          function firstNameValid() {
              var firstname = document.getElementById("fname").value;
              if (ValidAlpha(firstname)) {
                  f_Valid = ShowError("fid", ' Please Enter Alphabets only');
              } else {
                  f_Valid = done("fid");
                  }
          }
          //...................................................                                      last name Validation 
          function lastNameValid() {
              var lastname = document.getElementById("lname").value;
               if (ValidAlpha(lastname)) {
                  l_Valid = ShowError("lid", ' Please Enter Alphabets only');
              } else {
                  l_Valid = done("lid");

              }
			}
          //............................................................                             Email Validation 
          function emailValid() {

              var email = document.getElementById("email")
                  .value;

              var regemail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

              if (!regemail.test(email)) {
                  e_Valid = ShowError("eid", " Please Enter Valid Email  ");

              } else {

                  e_Valid = done("eid");
              }
          }
          //...........................................................................              password Validation 
          function passwordValid() {
              password = document.getElementById('password')
                  .value;

              var lowerCaseLetters = /[a-z]/g;
              var upperCaseLetters = /[A-Z]/g;
              var specialLetters = /[~!@#$%^&*()_+<>:"?;'/{}[=]|"]/g;
              var numberLetters = /[0-9]/g;

              if (password.length < 8) {
                  p_Valid = ShowError("pid", "Please Enter More than 8 characters");
              } else if (!((password.match(lowerCaseLetters)) && (password.match(upperCaseLetters)) &&
                      (password.match(numberLetters)) && (password.match(specialLetters)))) {
                  p_Valid = ShowError("pid", "Please Enter valid password [0-9,a-z,A-Z,specialChar]");

              } else {

                  p_Valid = done("pid");
                  document.getElementById("cpassword").disabled = false;
                  //flag_Password = 1;

              }

          }
          //.....................................................................                     confirm - password 	   
          function cpasswordValid() {
              var cpassword = document.getElementById('cpassword')
                  .value;
              if (password != cpassword) {
                  cp_Valid = ShowError("cpid", "  The Confirm-Password did not match  ");

              } else {
                  cp_Valid = done("cpid");
              }
          }
          //........................................................................    gender Validation 
          function genderValid() {
              var genders = document.getElementsByName("gender");
              if (!(genders[0].checked || genders[1].checked || genders[2].checked)) {
                  ge_Valid = ShowError("gid", " Please select gender  ");
              } else {
                  ge_Valid = done('gid');
              }
          }
          //.......................................................................................   mobile1 Validation
          function mobile1Valid() {
              var mobile1 = document.getElementById('mob1')
                  .value;
              var regmob = /^\d{10}$/;
              if (!regmob.test(mobile1)) {
                  m1_Valid = ShowError("mid1", "   Please Enter only 10 digits");
              } else {

                  m1_Valid = done("mid1");
              }
          }
          //.......................................................................................    mobile2 Validation
          function mobile2Valid() {

              var mobile2 = document.getElementById('mob2')
                  .value;

              if (mobile2 != "") {

                  if (!/^\d{10}$/.test(mobile2)) {
                      m2_Valid = ShowError("mid2", "   Please Enter only 10 digits  ");
                  } else {

                      m2_Valid = done("mid2");
                  }
              } else {
                  m2_Valid = done("mid2");
              }

          }
          //............................................................................................   address 1
          function address1Valid() {
              var address1 = document.getElementById("addr1")
                  .value;
              address1 = address1.trim();

              if (address1 == "") {
                  a1_Valid = ShowError("aid1", "   Please Enter current address  ");
              } else {
                  document.getElementById("addr1").value = address1.replace(/ {2,}/g, ' ');
                  
                  a1_Valid = done("aid1");
              }
          }
          //............................................................................................    address 2
          function address2Valid() {

              var address2 = document.getElementById("addr2")
                  .value;

              if (address2 != '') {
                  address2 = address2.trim();
                  if (address2 == '') {
                      a2_Valid = ShowError("aid2", "   Please Enter Valid permanent addresss ");
                  } else {
                      document.getElementById("addr2").value = address2.replace(/ {2,}/g, ' ');
                      a2_Valid = done("aid2");

                  }
              } else {
                  a2_Valid = done("aid2");
              }

          }
          //.................................................................................  country validation 
          function countryValid() {
              var country = document.getElementById('ctt');
              if (checkAdd(country)) {
                  co_Valid = ShowError("coid", " Please select the your country");
              } else {
                  co_Valid = done('coid');
              }
          }
          //.............................................................................  state Validation 
          function stateValid() {
              var state = document.getElementById("stt");
              if (checkAdd(state)) {
                  st_Valid = ShowError("stid", " Please select the your state");
              } else {
                  st_Valid = done('stid');
              }
          }
          //............................................................................................................city
          function cityValid() {
              var city = document.getElementById("citt");
              if (checkAdd(city)) {
                  c_Valid = ShowError("cid", " Please select the your city");
              } else {
                  c_Valid = done('cid');
              }
          }
          //...........................................................................      subscribe Vlaidation 
          function subscribeValid() {
              var subscribes = document.getElementsByName('subscribe');
              if ((subscribes[0].checked == false && subscribes[1].checked == false)) {
                  sub_Valid = ShowError("sid", " Do you want to subscribe or not  ");
              } else {
                  sub_Valid = done('sid');

              }
          }
          //......................................................................................................... Captcha Validation
          function captchaValid() {
              var User_result = document.getElementById("User_result")
                  .value;
              if (User_result == '') {
                  ca_Valid == ShowError("captcha_id", ' Enter the result of captcha');
              } else if (result != '' || result == '0') {
                  if (parseInt(User_result) != parseInt(result)) {
                      ca_Valid = ShowError("captcha_id", 'Please Enter Correct Captcha');

                  } else {
                      ca_Valid = done('captcha_id');
                  }
              } else {
                  ca_Valid = ShowError("captcha_id", ' Captcha Result not performe by DOM Wait..');
              }

          }
          //...........   It is genrating two numbers, operand and calling  calc fuction get a actual result of captcha 
          function refresh() {
              var numberOne = parseInt(Math.floor(Math.random() * 100) % 13);
              var numberTwo = parseInt(Math.floor((Math.random()) * 100) % 13);
              var operands = parseInt(Math.floor(Math.random() * 10) % 4);
              var arr = ['-', '+', '*', '/'];
              var op = arr[operands];
              if (numberTwo == 0 && op == '/') {
                  op = '+';
              }
              document.getElementById("num1")
                  .innerHTML = numberOne;
              document.getElementById("num2")
                  .innerHTML = numberTwo;
              document.getElementById("operand")
                  .innerHTML = op;
              result = Math.floor(calc(numberOne, numberTwo, op));
          }
          //.......    It will performe calculation (two number and operands ) and return result.
          function calc(firstnumber, lastnumber, opration) {
              var result1;
              firstnumber = parseInt(firstnumber);
              lastnumber = parseInt(lastnumber);

              switch (opration) {

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
                      result1 = "No opration is entered";
                      break;
              }

              return (result1);
          }
          //.....................................   It will remove error
          function done(ids) {
              document.getElementById(ids).innerHTML = '';
              return true;
          }
          //.............  It will display error message on specified position(based on ids)
          function ShowError(ids, msg) {
              document.getElementById(ids)
                  .innerHTML = msg;
              return false;
          }
          //...................  It will Validate,allow Alphabets only
          function ValidAlpha(input) {

              var regtext = /^[a-zA-Z]+$/g;
              if (regtext.test(input))
                  return false;
              else
                  return true;
          }
		  //.................................
		   function checkAdd(vari)
		   {
			   if(vari.options[vari.selectedIndex].text == 'Choose One')
				   return true;
			   else 
				   return false;
		   }
		   //................................
		   
		   
		   
		   
