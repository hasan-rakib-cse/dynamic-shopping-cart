// function handleProducrChange(isIncrease) {
//   const phoneInput = document.getElementById('phoneCount');
//   const phoneCount = parseInt(phoneInput.value);
//   let phoneNewCount = phoneCount;
//   if(isIncrease == true) {
//     phoneNewCount = phoneCount + 1;
//   }
//   if(isIncrease == false && phoneCount > 1) {
//     phoneNewCount = phoneCount - 1;
//   }
//   phoneInput.value = phoneNewCount;
//   const phoneTotal = (phoneNewCount * 200.20).toFixed(2);
//   document.getElementById('phoneTotal').innerText = phoneTotal;
// }

// function handleCaseChange(isIncrease) {
//   const caseInput = document.getElementById('caseCount');
//   const caseCount = parseInt(caseInput.value);
//   let caseNewCount = caseCount;
//   if(isIncrease == true) {
//     caseNewCount = caseCount + 1;
//   }
//   if(isIncrease == false && caseCount > 1) {
//     caseNewCount = caseCount - 1;
//   }
//   caseInput.value = caseNewCount;
//   const caseTotal = (caseNewCount * 50.25).toFixed(2);
//   document.getElementById('caseTotal').innerText = caseTotal;
// }


function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + 'Count');
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;

  if(isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if(isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }

  productInput.value = productNewCount;

  let productTotal = 0;
  if(product == 'phone') {
    productTotal = (productNewCount * 200.20).toFixed(2);
  }
  if(product == 'case') {
    productTotal = (productNewCount * 50.25).toFixed(2);
  }

  document.getElementById(product + 'Total').innerText = productTotal;
}

document.getElementById('phoneIncrease').addEventListener('click', function() {
  handleProductChange('phone', true);
})
document.getElementById('phoneDecrease').addEventListener('click', function() {
  handleProductChange('phone', false)
})

document.getElementById('caseIncrease').addEventListener('click', function() {
  handleProductChange('case', true);
})
document.getElementById('caseDecrease').addEventListener('click', function() {
  handleProductChange('case', false);
})