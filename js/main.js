const inputs = document.querySelectorAll(".input");
const usernameInput = document.querySelector(".input-div.one input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
  if (this === usernameInput) {
    parent.style.top = "-2rem";
  }
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
    if (this === usernameInput) {
      parent.style.top = "0";
    }
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
