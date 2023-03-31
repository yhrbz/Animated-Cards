function toggleActiveClass(activeNow) {
  const activeElems = document.querySelectorAll('.active');
  activeElems.forEach(elem => {
    elem.classList.remove('active');
  });

  const activeElement = document.querySelector(activeNow);
  activeElement.classList.add('active');
}