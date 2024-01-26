function updatePrice(inputElement) {
    let quantity = parseInt(inputElement.value);
    const priceElement = document.querySelector('.purchase__price');
    if (quantity > 1000) {
      quantity = 1000;
      inputElement.value = quantity;
    }
    if (quantity === 1) {
      priceElement.textContent = '99$';
    } else if (quantity >= 2 && quantity <= 4) {
      priceElement.textContent = `${99 + (quantity - 1) * 29}$`;
    } else if (quantity >= 5 && quantity <= 9) {
      priceElement.textContent = `${99 + (quantity - 1) * 22}$`;
    } else if (quantity >= 10 && quantity <= 49) {
      priceElement.textContent = `${99 + (quantity - 1) * 17}$`;
    } else if (quantity >= 50 && quantity <= 1000) {
      priceElement.textContent = `${99 + (quantity - 1) * 12}$`;
    } else {
      priceElement.textContent = '';
    }
  }