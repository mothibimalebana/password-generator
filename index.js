const characters = ["A","B","C","D","E","F","G","H","I","J","K",
                    "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
                    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
                    "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
                    "{","[","}","]",",","|",":",";","<",">",".","?","/"
                    ];

console.log(characters.length)
const pass1 = document.getElementById("pass-1");
const pass2 = document.getElementById("pass-2");

function generatePassword(){
    let password = ""
    for (let i = 0; i < 15; i++){
        const randomNumber = Math.floor(Math.random() * 91)
        password += characters[randomNumber]
    }
    return password
}

function buttonClick () {
    pass1.textContent = generatePassword()
    pass2.textContent = generatePassword()
}