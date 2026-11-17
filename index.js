const characters = ["A","B","C","D","E","F","G","H","I","J","K",
                    "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
                    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
                    "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
                    "{","[","}","]",",","|",":",";","<",">",".","?","/"
                    ];
const genBtn = document.getElementById("generate-btn")
const passwordField1 = document.getElementById("btn-pass-1")
const passwordField2 = document.getElementById("btn-pass-2")
let password1 = ''
let password2 = ''



function getRandomCharacter(){
    const randomIndex = Math.floor(Math.random()*91)
    return characters[randomIndex]
}

function getPassword(){
    let randomPassword = ''
    for (let i = 0; i < 15; i++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function generatePassword() {
    password1 = getPassword()
    password2 = getPassword()

    passwordField1.textContent = password1
    passwordField2.textContent = password2
}

async function copyPassword(passwordNO) {
    await navigator.clipboard.writeText(passwordNO);
    alert("password copied : )")
}
console.log(getPassword(), getPassword())