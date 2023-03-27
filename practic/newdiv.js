function newDiv(n,i){
  let newDiv = document.createElement('div');
  newDiv.id = n;
  newDiv.innerHTML=i;
  document.getElementById('section').append(newDiv);
}