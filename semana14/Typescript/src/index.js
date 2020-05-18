//Exercício 1
function sum(numA, numB) {
    return numA + numB;
}
var resultSum = sum(2, 3);
function subtraction(numA, numB) {
    return numA - numB;
}
var resultSub = subtraction(2, 3);
function multiplication(numA, numB) {
    return numA * numB;
}
var resultMult = multiplication(2, 3);
function compareNumbers(numA, numB) {
    if (numA > numB) {
        return numA;
    }
    else {
        return numB;
    }
}
var resultCompare = compareNumbers(2, 3);
//Exercício 2
function arrayNumInfo(arrayNum) {
    var arrayLength = arrayNum.length;
    var odd = arrayNum.filter(function (num) {
        return num % 2 !== 0;
    });
    var oddQuantity = odd.length;
    var total = 0;
    for (var _i = 0, arrayNum_1 = arrayNum; _i < arrayNum_1.length; _i++) {
        var i = arrayNum_1[_i];
        total += i;
    }
    return { arrayLength: arrayLength, oddQuantity: oddQuantity, total: total };
}
var array = [1, 2, 3, 4];
var postA = {
    auth: "Natália",
    text: "My first post"
};
var postB = {
    auth: "Hamilton",
    text: "Backend now"
};
var postC = {
    auth: "Maytê",
    text: "Say hi to Fenrir"
};
var postD = {
    auth: "Lucas",
    text: "Listen to Kanye West"
};
var postE = {
    auth: "Natália",
    text: "My second post"
};
var arrayPosts = [postA, postB, postC, postD, postE];
function findAuth(posts, auth) {
    return posts.filter(function (eachPost) {
        return eachPost.auth === auth;
    });
}
console.log(findAuth(arrayPosts, "Natália"));
