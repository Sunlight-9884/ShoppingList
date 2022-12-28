const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingrListTag = document.getElementsByClassName(
  "shoppingListContainer"
)[0];
let productId = 1;
const handleChange = (event) => {
  const inputValue = event.target.value;
  const productContainer = document.createElement("div");
  productContainer.classList.add("productContainer");
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("productName");
  parentDiv.addEventListener("click", () => {
    const classExit = parentDiv.classList.contains("purchased");
    if (classExit) {
      parentDiv.classList.remove("purchased");
    } else {
      parentDiv.classList.add("purchased");
    }
  });
  //<i class="fa-solid fa-trash"></i>
  const spanTag = document.createElement("span");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");
  trashIcon.addEventListener("click", (event) => {
    console.log("trash icon click...", productContainer.remove());
  });
  spanTag.id = productId;

  const product = productId.toString() + ". " + inputValue;
  spanTag.append(product);
  parentDiv.append(spanTag);
  productContainer.append(parentDiv, trashIcon);
  shoppingrListTag.append(productContainer);
  inputTag.value = "";
  productId += 1;
};

inputTag.addEventListener("change", handleChange);
