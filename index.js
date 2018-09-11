function insertNum(num) {
  document.form.textview.value = document.form.textview.value + num;
}
function equal() {
  let equal = document.form.textview.value;
  if (equal) {
    document.form.text.value = eval(equal);
  }
}
function clean() {
  let clear = (document.form.textview.value = "");

  document.form.text.value = "0";
}
function backSpace() {
  let erase = document.form.textview.value;
  document.form.textview.value = erase.substring(0, erase.length - 1);
}
