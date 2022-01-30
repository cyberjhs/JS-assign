var a = prompt("enter the name");
var c = a.split("");
//console.log(c.length);

// To know the length of the string.

count = 0;

for(var i=0; i<c.length; i++){
	switch(c[i]) {
	case 'a':
	case 'A':
		count++;
		break;
	case 'e':
	case 'E':
		count++;
		break;
	case 'i':
	case 'I':
		count++;
		break;
	case 'o':
	case 'O':
		count++;
		break;
	case 'u':
	case 'U':
		count++;
		break;
 		}
	}
	console.log(count);