var field = document.getElementById('result_field');

/* Returns array of all elements with name 'display' */
numbers = document.getElementsByClassName('display');

for (i = 0; i < numbers.length; i ++) {
  numbers[i].setAttribute('onclick', 'post(this)');
};

function erase() {
  field.value = '';
};

/* Creates */
function post(me) {
  field.value += me.innerHTML;
};

/* */
function submit() {
  var input = field.value;
  //eval function insecure?
  result_field.value = eval(input);
};
