const friendsList = [];

function adicionarAmigo() {
  const friendName = document.querySelector(".input-name").value;

  if (!friendName.trim() > 0) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  renderFriend(friendName);
}

let nome = "nome";
let nome = "nome";

function renderFriend(friendName) {
  const friendNameListItem = document.createElement("li");
  const friendNameListContainer = document.querySelector(".name-list");
  friendNameListContainer.appendChild(friendNameListItem);
  document.querySelector(".input-name").value = ''; // reset input value on submit
  
  friendsList.push(friendName);

  friendNameListItem.textContent = friendName;
}

function sortearAmigo() {
  if (friendsList.length <= 3) {
    alert("Por favor, adicione mais amigos para sortear.");
    return;
  }

  const selectedFriend = document.querySelector(".result-list");
  const selectedNumber = Math.floor(Math.random() * friendsList.length);
  
  selectedFriend.textContent = `${friendsList[selectedNumber]} foi sorteado(a)`;
}
