let BotaoADD = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
let Tarefas = document.getElementById('tarefas');
let Marcado = false;

BotaoADD.addEventListener('click', function() {
    if(Input.value != '') {
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa);
        tarefa.innerText = '- ' + Input.value;
        Input.value = '';
        tarefa.addEventListener('click', function() {
            if(Marcado == false) {
                tarefa.style.textDecoration = 'line-through';
                Marcado = true;
            } else {
                tarefa.style.textDecoration = '';
                Marcado = false;
            }
        })
        tarefa.addEventListener('dblclick', function() {
            Tarefas.removeChild(tarefa);
        })
    }
});