// IF

const isUserLogged = true


if (true) {
    // code will be executed
}

if (false) {
    // code will not be executed
}

// <, >, <=, >=, ==,!=, ===

const balance = 1000
if (balance > 500) console.log("APPROVED"); // implicite scope


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4
switch (month) {
    case 1:
        console.log("january");
        break;

    case 2:
        console.log("Feb");
        break;

    case 3:
        console.log("march");
        break;

    case 4:
        console.log("april");
        break;

    case 5:
        console.log("may");
        break;

    case 6:
        console.log("june");
        break;
    default:
        console.log("DEC");
        
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const months = "march"
switch (months) {
    case "jan":
        console.log("january");
        break;

    case "feb":
        console.log("Feb");
        break;

    case "march":
        console.log("march");
        break;

    case "april":
        console.log("april");
        break;

    case "May":
        console.log("may");
        break;

    case "june":
        console.log("june");
        break;
    default:
        console.log("DEC");
        
}



