const copyBtn = document.getElementById('copy');
const input = document.getElementById('password');

function getPassword() {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!?@%ù*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = 16;
   let password = "";
//Générer mdp//
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNumber, randomNumber + 1);
            
//Afficher mdp//
        document.getElementById('password').value = password;
    }
}

//Selectionne et copie le texte//
input.addEventListener('click', () => {
    input.select();
});

copyBtn.addEventListener('click', () => {
    input.select();
    document.execCommand('copy')
})

