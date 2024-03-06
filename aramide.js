const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
const para = document.querySelector('p')
const title = document.querySelector('h1')

function remark(){
    const eng = inputs[0].value * 1
    const mth = inputs[1].value - 0
    const avg = (eng + mth) / 2

    let status

    if(avg >= 70){
        status = 'Excellent'
    }
   else if(avg >= 60){
        status = 'Very Good'
    }
    else if(avg >= 50){
        status = 'Good'
    }
    else if(avg >= 40){
        status = 'Pass'
    }
    else{
        status = 'Fail'
    }


    para.textContent =  status
}

function remarks(){
    const eng = inputs[0].value * 1
    const mth = inputs[1].value - 0
    const avg = (eng + mth) / 2

    let status

     avg >= 70 ? status = 'Excellent'
    :avg >= 60 ? status = 'Very Good'
    :avg >= 50 ? status = 'Good'
    :avg >= 40 ? status = 'Pass'
    : status = 'Fail'

    para.textContent =  status
}

btn.addEventListener('click', remarks)

title.textContent += new Date().getHours() >= 16 ? 'Good evening': new Date().getHours() >= 12? 'Good Afternoon' : 'Good morning'
// console.log(remark(70,30))