
// find All the substrings of a string
function findSubstrings(str){
    let subStringArr = [];
    if(!str){
        throw new Error('The string is not defined');
    }

    for(let i=0; i<str.length; i++){
        subStringArr.push(str[i]);
        for(let j=0; j<str.length; j++){
            subStringArr.push(str[i] + str[j]);
        }
    }
    subStringArr.push(str);
    return subStringArr;
}

findSubstrings('abc');

