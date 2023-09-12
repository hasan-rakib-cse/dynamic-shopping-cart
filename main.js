// document.getElementById('increaseBtn_1').addEventListener('click', function() {
//   const caseInput = document.getElementById('inputItem_1');
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount + 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 50;
//   document.getElementById('caseTotal_1').innerText = caseTotal;
// })

// document.getElementById('decreaseBtn_1').addEventListener('click', function() {
//   const caseInput = document.getElementById('inputItem_1');
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount - 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 50;
//   document.getElementById('caseTotal_1').innerHTML = caseTotal;
// })

document.getElementById('increaseBtn_1').addEventListener('click', function() {
  handleProducrChange(true);
})

document.getElementById('decreaseBtn_1').addEventListener('click', function() {
  handleProducrChange(false)
})

function handleProducrChange(isIncrease) {
  const caseInput = document.getElementById('inputItem_1');
  const caseCount = parseInt(caseInput.value);
  let caseNewCount = caseCount;

  if(isIncrease == true) {
    caseNewCount = caseCount + 1;
  }
  if(isIncrease == false) {
    caseNewCount = caseCount - 1;
  }

  caseInput.value = caseNewCount;
  const caseTotal = caseNewCount * 50;
  document.getElementById('caseTotal_1').innerHTML = caseTotal;
}