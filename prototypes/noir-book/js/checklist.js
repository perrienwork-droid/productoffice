// Clickable checklists — toggle checked state
document.addEventListener('click', function(e) {
  const li = e.target.closest('.checklist li');
  if (li) li.classList.toggle('checked');
});
