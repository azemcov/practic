// При расширении одного класса другим, методы автоматически наследуются от родительского класса. 
// А переменные надо наследовать с помошью super
// метод модно расширить также испольщовав super

// speak() {
//   super.speak(); // Вызов метода родительского класса
//   console.log(`${this.name} лает.`); //тут дополняется метод
// }

{
    let findSection = document.getElementById('section')
    let newContainer = document.createElement('div')
    newContainer.id = 'container'
    findSection.append(newContainer)
      class Animal {
          constructor(name, age) {
              this.name = name;
              this.age = age;
              this.n = 99
          };
          myM() {
              this.n++
          }
      }
    
      class Dog extends Animal {
          constructor(name, age, bark, hairy) {
              super(name, age);
              if (bark > 7) {
                  this.bark = 'high'
              }
              else if (bark > 3) {
                  this.bark = 'medium'
              }
              else {
                  this.bark = 'low'
              };
              if (hairy > 7) {
                  this.hairy = 'high'
              }
              else if (hairy > 3) {
                  this.hairy = 'medium'
              }
              else {
                  this.hairy = 'low'
              }
          };
          showProp() {
              document.getElementById('container').innerHTML = `Name: ${this.name} <br>Age: ${this.age} <br>Bark: ${this.bark} <br>Hairy: ${this.hairy}`
          };
          showN() {
              console.log(this.n)
          }
      }
      let myDog = new Dog('Yosia', 2, 2, 2)
      myDog.showProp();
      myDog.myM();
      myDog.showN();
  }