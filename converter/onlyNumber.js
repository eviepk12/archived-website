function decToBinary(n, base) {
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    }

    switch (base) {
        
    case 'B':  
    return parseInt(n, 10).toString(2);
    break;  
    case 'H':  
    return parseInt(n, 10).toString(16);
    break;  
    case 'O':  
    return parseInt(n, 10).toString(8);
    break;  
    default:  
    return("Wrong input.........");
    }
}

console.log(decToBinary(5));

function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}