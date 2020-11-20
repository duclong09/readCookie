//Function:  Cơ bản
// function getName($name){
//     $name += " 18211TT0534";
//     return $name;

// }

// const resul = getName('Duc long');
// console.log(resul);

//Funciton nâng cao:


// // const name  =
//  getName("ho duc long")
// //console.log(name);
// function getName(name){
//     name += '18211TT0534';
//     document.getElementById('longteo').innerHTML = name;
//     //return name;
// }


// function WriteCookie() {
//    if( document.myform.customer.value == "" ) {
//       alert("Enter some value!");
//       return;
//    }
//    cookievalue = escape(document.myform.customer.value) + ";";
//    document.cookie = "name=" + cookievalue;
//    document.write ("Setting Cookies : " + "name=" + cookievalue );
// }



function ReadCookie(){
   var allcookies = document.cookie;
   document.write ("All Cookies : " + allcookies );

   cookiearray = allcookies.split(';');
   for(var i=0; i<cookiearray.length; i++) {
      name = cookiearray[i].split('=')[0];
      value = cookiearray[i].split('=')[1];
      document.write ("Key is : " + name + " and Value is : " + value);
   }
}