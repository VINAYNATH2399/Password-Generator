
class Password{
    constructor(){
        console.log("Welcome to Generator Password World");
        this.pass = ""
    }
    generatePassword(len){

        let chars = "abcdefghi"
        let numbers = "1234567890"
        let special = "@#$%^&*/()"

        if(len<3){
            document.getElementById("result").innerText = "Minimum Eight Characters";
        }
        else{
            let i = 0;
            while(i<len){
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += special[Math.floor(Math.random() * special.length)]
                i = i + 3;
            }
            this.pass = this.pass.substr(0 ,len)
            document.getElementById("result").innerText= "Generator Password: " + this.pass;
        }
    }
}
function  generatePassword(){
    let passwordlength = document.getElementById("passwordlength").value;
    let generator = new Password();
    generator.generatePassword(passwordlength);
}




