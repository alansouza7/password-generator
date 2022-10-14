characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById('generate-el')
const passwordEl1 = document.getElementById('password-1-el')
const copyBtn = document.getElementById('copy-btn')
const passwordLength = document.getElementById('password-length')
let hasPassword = false  
passwordLength.value = 1  


generateBtn.addEventListener("click", function(e){
   generatePassword1(e)
})

copyBtn.addEventListener("click", function(e){
    copyButton(e)
})



function generatePassword1(){
    passwordEl1.innerText = ``
    hasPassword = false
    if(hasPassword === false){
        for (let i = 0; i < passwordLength.value; i+= 1){
            let random = Math.floor( Math.random() *characters.length)
            passwordEl1.innerHTML += characters[random]
        }
        hasPassword = true
    } 
}


function copyButton(){
    let password = passwordEl1.innerHTML
    navigator.clipboard.writeText(password)
    alert("Copied Text: " + password)
    passwordEl1.innerText = ``
    passwordLength.value = 1
}





  
