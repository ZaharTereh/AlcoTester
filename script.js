alert('Дарова бандит');
let name = prompt('Введите ваше имя');
alert(`Дарова ${name}`);
let number = prompt('Введите число');
if(isNaN(+number)){alert('Вы ввели не число!');}
else{
let sum = (+number)+1;
alert(`Ваше число ${sum}`);
}

let number1,number2,a,b,c;
while(true){
 number1 = Math.floor((Math.random()*21)-10);
 number2 = Math.floor((Math.random()*21)-10);
 a = Math.round(Math.random()*(4-1+1)+1);
	   switch (a){
		   case 1 : b = number1+number2;c = prompt(`${number1} + ${number2} = `);break;
		   case 2 : b = number1-number2;c = prompt(`${number1} - ${number2} = `);break;
		   case 3 : b = number1*number2;c = prompt(`${number1} * ${number2} = `);break;
		   case 4 : b = number1/number2;c = prompt(`${number1} / ${number2} = `);break;
	             }

if (c!=b){alert('Пора завязывать,паренёк!');break;}	   
	
}
	  
	   

