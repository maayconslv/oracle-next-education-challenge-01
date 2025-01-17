const friendsList = [];

function adicionarAmigo() {
  const friendName = document.querySelector(".input-name").value;

  renderFriend(friendName);
}

function renderFriend(friendName) {
  const friendNameListItem = document.createElement("li");
  const friendNameListContainer = document.querySelector(".name-list");
  friendNameListContainer.appendChild(friendNameListItem);
  friendsList.push(friendName);

  document.querySelector(".input-name").value = ''; // reset input value on submit

  friendNameListItem.classList.add('friendNameListItem');
  friendNameListItem.textContent = friendName;
}
