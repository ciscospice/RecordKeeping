var firedata = firebase.database(); /* global firebase*/



function update_record(x){
    var stud_id = document.getElementById("stid"+x);
    var first_name = document.getElementById("fn"+x);
    var last_name = document.getElementById("ln"+x);
    var courses = document.getElementById("crs"+x);
    var email = document.getElementById("em"+x);
    
    firedata.ref('student/'+ x).set({
    FirstName:  first_name.value,
    LastName:  last_name.value,
    Courses :  courses.value,
    Email: email.value,
  });
}

firedata.ref('student').on('child_changed', function(data) {
  read();
});