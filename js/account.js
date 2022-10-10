// diposit account calculation
document.getElementById('diposit-btn').addEventListener('click',function(){
    var dipositfield = document.getElementById('diposit-field')
    var Newdipositamount = parseFloat(dipositfield.value)
    var deposittotal = document.getElementById('diposit-dolor')
    var previousdiposit = parseFloat(deposittotal.innerText)
    var Currentdiposit = previousdiposit + Newdipositamount;
    deposittotal.innerText = Currentdiposit;
    dipositfield.value = '';
// balance account calculation
 var balancetotal = document.getElementById('balance-dolor')
 var previousbanance = parseFloat(balancetotal.innerText)
 var Currentbanance = previousbanance + Newdipositamount;
 balancetotal.innerText = Currentbanance;

})
// withdraw account calculation
 document.getElementById('withdraw-btn').addEventListener('click',function(){
    var withdrawfield = document.getElementById('withdraw-field')
    var Newwithdrawamount = parseFloat(withdrawfield.value)
    var withdrawtotal = document.getElementById('withdraw-dolor')
    var previouswithdraw = parseFloat(withdrawtotal.innerText)
    var Currentwithdraw = previouswithdraw + Newwithdrawamount;
    withdrawtotal.innerText = Currentwithdraw;
    withdrawfield.value = '';
// balance account calculation
 var balancetotal = document.getElementById('balance-dolor')
 var previousbanance = parseFloat(balancetotal.innerText)
 var Currentbanance = previousbanance - Newwithdrawamount;
 balancetotal.innerText = Currentbanance;
})
