const images = document.querySelectorAll('.image');

let dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function handleDragEnd(e) {
  this.style.opacity = '1';
  images.forEach(img => img.classList.remove('over'));
}

images.forEach(img => {
  img.addEventListener('dragstart', handleDragStart, false);
  img.addEventListener('dragover', handleDragOver, false);
  img.addEventListener('drop', handleDrop, false);
  img.addEventListener('dragend', handleDragEnd, false);
});
