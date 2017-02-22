var a = 4,
    b = 5,
    value = (a*a) + (2 * a * b) - (b*b);

console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
} else if (value==0) {
    console.log('wynik zerowy');
} else {
    console.log('wynik ujemny');
}