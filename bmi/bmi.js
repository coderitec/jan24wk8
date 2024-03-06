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

    paras[2].innerHTML = bmi >= 30 ? '<strong>Advice: </strong> The best way to treat obesity is to eat a healthy, reduced-calorie diet and exercise regularly. To do this you should: eat a balanced, calorie-controlled diet.' :
    bmi > 25 ? '<strong>Advice: </strong> Choosing healthier foods (whole grains, fruits and vegetables, healthy fats and protein sources) and beverages. Limiting unhealthy foods (refined grains and sweets, potatoes, red meat, processed meat) and beverages (sugary drinks) Increasing physical activity. Limiting television time, screen time, and other “sit time”' :
    bmi >= 18.5 ? '<strong>Advice: </strong> Achieving and maintaining a healthy weight includes healthy eating, physical activity, optimal sleep, and stress reduction. Several other factors may also affect weight gain. Healthy eating features a variety of healthy foods.':
     '<strong>Advice: </strong> It is important to eat a variety of foods that give you the nutrition you need. You should make sure you eat foods with enough energy to help you gain weight, protein to repair your body and build your muscles, and vitamins and minerals to keep your body cells functioning well.'
}

inputs[1].addEventListener('change', bmiStatus)