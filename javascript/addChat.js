function postIt(){
  var node = document.createElement("div");
  var chat = document.getElementById('chitChat').value; 
  var place = document.getElementById('talk')
  chatText = document.createTextNode(chat);
//place.innerHTML = chat.value;
  node.appendChild(chatText);
console.log("hi");
  post = document.getElementById('talk').appendChild(node);
  post.innerHTMl = chat;
}