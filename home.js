const validpin=1234
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()

    const bank=document.getElementById('bank').value
    const addaccountnumber=document.getElementById('add-account-number').value
    const addamountnumber= parseInt(document.getElementById('add-amount-number').value)
    const addpinnumber= parseInt(document.getElementById('add-pin-number').value)
    if (addaccountnumber.length <11) {
        alert('plese provide valid account number')
        return;
        
    }
    if (addpinnumber!== validpin) {
        alert('plese provide valid pin number')
        return;
        
    }
    
    const availablebalance= parseInt(document.getElementById('available-balance').innerText)
    const totalnewavailablebalance=addamountnumber+availablebalance

    document.getElementById('available-balance').innerText=totalnewavailablebalance
})

document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display='none'
    document.getElementById('add-money-parent').style.display='block'
    
    
})
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display='none'
    document.getElementById('cash-out-parent').style.display='block'
})
// cash out oparation
document.getElementById('cash-out-btn').addEventListener('click', function(e){
e.preventDefault()
const agentnumber=document.getElementById('cash-out-agent').value
const cashoutamount= parseInt( document.getElementById('cash-witdraw').value)

const cashoutpin=document.getElementById('cash-out-pin').value

const availablebalance= parseInt(document.getElementById('available-balance').innerText)
const newcashoutbalance=availablebalance-cashoutamount

document.getElementById('available-balance').innerText=newcashoutbalance




})