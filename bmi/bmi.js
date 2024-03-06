const paras = document.querySelectorAll('p')
const inputs = document.querySelectorAll('input')

function bmiStatus(){
    const weight = inputs[0].value * 1
    const height = inputs[1].value / 100

    const bmi = (weight / height**2).toFixed(2)

    paras[0].innerHTML = '<strong>BMI Result:</strong> ' + bmi + 'kgm<sup>-2</sup>'

    paras[1].innerHTML = bmi >= 30 ? '<strong>BMI status: </strong> Obesity' :
    bmi > 25 ? '<strong>BMI status: </strong> Overweight' :
    bmi >= 18.5 ? '<strong>BMI status: </strong> Healthy weight':
     '<strong>BMI status: </strong> Under weight'
}

inputs[1].addEventListener('change', bmiStatus)