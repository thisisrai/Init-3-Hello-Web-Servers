function myFunction() {
  console.log(document.getElementById("text-input").value);
  var x = document.getElementById("text-input").value;
  document.getElementById("preview-render-box").innerHTML = x;
}
