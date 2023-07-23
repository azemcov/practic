function newDiv(n,i){
  let newD = document.createElement('div');
  newD.id = n;
  newD.innerHTML=i;
  document.getElementById('section').append(newD);
}