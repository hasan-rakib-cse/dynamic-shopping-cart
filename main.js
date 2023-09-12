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
  const phoneTotal = (phoneNewCount * 200.20).toFixed(2);
  document.getElementById('phoneTotal').innerText = phoneTotal;
}

document.getElementById('caseIncrease').addEventListener('click', function() {
  handleCaseChange(true);
})
document.getElementById('caseDecrease').addEventListener('click', function() {
  handleCaseChange(false);
})

function handleCaseChange(isIncrease) {
  const caseInput = document.getElementById('caseCount');
  const caseCount = parseInt(caseInput.value);
  let caseNewCount = caseCount;
  if(isIncrease == true) {
    caseNewCount = caseCount + 1;
  }
  if(isIncrease == false && caseCount > 1) {
    caseNewCount = caseCount - 1;
  }
  caseInput.value = caseNewCount;
  const caseTotal = (caseNewCount * 50.25).toFixed(2);
  document.getElementById('caseTotal').innerText = caseTotal;
}