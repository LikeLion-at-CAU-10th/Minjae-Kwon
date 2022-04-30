// const checkBox = document.getElementById('checkbox');
const checkBox = document.querySelector('.checkbox');

checkBox.addEventListener('click',toggleClick);

// function click() {
//   if (document.body.classList.contains('dark')) {
//     document.body.classList.remove('dark');
//     console.log('convert into Light Mode');
//   } else {
//     document.body.classList.add('dark');
//     console.log('convert into Dark Mode');
//   }
// }


// toggle
function toggleClick() {
  document.body.classList.toggle('dark');
  console.log('Working!');
}
