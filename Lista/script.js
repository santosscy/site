var listaToDo = [];
function OpenEditModal() {
    var modal = document.querySelector('#editar');
    modal === null || modal === void 0 ? void 0 : modal.showModal();
}
function closeDeleteModal() {
    var modal = document.querySelector('#excluir');
    modal === null || modal === void 0 ? void 0 : modal.close();
}
function handleToDo() {
    var input = document.querySelector('#tarefa');
    if (input.value !== "") {
        var lista = document.querySelector('ul');
        var li = document.createElement('li');
        var div = document.createElement('div');
        var card = document.createElement('article');
        var texto = document.createTextNode(input.value);
        li.appendChild(card);
        card.appendChild(texto);
        card.appendChild(div);
        lista.appendChild(li);
        listaToDo.push(input.value);
    }
    input.value = "";
    console.log(listaToDo);
}
