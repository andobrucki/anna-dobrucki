const cursor = document.getElementById("cursor-circle");
document.body.addEventListener("mousemove", function (e) {
  (cursor.style.left = e.clientX + "px"), (cursor.style.top = e.clientY + "px");
});

function sendMail() {
  const user = "hello";
  const domain = "annadobrucki.com";
  window.location.href = "mailto:" + user + "@" + domain;
}
