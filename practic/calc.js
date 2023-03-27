
let a='';
let simb='';
let b='';
let aN=0;
let bN=0;
let p=false;
function clean(){p=false;a='';b='';simb='';aN=0;bN=0}
function clk(i){
  if (i=='pls'){simb='+';p=true;console.log(a+simb+b);}
  else if (i=='min'){simb='-';p=true;console.log(a+simb+b);}
  else if (i=='equ'&&simb=='+') {console.log(a+simb+b+'='+(aN+bN));clean()}
  else if (i=='equ'&&simb=='-') {console.log(a+simb+b+'='+(aN-bN));clean()}
  else if (i=='equ'&&simb=='') {console.log('no input')}
  else if (p===false) {a+=i;aN=Number(a);console.log(a+simb+b);}
  else if (p===true) {b+=i;bN=Number(b);console.log(a+simb+b);}
  else {}
}

// calc.clk('4')