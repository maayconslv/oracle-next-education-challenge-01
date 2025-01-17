const friendsList = [];

function adicionarAmigo() {
  const friendName = document.querySelector(".input-name").value;

  renderFriend(friendName);
}

function renderFriend(friendName) {
  const friendNameListItem = document.createElement("li");
  const friendNameListContainer = document.querySelector(".name-list");
  friendNameListContainer.appendChild(friendNameListItem);
  document.querySelector(".input-name").value = ''; // reset input value on submit
  
  friendsList.push(friendName);

  friendNameListItem.classList.add('friendNameListItem');
  friendNameListItem.textContent = friendName;
}

function sortearAmigo() {
  const selectedFriend = document.querySelector(".result-list");
  const selectedNumber = Math.floor(Math.random() * friendsList.length);
  
  selectedFriend.textContent = friendsList[selectedNumber];
}
