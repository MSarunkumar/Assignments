       $(document)
           .ready(function() {
			    var password;
              
               var f_Valid = false;
               var l_Valid = false;
               var e_Valid = false;
               var p_Valid = false;
               var m1_Valid = false;
               var m2_Valid = true;
               var a1_Valid = false;
               var a2_Valid = true;
               var c_Valid = false;
               var st_Valid = false;
               var co_Valid = false;
               var ge_Valid = false;
               var d_Valid = false;
			   //.........................................................................................   Form validation 
			    $('#subid')
                   .click(function() {
                               
                   firstNameValid();
                   lastNameValid();
                   emailValid();
				   dateValid();
                   passwordValid();
                   genderValid();
                   mobile1Valid();
                   mobile2Valid();
                   address1Valid();
                   address2Valid();
                   cityValid();
                   stateValid();
                   countryValid();
                   

                    if(f_Valid && l_Valid && e_Valid && d_Valid  && p_Valid && m1_Valid && m2_Valid &&
                      a1_Valid && a2_Valid && c_Valid && ge_Valid && st_Valid && co_Valid){
				       
					      if(confirm('Form is going to submit ... okay'))
							return true;
						 else 
							return false;
						}
				   else 
                    return false;
                   });

              


               //..........................................................................   Events trigger	  

               $('#fname')
                   .blur(function() {
                       firstNameValid();
                   });
               $('#lname')
                   .blur(function() {
                       lastNameValid();
                   });
               $('#email')
                   .blur(function() {
                       emailValid();
                   });
               $('#password')
                   .blur(function() {
                       passwordValid()
                   });

               $('#mob1')
                   .blur(function() {
                       mobile1Valid()
                   });
               $('#mob2')
                   .blur(function() {
                       mobile2Valid()
                   });
               $('#addr1')
                   .blur(function() {
                       address1Valid();
                   });
               $('#addr2')
                   .blur(function() {
                       address2Valid();
                   });
               $('#citt')
                   .blur(function() {
                       cityValid();
                   });

               $("#stt")
                   .blur(function() {
                       stateValid();
                   });
               $("#ctt")
                   .blur(function() {
                       countryValid()
                   });
				$("#dob").blur(function() {
					dateValid();
					 });
                $('input:radio[name="gender"]').
				      change(function(){
                         genderValid();
                                 
                     });
              
              
               //.................................................................................................      First name Validation            
               function firstNameValid() {

                   var firstname = $("#fname").val();

                   if (ValidAlpha(firstname)) {
                       f_Valid = ShowError("#fid", ' Please Enter Alphabets only');
                   } else {
                       f_Valid = true;
                       done("#fid", '');
                   }
               }
               //..................................................................................................      Last name Validation 
               function lastNameValid() {
                   var lastname = $("#lname").val();

                   if (ValidAlpha(lastname)) {
                       l_Valid = ShowError("#lid", ' Please Enter Alphabets only');
                   } else {
                       l_Valid = true;
                       done("#lid", '');
                   }
               }
               //...................................................................................................     Email Validation 
               function emailValid() {
                   var email = $("#email")
                       .val();
                   var regemail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

                   if (!regemail.test(email)) {
                       e_Valid = ShowError("#eid", " Please Enter Valid Email  ");

                   } else {
                       done("#eid", '');
                       e_Valid = true;
                   }
               }
              //....................................................................................................      Date Validation
               function dateValid() {
				  var mydate = $('#dob').val();
				
                     if(!mydate) 
                      {
						d_Valid = ShowError("#did", "Please Enter date");
                       }
                  else 
				  {
					done('#did',''); 
                    d_Valid=true;					
				  }
				  
			   }
               //...................................................................................................     Password Validation 
               function passwordValid() {
                   password = $('#password')
                       .val();
                   var lowerCaseLetters = /[a-z]/g;
                   var upperCaseLetters = /[A-Z]/g;
                   var specialLetters = /[~!@#$%^&*()_+<>:"?;'/{}[=]|"]/g;
                   var numberLetters = /[0-9]/g;

                   if(password.length<8) {
					    p_Valid = ShowError("#pid", "Please Enter More than 8 characters");
				         }
                   else if (!((password.match(lowerCaseLetters)) && (password.match(upperCaseLetters)) &&
                           (password.match(numberLetters)) && (password.match(specialLetters)))) {
                       p_Valid = ShowError("#pid", "Please Enter valid password [0-9,a-z,A-Z,specialChar]");
                      
                   } else {
                       done("#pid", '');
                       p_Valid = true;
                      
                   }

               }
               //..................................................................................................   gender valid
               function genderValid() {
                   if ($('input[name=gender]:checked').length <= 0) {
                       ge_Valid = ShowError("#gid", " Please Select gender  ");
                   } else {
                       done('#gid', '');
                       ge_Valid = true;
                   }
				 }
               //.........................................................................................    mobile1 Validation
               function mobile1Valid() {
                   var mobile1 = $('#mob1')
                       .val();
                   var regmob = /^\d{10}$/;
                   if (!regmob.test(mobile1)) {
                       m1_Valid = ShowError("#mid1", "   Please Enter only 10 digits");
                   } else {
                       done("#mid1", '');
                       m1_Valid = true;
                   }
               }
               //.........................................................................................    mobile2 Validation
               function mobile2Valid() {
                     var mobile2 = $('#mob2')
                       .val();

                   if (mobile2 != "") {
                          if (!/^\d{10}$/.test(mobile2)) {
                           m2_Valid = ShowError("#mid2", "   Please Enter only 10 digits  ");
                       } else {
                           done("#mid2", '');
                           m2_Valid = true;
                       }
                   } else 
				       {  done("#mid2", '');
					      m2_Valid = true;
                       }     
			   }
               //.........................................................................................    address 1
               function address1Valid() {
                   var address1 = $("#addr1").val();
					   address1= address1.trim();
                   if (address1 == "") {
                       a1_Valid = ShowError("#aid1", "   Please Enter current address    ");
                      } 
				   else {
					    $("#addr1").val(address1.replace( / {2,}/g, ' ' ));
                       done("#aid1", '');
                       a1_Valid = true;
                   }
               }
               //.........................................................................................    address 2
               function address2Valid() {
                   var address2 = $("#addr2")
                       .val();
                   if (address2 != '') {
					   address2= address2.trim();
                       if (address2=='') {
                           a2_Valid = ShowError("#aid2", "   Please Enter Valid permanent addresss ");
                        } else {
							$("#addr2").val(address2.replace( / {2,}/g, ' ' ));
                           done("#aid2", '');
                           a2_Valid = true;
                       }
					 }
					 else { done("#aid2", '');
					 a2_Valid = true;}
				}
               //.........................................................................................     city
               function cityValid() {
                   if ($('#citt option:selected').val() == '0') {
                       c_Valid = ShowError("#cid", 'Please select city');
                   } else {
                       done('#cid', '');
                       c_Valid = true;
                   }
               }
               //................................................................................................ state 
               function stateValid() {
                   if ($('#stt option:selected').val() == '0') {
                       st_Valid = ShowError("#stid", 'Please select state');
                   } else {
                       done('#stid', '');
                       st_Valid = true;
                   }
               }
               //................................................................................................. country
               function countryValid() {
                   if ($('#ctt option:selected').val() == '0') {
                       co_Valid = ShowError("#coid", 'Please select country');
                   } else {
                       done('#coid', '');
                       co_Valid = true;
                   }
               }
});
       //................................................................................................................... Valid Alphabats
       function ValidAlpha(input) {
           var regtext = /^[a-zA-Z]+$/g;
           if (regtext.test(input))
               return false;
           else
               return true;
       }
       //.......................................................................................... for removing error message 
       function done(ids, msg) {
           $(ids)
               .html(msg);
       }
       //..................................................  It will display error message on specified position(based on ids)
       function ShowError(ids, msg) {
           $(ids)
               .html(msg);
           return false;
       }
	   //.....................................................   It will Check address 
	   
		     
