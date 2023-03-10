function validateForm(){
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var dirreccion = document.getElementById("dirreccion").value;
    var email = document.getElementById("email").value;
    
    if (nombre == ""){
        alert("Please enter");
        return false;
    }
    if (edad == ""){
        alert("Please enter");
        return false;
    }
    else if(edad < 1){
        alert("Please enter");
        return false;
    }
    if(dirreccion == ""){
        alert("Please enter");
        return false;
    }
    if(email == ""){
        alert("Please enter");
        return false;
    }
    else if(!email.includes("@")){
        alert("Please enter");
        return false;

    }
    return true;
}
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];   
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html = "";
    peopleList.forEach(function(element,index){
        html += "<tr>";
        html += "<td>"+element.nombre+"</td>";
        html += "<td>"+element.edad+"</td>";
        html += "<td>"+element.dirreccion+"</td>";
        html += "<td>"+element.email+"</td>";
        html += '<td><button onclick="deleteData('+
        index+
        ')"class="btn btn-danger">Eliminar</button><button onclick="updateData('+
        index+
        ')"class="btn btn-warning m-2">Editar</button></td>';
        html+="</tr>";
    });
    document.querySelector("#crudTable tbody").innerHTML= html; 
}    

document.onload=showData();

function AddData(){
      if(validateForm()==true){
        var nombre=document.getElementById("nombre").value;
        var edad=document.getElementById("edad").value;
        var dirreccion=document.getElementById("dirreccion").value;
        var email=document.getElementById("email").value;

        var peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
      }
   
      peopleList.push({
        nombre:nombre,
        edad:edad,
        dirreccion:dirreccion,
        email:email
      });
      localStorage.setItem("peopleList",JSON.stringify
      (peopleList));
      showData();
      document.getElementById("nombre").value="";
      document.getElementById("edad").value="";
      document.getElementById("dirreccion").value="";
      document.getElementById("email").value="";

}
//   delete
function deleteData(index){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.splice(index,1);
    localStorage.setItem("peopleList",JSON.stringify(peopleList));
    showData();
}
//update
function updateData(index){
    document.getElementById("submit").style.display="none";
    document.getElementById("update").style.display="block";
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    document.getElementById("nombre").value = peopleList[index].name;
    document.getElementById("edad").value = peopleList[index].age;
    document.getElementById("dirreccion").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].email;

    document.getElementById("#update").onclick = function() {
        if(validateForm() ==true){
            peopleList[index].nombre=document.getElementById("nombre").value;
            peopleList[index].edad=document.getElementById("edad").value;
            peopleList[index].dirreccion=document.getElementById("dirreccion").value;
            peopleList[index].email=document.getElementById("email").value;

            localStorage.setItem("peopleList",JSON.stringify(peopleList));

            showData();
            document.getElementById("nombre").value="";
            document.getElementById("edad").value="";
            document.getElementById("dirreccion").value="";
            document.getElementById("email").value="";

            document.getElementById("submit").style.display="block";
            document.getElementById("update").style.display="none";
            



        }
    }

    
}