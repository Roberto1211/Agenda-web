$("#tabla tr").not(":first").each(function () {
  $(this).append(
    '<td>' +
    '<a href="#">' +
    '<button class="edit-button">' +
    '<i class="bx bxs-edit-alt"></i>' +
    '</button>' +
    '</a>' +
    '<a href="#">' +
    '<button class="delete-button">' +
    '<i class="bx bxs-trash"></i>' +
    '</button>' +
    '</a>' +
    '</td>'
  );
});

const colorItems = document.querySelectorAll('.colorItem');
const buttons = document.querySelectorAll('.changeColor');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const currentColor = colorItems[i].style.backgroundColor;
    if (currentColor === '' || currentColor === 'white') {
      colorItems[i].style.backgroundColor = 'green';
    } else if (currentColor === 'green') {
      colorItems[i].style.backgroundColor = 'yellow';
    } else if (currentColor === 'yellow') {
      colorItems[i].style.backgroundColor = 'red';
    } else {
      colorItems[i].style.backgroundColor = 'white';
    }
  });
}
