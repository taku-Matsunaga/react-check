const onClickedAdd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  const div = document.createElement("div");
  div.className = "list_row"

  const li = document.createElement("li");
  li.innerText = inputText;

  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    alert("完了");
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete_list").removeChild(deleteTarget);
  })
  // console.log(deleteButton);

  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete_list").appendChild(div);
}

document.getElementById("add_button").addEventListener("click", () => onClickedAdd());