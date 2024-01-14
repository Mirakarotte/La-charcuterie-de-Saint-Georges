<?php
    $lastname = $_POST['lastname'];
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $reveiver = "lacharcuteriedesaintgeorges@yahoo.com";
            $subject = "From: $lastname <$email>?";
            $body = "Lastname: $lastname\nFirstname: $fisrtname\nEmail: $email\nPhone: $phone\n\nMessage: $message\n\nRegards,\n$name";
            $sender = "From: $email";
            if(mail($reveiver, $subject, $body, $sender)){
                echo "Votre message a été envoyé";
            }else{
                echo "Désolé, nous n'avons pas réussi à envoyer votre message !";
            }
        }else{
            echo "Entrez une adresse email valide !";
        }
    }else{
    echo "Le champ email et mot de passe est obligatoire !";
}
?>