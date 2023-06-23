let listaToDo: string [] = []

function OpenEditModal(){
    let modal: HTMLDialogElement | null 
    = document.querySelector('#editar')!;

    modal?.showModal();
}

function closeDeleteModal(){
    let modal: HTMLDialogElement | null 
    = document.querySelector('#excluir')!;

    modal?.close()
}


function handleToDo(){
    let input: HTMLInputElement | null = 
    document.querySelector('#tarefa')!;

    if(input.value !== ""){
        let lista: HTMLUListElement | null =
        document.querySelector('ul')!;

        let li: HTMLLIElement = 
        document.createElement('li');
         
        let div : HTMLDivElement =
        document.createElement('div')

        let card: HTMLElement =
        document.createElement('article');

        let texto = 
        document.createTextNode(input.value);

        li.appendChild(card);
        card.appendChild(texto);
        card.appendChild(div)

        lista.appendChild(li);

        listaToDo.push(input.value)

    }
    listaToDo.push(input)

    input.value="";
    console.log(listaToDo);
}