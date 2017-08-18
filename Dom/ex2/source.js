const button = document.querySelector('button');
const body = document.querySelector('body');
button.addEventListener('click', function() {
    body.classList.toggle('redColor');
});
// or if body  white make it purple
// if white  and make button  is purple starts as false.
// document.body is availbme in side the dom
