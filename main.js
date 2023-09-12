// document.getElementById('phoneIncrease').addEventListener('click', function() {
//   const caseInput = document.getElementById('phoneCount');
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount + 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 50;
//   document.getElementById('phoneTotal').innerText = caseTotal;
// })

// document.getElementById('phoneDecrease').addEventListener('click', function() {
//   const caseInput = document.getElementById('phoneCount');
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount - 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 50;
//   document.getElementById('phoneTotal').innerHTML = caseTotal;
// })

document.getElementById('phoneIncrease').addEventListener('click', function() {
  handleProducrChange(true);
})

document.getElementById('phoneDecrease').addEventListener('click', function() {
  handleProducrChange(false)
})

function handleProducrChange(isIncrease) {
  const phoneInput = document.getElementById('phoneCount');
  const phoneCount = parseInt(phoneInput.value);
  let phoneNewCount = phoneCount;
  if(isIncrease == true) {
    phoneNewCount = phoneCount + 1;
  }
  if(isIncrease == false && phoneCount > 1) {
    phoneNewCount = phoneCount - 1;
  }
  phoneInput.value = phoneNewCount;
  const phoneTotal = phoneNewCount * 50;
  document.getElementById('phoneTotal').innerHTML = phoneTotal;
}