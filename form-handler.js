
function showThankYou() {
    document.querySelector("form").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 30000);
    return false;
  }