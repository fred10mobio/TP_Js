$(document).ready(function(){
    $(".chzn-select").chosen();
    $('#commentForm').validate({
        rules: {
            'user[name]': {
                required: true,
                minlength: 2
            },
            'user[surname]': {
                required: true,
                minlength: 2
            },
            'user[email]': {
                required: true,
                email: true,
            },
            'user[subject]': {
                required: false,
                minlength: 2
            },
            'user[comment]': {
                required: true,
                minlength: 100
            }
        },
        messages: {
            'user[name]': {
                required: 'Nom requis',
                minlength: jQuery.format('votre nom doit  faire au moins {0} caracteres')
            },
            'user[surname]': {
                required: 'Prénom requis',
                minlength: jQuery.format('Votre prénom doit  faire au moins {0} caracteres')
            },
            'user[email]': {
                required: 'Nous avons besoin de votre e-mail pour vous recontacter',
                email:'votre e-mail dot etre au format  example@axample.ca'
            },
            'user[subject]': {
                minlength: jQuery.format('Le sujet doit  contenir au moins {0} caracteres')
            },
            'user[comment]': {
            required:'Dites ce que vous pensez de Frédéric Mobio',
            minlength: jQuery.format('votre commentaire doit  faire au moins {0} caracteres')
            }
        }
    });
});