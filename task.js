function piphagorTrinity(n) {
    let arrTrinity = [];

    for (c = 1; c <= n; c++) {
        for (b = 1; b <= n; b++) {
            for (a = 1; a <= n; a++) {
                if (c * c == b * b + a * a) {

                    arrTrinity.push({ "a": a, "b": b, "c": c });

                }
            }
        }
    }
    return arrTrinity;
}
console.log(piphagorTrinity(10));
// 178 б
function multiplicity() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 3 == 0 && arguments[i] % 5 != 0) {
            count++;
        }
    }
    return count;
}
console.log(multiplicity(1, 3, 5, 7, 9, 8, 5, 4, 7, 8, 5, 67, 87, 99, 12));
// 187 в
function square() {
	let count=0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]%2==0) {
        	let item=arguments[i];
           for (let i = 0; i < arguments.length; i++){
           	if(arguments[i]==Math.pow(item,2)){
           		count++;
           	}
           }
        }
    }
    return count;
}
console.log(square(1,2,4,6,16,36,24,6,8,64));
