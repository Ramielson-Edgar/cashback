const button = document.querySelector('.btn-filter')
const filterItem = document.querySelectorAll('.statistics-filter__list-item')
const filterList = document.querySelector('.statistics-filter__list')
const inputGroup = document.querySelector('.filter-group')
const scrollContainer = document.querySelector('.statistics-filter-wrapper');

//on handle active filter //
button.addEventListener("click", () => {
    inputGroup.classList.toggle('is-active')

    if (inputGroup.classList.contains('is-active') && filterItem.length > 5) {
        filterList.style.paddingRight = "15px"
    }

    if (filterItem.length > 6 && inputGroup.classList.contains('is-active')) {
        filterList.style.paddingRight = "15px"
    }


    if (filterItem.length === 6 && !inputGroup.classList.contains('is-active')) {
        filterList.style.paddingRight = "0"
    }


    scrollContainer.classList.toggle('is-active')

})

//check if item more than 6 do something.. //
if (filterItem.length > 6) {
    filterList.style.paddingRight = "15px"
} else {
    filterList.style.paddingRight = "0"
}

//correction on mobile// 
if (window.innerWidth <= 575) {

    button.addEventListener("click", () => {
    if (inputGroup.classList.contains('is-active') && filterItem.length >= 5) {
        filterList.style.paddingRight = "15px"
    }

    if (filterItem.length >= 5 && inputGroup.classList.contains('is-active')) {
        filterList.style.paddingRight = "15px"
    }


    if (filterItem.length === 6 && !inputGroup.classList.contains('is-active')) {
        filterList.style.paddingRight = "15px"
    }

    
    if (!inputGroup.classList.contains('is-active') && filterItem.length === 5 ) {
        filterList.style.paddingRight = "0"
    }

    })

    if (filterItem.length >= 6) {
        filterList.style.paddingRight = "15px"
    } else {
        filterList.style.paddingRight = "0"
    }

}

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
            filterItem.forEach(el => { el.style.display = "" })
        }
    })
    filterItem.forEach(el => {
        return el.querySelector('.statistics-filter__item-text').textContent.toLowerCase().startsWith(filter) ? el.style.display = "" : el.style.display = "none"

    })
}

onChange = debounce(onChange, 500)

document.querySelector('.filter-control').addEventListener('keyup', onChange)

//active filter sort table//
document.querySelector('.report-header .btn-filter').addEventListener("click",()=>{
  const table = document.querySelector('.report-table')
  table.classList.toggle('sortable')
 
})

