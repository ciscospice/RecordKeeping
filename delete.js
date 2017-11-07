
var firedata = firebase.database(); /* global firebase*/

function remove(x){
    firebase.database().ref('student/'+x+'/').remove();
}

firedata.ref('student').on('child_removed', function(data) {
  read();
});
