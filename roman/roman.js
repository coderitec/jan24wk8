//create an array of values

const units = ['','i','ii','iii','iv','v','vi','vii','viii','ix']
const tens = ['','x','xx','xxx','xl','l','lx','lxx','lxxx','xc']

function converter(num){
    const number = num+''
    let val 

    number.length == 1 ? val = units[number] : val = tens[number[0]] + units[number[1]]

    return val
}