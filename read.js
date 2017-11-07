
var firedata = firebase.database(); /* global firebase*/

read();

function read(){
    
    var y ="<table><th>Student_Id</th><th>FirstName</th><th>LastName</th><th>Courses</th><th>Email</th>";

    var reader = document.getElementById("reader");
    
    firedata.ref('student').once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
          
        y += "<tr>";
        
        var childKey = childSnapshot.key;
        var firstname = childSnapshot.val().FirstName;
        var lastname = childSnapshot.val().LastName;
        var courses = childSnapshot.val().Courses;
        var email = childSnapshot.val().Email;
        
        var ch = childKey;
        
        y+= "<td><input type='text' id = 'stid"+ch+"' value='"+childKey+"'/></td><td><input type='text' id = 'fn"+ch+"' value='"+firstname+"'/></td><td><input type='text' id= 'ln"+ch+"' value='"+lastname+"'/></td><td><input type='text' id= 'crs"+ch+"' value='"+courses+"'/></td><td><input type='text' id = 'em"+ch+"' value='"+email+"'/></td><td><button onclick = 'update_record("+childKey+")'>Update</button></td><td><button onclick = 'remove("+childKey+")'>Delete</button></td>";
        
        y+="</tr>";
        
        
        
      });
      
     y+= "</table>";
     reader.innerHTML = y;
     
});

}