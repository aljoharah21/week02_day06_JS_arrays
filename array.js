function myFunction(x, y)
	 document.write('qustion 1-:<br><br>');
    key=6;
    let numbers = [5,6,4 ]; 
    let check='not found';
    
    for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i]==key) { 
    check='the key in array';
     break; 
    
    } }
     document.write(check);
	 document.write('<br>');
	 
	 
	 
	 document.write('<br>qustion 2-:<br><br>');
	 let number = [19,6,4,8]; 
	var pairs=0;
	var single=0;
	    document.write('pairs is:');
    for (let i = 0; i < number.length; i++) { 
    if (number[i]%2===0){ 
      pairs++;    
    }else if(number[i]%2!=0) { 
single++;
	}}
     document.write('<br>'+pairs+'<br>'+'the single of numbers is: '+'<br>');   
     document.write(single);
    