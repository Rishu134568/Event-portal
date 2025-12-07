let students=[];


document.getElementById("registerForm").addEventListener("submit",function(e){
e.preventDefault();


let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;
let dept=document.getElementById("dept").value;
let events=document.getElementById("events").value;


let msg=document.getElementById("msgBox");


if(name==""||roll==""||dept==""||events==""){
msg.style.display="block";
msg.style.background="#ffebee";
msg.style.color="#c62828";
msg.innerText="Registration Failed! Please fill all fields";
return;
}


let student={name,roll,dept,events};
students.push(student);


addStudentToTable(student);
this.reset();

msg.style.display="block";
msg.style.background="#e8f5e9";
msg.style.color="#2e7d32";
msg.innerText="Student Registered Successfully";
setTimeout(()=>{msg.style.display="none";},3000);
});

function addStudentToTable(student){
let tbody=document.querySelector("#studentTable tbody");
let row=document.createElement("tr");

row.innerHTML=`
<td>${student.name}</td>
<td>${student.roll}</td>
<td>${student.dept}</td>
<td><button onclick="generatePass('${student.name}','${student.roll}','${student.dept}','${student.events}')">Generate Pass</button></td>
<td>${student.events}</td>
`;
tbody.appendChild(row);
}


function generatePass(name,roll,dept,events){
document.getElementById("passName").innerText="Name: "+name;
document.getElementById("passRoll").innerText="Roll No: "+roll;
document.getElementById("passDept").innerText="Department: "+dept;
document.getElementById("passEvent").innerText="Event: "+events;
document.getElementById("passModal").style.display="block";
}


if(document.getElementById("closeModal")){
document.getElementById("closeModal").onclick=()=>{document.getElementById("passModal").style.display="none";};
}

// PRINT
if(document.getElementById("printPass")){
document.getElementById("printPass").onclick=()=>{window.print();};
}

// DOWNLOAD
if(document.getElementById("downloadExcel")){
document.getElementById("downloadExcel").onclick=function(){
let csv="Name,Roll No,Department,Event\n";
students.forEach(s=>{csv+=`${s.name},${s.roll},${s.dept},${s.events}\n`;});
let blob=new Blob([csv],{type:"text/csv"});
let a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="registered_students.csv";
a.click();
};
}



