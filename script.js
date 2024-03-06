//conditional statements
function fifty(num){
    let status
    if(num >= 50){
       status = 'yes'
    }
    else{
        status = 'no'
    }

    return status
  
}

function grade(score){
    let val 

    if(score >= 0 && score <= 100){

        if(score >= 70){
            val = 'A'
        }
        else if(score >= 60){
            val = 'B'
        }
        else if(score >= 50){
            val = 'C'
        }
        else if(score >= 40){
            val = 'P'
        }
        else{
            val = 'FF'
        }
    }
    else{
        val = 'invalid score'
    }

    return val
}


