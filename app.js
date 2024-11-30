document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("aMiOYOOuP9Jv8KA2K");

    var myForm = document.getElementById('contact-form');
    
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_vhvo26h', 'template_c725ifq', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                myForm.reset();
            }, function(error) {
                alert('Erro ao enviar a mensagem: ' + error);
            });
    });
});