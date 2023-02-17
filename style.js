function ispis1() {
    var ime = document.getElementById("input-ime");
    ime.addEventListener("click", ispisIme() );
}

function ispisIme() {
    var sm1 = document.getElementById("small1");
    sm1.innerHTML = "Ime i prezime moraju biti ispisani velikim slovima, i biti odvojeni znakom _. Ne smeju sadrzati brojeve, specijalne karaktere i mala slova.";
    sm1.style.color = "#5F7378";
}

function ispis2() {
    var email1 = document.getElementById("input-email");
    email1.addEventListener("click", ispisEmail() );
}

function ispisEmail() {
    var sm2 = document.getElementById("small2");
    sm2.innerHTML = "E-mail adresa mora pocinjati slovom, a pre znaka @ mora biti slovo ili cifra.";
    sm2.style.color = "#5F7378";
}

function ispis3() {
    var poruka = document.getElementById("poruka");
    poruka.addEventListener("click", ispisPoruka() );
}

function ispisPoruka() {
    var sm3 = document.getElementById("small3");
    sm3.innerHTML = "Poruka moze sadrzati do 500 karaktera. Na kraju poruke mora biti broj osobe koja pise poruku i to u formatu xxx/xxx-xx-xx";
    sm3.style.color = "#5F7378";
}
var check1 = 1;
var check2 = 1;
var check3 = 1;

//SRPSKI
function proveraIme(){
    var inputIme = document.getElementById("input-ime").value;
    var regex = /^[A-Z]+\_[A-Z]+(\s)?[A-Z]*[^\d\w!@#$%^&*-.,?]*$/g; 

    var pom = document.getElementById("small1");
    if(regex.test(inputIme)===true){
        pom.innerHTML = "";
        check1 = 1;
    }
    else{
        pom.innerHTML = "Ime i prezime moraju biti ispisani velikim slovima, i biti odvojeni znakom _. Ne smeju sadrzati brojeve, specijalne karaktere i mala slova.";
        pom.style.color = "orangered";
        check1 = 0;
    }
}

function proveraMail(){
    var inputEmail = document.getElementById("input-email").value;
    var regex = /^[A-Za-z]+[@#$^&*.!?\d\w]+[\d\w]@([a-z]+\.)+[a-z]+$/gi;
    var pom2 = document.getElementById("small2");
    if(regex.test(inputEmail)===true){
        pom2.innerHTML = "";
        check2 = 1;
    }
    else{
        pom2.innerHTML =  "E-mail adresa mora pocinjati slovom, a pre znaka @ mora biti slovo ili cifra.";
        pom2.style.color = "orangered";
        check2 = 0;
    }
}

function proveraPoruka(){
    var inputMessage = document.getElementById("poruka").value;
    var regex = /^[[A-Za-z\.\!\?\,\;\s]+\d{3}\/\d{3}-\d{2}-\d{2}(\s+)*]{0,500}$/gim;
    var pom3 = document.getElementById("small3");
    if(regex.test(inputMessage)===true){
        pom3.innerHTML = "";
        check3 = 1;
    }
    else{
        pom3.innerHTML =  "Poruka moze sadrzati do 500 karaktera. Na kraju poruke mora biti broj osobe koja pise poruku i to u formatu xxx/xxx-xx-xx.";
        pom3.style.color = "orangered";
        check3 = 0;
    }
}

function proveraForme(){
    proveraIme();
    proveraMail();
    proveraPoruka();

    if(check1&&check2&&check3==1) {
        window.location.href = "poruka.html";
    }
}


// ENGLESKI

function ispis11() {
    var ime = document.getElementById("input-ime1");
    ime.addEventListener("click", ispisIme1() );
}

function ispisIme1() {
    var sm1 = document.getElementById("small11");
    sm1.innerHTML ="Name and surname must be written in capital letters, and be separated by a _ sign. They must not contain numbers, special characters or lowercase letters.";
    sm1.style.color = "#5F7378";
}

function ispis21() {
    var email1 = document.getElementById("input-email1");
    email1.addEventListener("click", ispisEmail1() );
}

function ispisEmail1() {
    var sm2 = document.getElementById("small21");
    sm2.innerHTML = "The e-mail address must start with a letter, and the @ sign must be preceded by a letter or a number.";
    sm2.style.color = "#5F7378";
}

function ispis31() {
    var poruka = document.getElementById("poruka1");
    poruka.addEventListener("click", ispisPoruka1() );
}

function ispisPoruka1() {
    var sm3 = document.getElementById("small31");
    sm3.innerHTML = "The message can contain up to 500 characters. At the end of the message must be the number of the person writing the message in the format xxx / xxx-xx-xx.";
    sm3.style.color = "#5F7378";
}



function proveraMail1(){
    var inputEmail = document.getElementById("input-email1").value;
    var regex = /^[A-Za-z]+[@#$^&*.!?\d\w]+[\d\w]@([a-z]+\.)*[a-z]+$/gi;
    var pom2 = document.getElementById("small21");
    if(regex.test(inputEmail)===true){
        pom2.innerHTML = "";
        check2 = 1;
    }
    else{
        pom2.innerHTML =  "The e-mail address must start with a letter, and the @ sign must be preceded by a letter or a number.";
        pom2.style.color = "orangered";
        check2 = 0;
    }
}

function proveraPoruka1(){
    var inputMessage = document.getElementById("poruka1").value;
    var regex = /^[[A-Za-z\.\!\?\,\;\s]+\d{3}\/\d{3}-\d{2}-\d{2}(\s+)*]{0,500}$/gim;
    var pom3 = document.getElementById("small31");
    if(regex.test(inputMessage)===true){
        pom3.innerHTML = "";
        check3 = 1;
    }
    else{
        pom3.innerHTML = "The message can contain up to 500 characters. At the end of the message must be the number of the person writing the message in the format xxx / xxx-xx-xx.";
        pom3.style.color = "orangered";
        check3 = 0;
    }
}

function proveraForme1(){
    proveraIme1();
    proveraMail1();
    proveraPoruka1();

    if(check1&&check2&&check3==1) {
        window.location.href = "poruka1.html";
    }
}

