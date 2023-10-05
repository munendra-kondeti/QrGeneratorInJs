import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

userInput();
// Saves the text in to a text file taken from the user
function saveText(text){
    fs.writeFile("urlText.txt",text,(err)=>{
        if(err) throw err; 
        console.log("Success fully done text file")});
}
// Qr generate by taking user entered adress
function qrGenerator(websiteAddress){
    var qrImage=qr.image(websiteAddress);
    qrImage.pipe(fs.createWriteStream("QR_Code.png"));
    console.log("Image done");
}
// This method askes the user in "CLI" and pass that data to the "text saver" and "qr generator"
function userInput(){
    inquirer.prompt([{
        type: "input",
        name : "yourWebsiteName",
        message : "Enter the website address "
    }]).then(userData =>{
        qrGenerator(userData.yourWebsiteName);
        saveText(userData.yourWebsiteName);
        console.log(userData.yourWebsiteName);
    })
     
}