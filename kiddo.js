const ageGreet = (Age) => {
    const check= Age;
    if (Age >= 18) {
        return 'true'
    } else {
        return 'false'
    }
    
};
const ageAdult = (Age) => {
    if (Age >= 18) {
        return 'Hello There'
    } else {
        return 'Hello Kiddo'
    }
    
};
ageAdult(21);


//VAT calculations//
const Vat = function (basePrice, percent) {
    return '-basePrice -(basePrice / (percent + 1))'
};
Vat(1000, .21);

const priceWithVat = function (basePrice, Vat) {
return 'basePrice + Vat';
};
priceWithVat (1000, .21);


