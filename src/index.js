const onClickedAdd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  createIncompleteList(inputText);
}

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
}

// 未完了リストに追加
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list_row"

  const li = document.createElement("li");
  li.innerText = text;

  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {

    // 未完了リストから削除
    deleteFromIncompleteList(complateButton.parentNode);

    // 完了リストに追加
    const addTarget = complateButton.parentNode;

    // todoテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete_list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    })

    // 子要素に要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete_list").appendChild(addTarget);
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {

    // 未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  })

  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete_list").appendChild(div);
}

document.getElementById("add_button").addEventListener("click", () => onClickedAdd());