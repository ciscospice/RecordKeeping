
var firedata = firebase.database(); /* global firebase*/

function create(){
    
    var stud_id = document.getElementById("stud_id");
    var first_name = document.getElementById("first_name");
    var last_name = document.getElementById("last_name");
    var courses = document.getElementById("courses");
    var email = document.getElementById("email");

    
firedata.ref('student/'+stud_id.value).set({
    FirstName:  first_name.value,
    LastName:  last_name.value,
    Courses :  courses.value,
    Email: email.value,
  });
  
  stud_id.value = "";
  first_name.value = "";
  last_name.value = "";
  courses.value = "";
  email.value = "";
  
      
firedata.ref('student').on('child_added', function() {
  read();
});
  
}