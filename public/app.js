console.log('Клиентский скрипт')

document.querySelectorAll('.price').forEach( node =>{
    node.textContent = new Intl.NumberFormat('ru-RU', {
        currency: "rub",
        style: 'currency'
    }).format(node.textContent)
    }
)