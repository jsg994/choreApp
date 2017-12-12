var choreList = [];
function makeNameVar() {
    var nameVar = document.getElementById("nameInput").value;
    document.getElementById("printAssignedChore").innerHTML +=  nameVar + ", " + chorePicker(choreList) + "<br>";
    document.getElementById("printArrayList").innerHTML = choreList.join("<br>");
}
function chorePicker(chore) {
   if (choreList.length === 0){
     return ("looks like your lucky day. There are no more chores left!");
   } else {
     var i = Math.floor(Math.random() * chore.length);
     return chore.splice(i-1,1);
     return chore[i];
   }
}
function makeChoreVar() {
    var choreVar = document.getElementById("choreInput").value;
    choreList.push(choreVar)
    document.getElementById("printArrayList").innerHTML = choreList.join("<br>");
}
document.getElementById("printArrayList").innerHTML = choreList.join("<br>");
