exports.piphagorTrinity = function(n) {
    let arrTrinity = [];
    let i = 0;
    for (c = 1; c <= n; c++) {
        for (b = 1; b <= n; b++) {
            for (a = 1; a <= n; a++) {
                if (c * c == b * b + a * a) {

                    arrTrinity[i] = ({ "a": a, "b": b, "c": c });
                    i++;

                }
            }
        }
    }
    return arrTrinity;
}

// 178 б
exports.multiplicity = function() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 3 == 0 && arguments[i] % 5 != 0) {
            count++;
        }
    }
    return count;
}

// 178 в
exports.square = function() {
    let arr = [];
    let content=[];
    if (process.argv[2]) {
        arr = (process.argv.slice(2)).map(function(item) { return +item });
    } 
    // else {
    //     var stdin = process.openStdin();
    //     stdin.addListener("data", function(d) {
    //         content.push(Number(d.toString().trim()));
    //         if (d.toString().trim() == '') {
    //             process.exit();
    //         }
    //     });

    // }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            let item = arr[i];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == item * item) {
                    count++;
                }
            }
        }
    }

    return count;
}