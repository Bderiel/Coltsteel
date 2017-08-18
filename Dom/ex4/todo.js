// mouse over element
const lis = document.querySelectorAll('li');
for (let i=0; i<lis.length; i++) {
    lis[i].addEventListener('mouseover', function() {
        lis[i].style.color='green'; // this
        lis[i].addEventListener('mouseout', function() {
            lis[i].style.color='black'; // use this key instead of lis[i] classes are better than this
        });
        lis[i].addEventListener('click', function() {
            lis[i].classList.toggle('done'); // this
        });
    });
}
