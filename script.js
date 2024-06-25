const buttonForEach = document.querySelector(".button-forEach")
const buttonMap = document.querySelector(".button-map")
const buttonReduce = document.querySelector(".button-reduce")
const buttonFilter = document.querySelector(".button-filter")
const listItens = document.querySelector("ul")

function formatCurrency(value) {
    const newValue = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(value)
    return newValue
}

function showAll(array) {
    let myLi = ''
    array.forEach(option => {
        myLi += `<li>
                    <img src=${option.src}> 
                    <p>${option.name}</p> 
                    <p class="item-price">${formatCurrency(option.price)}</p>  
                </li>`
    })
    listItens.innerHTML = myLi
}

function mapAll() {
    const menuOptionsDescont = menuOptions.map(option => ({
        ...option,
        price: option.price * .9
    }))
    showAll(menuOptionsDescont)
}

function recudeAll() {
    const sumAll = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    listItens.innerHTML = `<li>
                                <p>A soma de todos os itens do menu é:</p> 
                                <p class="item-price">${formatCurrency(sumAll)}</p>  
                            </li>`
}

function filterAll() {
    const menuFilter = menuOptions.filter(option => option.vegan)
    showAll(menuFilter)
}

buttonForEach.addEventListener("click", () => showAll(menuOptions))
buttonMap.addEventListener("click", mapAll)
buttonReduce.addEventListener("click", recudeAll)
buttonFilter.addEventListener("click", filterAll)