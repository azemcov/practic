{
    //создаём кнопку
    let newButton = document.createElement('button')
    newButton.id='button'
    newButton.innerHTML='Добавить элемент'
    document.getElementById('section').append(newButton)
    //
    let i=1;
    let a = document.getElementById('button').onclick = function () {
        let newDiv = document.createElement('div');
        newDiv.id = `div${i}`;
        newDiv.innerHTML = 'dddd';
        document.getElementById('button').after(newDiv);
        i++;
    }
}