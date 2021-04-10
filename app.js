let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number = [Math.floor(Math.random() * 100 + 1)];
let test = document.getElementById('test');

let count = 0;


btn.addEventListener('click', myFunction);
document.querySelector('#userInput').addEventListener("keyup", function(event){
    if(event.keyCode ===13)
    myFunction()
} );

function myFunction () {
let input = document.querySelector('#userInput');


    
    if (input.value=="") {
        output.innerHTML = "Boş bırakma lütfen";
    }
    else if (isNaN(input.value)){
        output.innerHTML = "Lütfen dalga geçme sayı yaz";

    }
    else if (input.value == number) {
        output.innerHTML = "Teşekkürler Tekrar Bekleriz!"
        test.innerHTML = `Tahmin Sayısı: ${count}`;
        alert(`Harika Bir İş Dostum :D. Tam Olarak ${count} Seferde Buldun!`);
        const choice = confirm(`Yeniden Oynamak ister Misin?`);
        if (choice){
            count=0;
            number = Math.floor(Math.random() * 100 + 1);
            output.innerHTML="";

        }
        else{
            alert("Teşekkürler Tekrar Bekleriz!");
        }
    }
     else if (input.value < number) {
        count++;
        output.innerHTML = "Sayıyı Yükselt"
        test.innerHTML = `Tahmin Sayısı: ${count}`;
    }
    else if (input.value > number) {
        count++;
        output.innerHTML = "Sayıyı Düşür";
        test.innerHTML = `Tahmin Sayısı: ${count}`;
    }

    document.getElementById('userInput').focus();
    document.getElementById('userInput').value ="";
    
    
};