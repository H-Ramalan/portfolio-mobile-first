let alertShow = false;

setInterval(() => {
  document.title = alertShow ? "Come back!" : "Coding is fun!";
  alertShow = !alertShow;
}, 1000);
