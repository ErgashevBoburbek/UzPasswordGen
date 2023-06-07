let textinput = document.getElementById("symbol");
let harf = document.getElementById("harf");
let raqam = document.getElementById("raqam");
let yarat = document.getElementById("yarat");
let passwordfield = document.getElementById("passwordfield");
let errorshower = document.getElementById("errorshower");
let randomall = "qwertyuiopasdfghjklzxcvbnm1234567890";
let randomletter = "qwertyuiopasdfghjklzxcvbnm";
let randomnumber = "1234567890";

function generate() {
    let lenght = getlenght();
    //let lenghttonumber = Number(lenght);
    let password = getpassword(lenght);
    if (isNaN(lenght)) {
        errorshower.style.display = "inline";
        errorshower.textContent = "Iltimos Raqam Kiriting!";
        textinput.value = "";
    } else {
        if (Number(lenght)==0) {
            errorshower.style.display = "inline";
            errorshower.textContent = "Iltimos Belgilar Miqdorini Kiriting!";
            textinput.value = "";
        } else if (Number(lenght)>20){
            errorshower.style.display = "inline";
            errorshower.textContent = "Kiritilgan Raqam Belgilangan Miqdordan Ko'p!";
            textinput.value = "";
        } else if (Number(lenght)<6) {
            errorshower.style.display = "inline";
            errorshower.textContent = "Kiritilgan Raqam Belgilangan Miqdordan Kam!";
            textinput.value = "";
        } else {
            let password = getpassword(lenght);
            errorshower.style.display = "none";
            passwordfield.textContent = password.toUpperCase();
        }
    }
}

function getlenght() {
    let inputlenght = textinput.value;
    return inputlenght;
}

function getpassword(getlenght) {
    let startpassword = 1;
    let generated = "";
   if ((harf.checked == true) && (raqam.checked == true)) {
    do {
        let randomindex = Math.floor(Math.random()* randomall.length);
        generated = generated + randomall[randomindex];
        startpassword++;
    } while (startpassword <= getlenght);
   } else if ((harf.checked == true) && (raqam.checked == false)) {
    do {
        let randomindex = Math.floor(Math.random()* randomletter.length);
        generated = generated + randomletter[randomindex];
        startpassword++;
    } while (startpassword <= getlenght);
   }
   else {
    do {
        let randomindex = Math.floor(Math.random()* randomnumber.length);
        generated = generated + randomnumber[randomindex];
        startpassword++;
    } while (startpassword <= getlenght);
    return generated;
   }
   return generated;

   
}


yarat.addEventListener("click", generate);
