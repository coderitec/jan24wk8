const spans = document.querySelectorAll('span:first-of-type')

function setClock(){
    const hour = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()
    spans[0].textContent = hour

    const minutes = new Date().getMinutes()
    spans[1].textContent = minutes < 10 ? '0' + minutes : minutes

    const seconds = new Date().getSeconds()
    spans[2].textContent = seconds < 10 ? '0' + seconds : seconds

    const mille = new Date().getMilliseconds()
    spans[3].textContent = mille

    spans[4].textContent = new Date().getHours() < 12 ? 'AM' : 'PM'

    setTimeout(()=>setClock(), 200)
}

setClock()