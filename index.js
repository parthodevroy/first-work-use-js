document.getElementById('btn-primary').addEventListener('click', function(e){
    e.preventDefault()

    const mobileNumber=1056698555
    const pinNumber=1056
    const mobilenumbervalue= document.getElementById('mobile-number').value
const mobilenumbervalueconverted=parseInt(mobilenumbervalue)

const pinnumbervalue=document.getElementById('pin-number').value
const pinnumbervalueconverted=parseInt(pinnumbervalue)

if (mobilenumbervalueconverted===mobileNumber&& 
    pinnumbervalueconverted===pinNumber) 
{
  window.location.href="./home.html"
    
}
else{
    alert('plese provide right pin number')
    
}
    
})