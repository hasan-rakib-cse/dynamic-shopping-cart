function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + 'Count');
  const productCount = getInputValue(product);
  let productNewCount = productCount;

  if(isIncrease == true) {
      productNewCount = productCount + 1;
  }
  if(isIncrease == false && productCount > 1) {
      productNewCount = productCount - 1;
  }

  productInput.value = productNewCount;

  let productTotal = 0;
  if(product == 'phone') {
      productTotal = parseFloat((productNewCount * 200.20).toFixed(2));
  }
  if(product == 'case') {
      productTotal = parseFloat((productNewCount * 50.25).toFixed(2));
  }

  document.getElementById(product + 'Total').innerText = productTotal;
  
  calculateTotal();
}


function calculateTotal() {
  const phoneCount = getInputValue('phone');
  const caseCount = getInputValue('case');

  // Sub Total
  const subTotal = parseFloat((phoneCount * 200.20 + caseCount * 50.25).toFixed(2));
  document.getElementById('subTotal').innerText = subTotal;

  // Tax
  const totalTax = parseFloat((subTotal * .05).toFixed(2));
  document.getElementById('tax').innerText = totalTax;

  // Grand Total
  const grandTotal = parseFloat((parseFloat(subTotal + totalTax)).toFixed(2));
  document.getElementById('total').innerText = grandTotal;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + 'Count');
  const productCount = parseInt(productInput.value);
  return productCount;
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