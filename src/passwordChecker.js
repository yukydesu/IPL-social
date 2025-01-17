export class Main {

        // 1)	La fonction doit vérifier qu’une chaine de caractère est bien un mot de passe valide :
    //Il doit contenir au moins 8 charactères.
    

    isPasswordValid(password) {
        return false;

    }

    // la fonction doit verifier la longuer du mot de passe
    // il doit contenir au moins 8 charactères
    isPasswordLength(password) {
        return password.length >= 8;
    }

    // Doit contenir au moins un charactère spécial
    isPasswordSpecialCharacter(password) {
        // Liste des caractères spéciaux courants
        const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

        // Teste si le mot de passe contient au moins un caractère spécial
        return specialCharacters.test(password);
    }
}

export default Main;
