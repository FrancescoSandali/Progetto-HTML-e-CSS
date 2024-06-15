function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("send").value,
    }
    emailjs.send("service_l3a60gj","template_ocj810g",params).then(alert("Email inviata con successo!!"));
}
