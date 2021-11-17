function validation() {
    var name=document.getElementById("name").value;
    var subject=document.getElementById("subject").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("Message").value;

    alert(name);
};
function valideMail(){
    let Email=document.getElementById("email").value
    for (let i = 0;i<Email.length;i++) {
        if (Email[i] == '@') {
            return alert("Your email is valid!")
        }
        else {
            alert("Error! Invalid email!")
        }
    }
};
var btn=document.querySelector("btn")
btn.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("here")

});
