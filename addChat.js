function postIt(chat){
  //var node = document.createElement("div");
  //var chat = document.getElementById('chitChat').value; 
chatText = document.createTextNode(chat);
console.log(chatText);
//node.appendChild(chatText);
console.log("hi");
post = document.getElementById('talk')//.appendChild(node);
post.innerHTMl = chat;
}