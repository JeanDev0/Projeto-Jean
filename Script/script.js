let botao = document.getElementById("btn-fazendo")
let input = document.getElementById("input-fazendo")
let lista = document.getElementById("lista-fazendo")
let concluido = document.getElementById("lista-feito")

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        botao.click(); 
    }
});

botao.addEventListener("click",() =>{
    let texto = input.value;
    if (!texto) return;
    
    let li = document.createElement("li");

    li.innerHTML = `
        <input class="finalizado" type="checkbox">
        ${texto}
    `;

    const checkbox = li.querySelector(".finalizado");

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            concluido.appendChild(li);
        } else {
            lista.appendChild(li);
        }

    })

    lista.appendChild(li);
    input.value = "";

})

