function addEvent(id, ename, fn) {
  document.getElementById(id).addEventListener(ename, fn);
}

addEvent('create-product', 'click', () => {
  createModal('product');
  // fetch('/products', {
  //   method: 'POST',
  //   body: ''
  // })
  //   .then(res => res.text())
  //   .then(console.log);
});

addEvent('delete', 'click', () => {
  fetch('/products/1', {
    method: 'DELETE'
  })
    .then(res => res.text())
    .then(console.log);
});

function render() {
  const productList = document.getElementById('products-list');
  fetch('/products')
    .then(res => res.json())
    .then(data => {
      data.forEach(prod => {
        const productListItem = document.createElement('div');
        productListItem.className = 'list-item';
        productListItem.innerHTML = `<div>${prod.name}</div><div class="list-item-fixed">${prod.article}</div>`;
        productList.append(productListItem);
      });
    })
}

render();

function createModal(type) {
  const modalBackground = document.createElement('div');
  modalBackground.className = 'modal-bg';
  document.body.append(modalBackground);

  const modal = document.createElement('div');
  modal.className = 'modal';
  switch (type) {
    case 'product': {
      const label = document.createElement('label');
      label.innerText = 'Наименование';
      const input = document.createElement('input');
      input.type = 'text';
      modal.append(label, input);
    }
  }
  modalBackground.append(modal);
}