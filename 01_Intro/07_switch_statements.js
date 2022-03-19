const day = 'thursday';

switch (day) {
    case 'monday': // day===monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theroy videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code example');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default :
    console.log('Not a valid day!');
}

// STATEENTS & EXPRESSIONS
// Expressions are something that create value for e.g
3 + 4
1995
true && false && !true

// Statements are bigger codes which do not produce value itself e.g
if (23>10) {
    const str = '23 is bigger';
}
