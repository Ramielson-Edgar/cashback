const button = document.querySelector('.btn-filter')
const filterItem = document.querySelectorAll('.statistics-filter__list-item')
const filterList = document.querySelector('.statistics-filter__list')
const inputGroup = document.querySelector('.filter-group')

const rows = document.querySelectorAll('.report-table__body')
const tableHeader = document.querySelectorAll('.report-table__header tr th' )


//fix list//
if (filterItem.length > 5 || inputGroup.classList.contains('isActive')) {
    filterList.style.paddingRight = '15px'
}

button.addEventListener('click', () => {
    inputGroup.classList.toggle('isActive')

    //fix list on active//
    if (inputGroup.classList.contains('isActive')) {
        document.querySelector('.statistics-filter-wrapper').style.height = "60%";
        filterList.style.paddingRight = '15px'
    } else {
        document.querySelector('.statistics-filter-wrapper').style.height = "80%"
        filterList.style.paddingRight = '0'
    }


})


//debounce //
const debounce = (fn, ms) => {
    let timeOut;
    return function () {
        const fnCall = () => {
            fn.apply(this, arguments)
        }
        clearTimeout(timeOut)
        timeOut = setTimeout(fnCall, ms)
    }
}

function onChange(e) {
    const filter = e.target.value.toLowerCase()

    button.addEventListener('click', () => {
        if (!inputGroup.classList.contains('isActive')) {
            e.target.value = ''
            inputGroup.classList.remove('isActive')
            filterItem.forEach(el => {el.style.display = ""})
        }
    })
    filterItem.forEach(el => {
        return el.querySelector('.statistics-filter__item-text').textContent.toLowerCase().startsWith(filter) ? el.style.display = "" : el.style.display = "none"

    })
}

onChange = debounce(onChange, 500)

document.querySelector('.filter-control').addEventListener('keyup', onChange)

 

