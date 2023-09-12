document.getElementById('increaseBtn_1').addEventListener('click', function() {
  const caseInput = document.getElementById('inputItem_1');
  const caseCount = parseInt(caseInput.value);
  const caseNewCount = caseCount + 1;
  caseInput.value = caseNewCount;
  const caseTotal = caseNewCount * 50;
  document.getElementById('caseTotal_1').innerText = caseTotal;
})

