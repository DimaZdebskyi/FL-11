const maxlistRowsLength = 10;
const zero = 0;
const two = 2;

let rootNode = document.getElementById('root');
let inputField = document.getElementById('input-field');
let addButton = document.getElementById('add-button');
let listContainer = document.getElementById('list');
let disabledButton = document.getElementsByClassName('disabled')[zero];
let notification = document.getElementsByClassName('notification')[zero];
let rowsCount = document.getElementsByClassName('list-row');

addButton.addEventListener('click', function() {
  disabledButton = document.getElementsByClassName('disabled')[zero];
  if (!disabledButton) {
    let text = inputField.value;
    createTask(text);
    inputField.value = '';
    addButton.classList.add('disabled');
  }
});

function createTask(text) {
  let listRow = document.createElement('div');
  listRow.classList.add('list-row');
  listRow.setAttribute('draggable',true);

  maxListLength();

  let checkAndText = document.createElement('div');
  checkAndText.className = 'check-and-text';
  
  let checkBox = document.createElement('i');
  checkBox.className = 'material-icons check-box';
  checkBox.innerText = 'check_box_outline_blank';

  let rowText = document.createElement('p');
  rowText.className = 'row-text';
  rowText.innerText = text;

  let editRow = document.createElement('i');
  editRow.className = 'material-icons edit-row';
  editRow.innerText = 'edit';

  let deleteRow = document.createElement('i');
  deleteRow.className = 'material-icons delete-row';
  deleteRow.innerText = 'delete';

  let editInput = document.createElement('input');
  editInput.className = 'edit-input';
  editInput.style.display = 'none';
  editInput.value = text;

  let saveRow = document.createElement('i');
  saveRow.className = 'material-icons save-row';
  saveRow.style.display = 'none';
  saveRow.innerText = 'save';

  listContainer.appendChild(listRow);
  listRow.appendChild(checkAndText);
  checkAndText.appendChild(checkBox);
  checkAndText.appendChild(rowText);
  checkAndText.appendChild(editRow);
  listRow.appendChild(deleteRow);
  listRow.appendChild(editInput);
  listRow.appendChild(saveRow);

  deleteRow.addEventListener('click', function(e) {
    e.target.parentNode.remove();
    maxListLength();
  });

  editRow.addEventListener('click', function() {
    checkBox.style.display = 'none';
    rowText.style.display = 'none';
    editRow.style.display = 'none';
    deleteRow.style.display = 'none';
    editInput.style.display = 'block';
    saveRow.style.display = 'block';
  });

  saveRow.addEventListener('click', function() {
    checkBox.style.display = 'block';
    rowText.style.display = 'block';
    editRow.style.display = 'block';
    deleteRow.style.display = 'block';
    editInput.style.display = 'none';
    saveRow.style.display = 'none';
    rowText.innerText = editInput.value;
  })

  checkBox.addEventListener('click', function() {
    checkBox.innerText = 'check_box';
  });
}

inputField.addEventListener('input', function () {
  if (maxListLength()) {
    if (inputField.value.trim !== '') {
      addButton.classList.remove('disabled'); 
    } else {
      addButton.classList.add('disabled');
    }
  }
});

function maxListLength() {
  rowsCount = document.getElementsByClassName('list-row');
  if (rowsCount.length >= maxlistRowsLength) {
    addButton.classList.add('disabled');
    notification.style.display = 'block';
    return false;
  } else {
    addButton.classList.remove('disabled');
    notification.style.display = 'none';
    return true;
  }
}

function actionTarget(e) {
  let target = e.target;
  if (target.hasAttribute('draggable')) {
    return target;
  }
}
let draggableElement = null;
let dropPosition = null;

listContainer.addEventListener('dragstart', function(e) {
  draggableElement = actionTarget(e);
  if (!draggableElement) {
    return;
  }
  draggableElement.style.opacity = '.7';
}, false);

listContainer.addEventListener('dragend', function() {
  draggableElement.style.opacity = '';
});

listContainer.addEventListener('dragover',function(e) {
  e.preventDefault();
  let dropPosition = actionTarget(e);
  if (!dropPosition) {
    return;
  }
});

listContainer.addEventListener('dragleave', function(e) {
  let dropPosition = actionTarget(e);
  if (!dropPosition) {
    return;
  }
});

listContainer.addEventListener('drop', function (e) {
  dropPosition = actionTarget(e);
  if (!dropPosition) {
    return;
  }
  e.preventDefault();
  let rect = dropPosition.getBoundingClientRect();
  let midline = rect.top + (rect.bottom - rect.top) / two;
  let afterDropPosition = midline <= e.clientY ? dropPosition.nextSibling : dropPosition;
  listContainer.insertBefore(draggableElement, afterDropPosition);
});