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
        output.innerHTML = "Write a number";
    }
    else if (isNaN(input.value)){
        output.innerHTML = "It's not a number";

    }
    else if (input.value == number) {
        output.innerHTML = "Thanks for game!"
        test.innerHTML = `This is your test number: ${count}`;
        alert(`Harika Bir İş Dostum :D. Tam Olarak ${count} Seferde Buldun!`);
        const choice = confirm(`Yeniden Oynamak ister Misin?`);
        if (choice){
            count=0;
            number = Math.floor(Math.random() * 100 + 1);
            output.innerHTML="";

        }
        else{
            alert("Thanks for playing");
        }
    }
     else if (input.value < number) {
        count++;
        output.innerHTML = "Sayıyı Yükselt"
        test.innerHTML = `This is your test number: ${count}`;
    }
    else if (input.value > number) {
        count++;
        output.innerHTML = "Sayıyı Düşür";
        test.innerHTML = `This is your test number: ${count}`;
    }

    document.getElementById('userInput').focus();
    document.getElementById('userInput').value ="";
    
    
};