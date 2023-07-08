const item = document.querySelector('.row__item');
const placeholders = document.querySelectorAll('.row__placeholder');

const dragover = (evt) => {
  evt.preventDefault();
}

const dragenter = (evt) => {
  evt.target.classList.add('row__placeholder_hovered');
}

const dragleave = (evt) => {
  evt.target.classList.remove('row__placeholder_hovered');
}

const dragdrop = (evt) => {
  evt.target.classList.remove('row__placeholder_hovered');
  evt.target.append(item);
}

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
});

const dragstart = (evt) => {
  evt.target.classList.add('row__item_hold');
  setTimeout(() => {
    evt.target.classList.add('row__item_hide');
  }, 0);
}

const dragend = (evt) => {
  evt.target.classList.remove('row__item_hold', 'row__item_hide');
}

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);