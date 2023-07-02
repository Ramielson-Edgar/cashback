const button = document.querySelector('.btn-filter')
const filterItem = document.querySelectorAll('.statistics-filter__list-item')
const filterList = document.querySelector('.statistics-filter__list')
const inputGroup = document.querySelector('.filter-group')
const scrollContainer = document.querySelector('.statistics-filter-wrapper');
const totalValue = document.querySelector('.totals__list-item:first-child .totals__item-body-value')
const chartHeading = document.querySelector('.chart-total-heading')

// //on handle active filter //
button.addEventListener("click", () => {
    inputGroup.classList.toggle('is-active')
    scrollContainer.classList.toggle('is-active')

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
            filterItem.forEach(el => { el.style.display = "" })
        }
    })
    filterItem.forEach(el => {
        return el.querySelector('.statistics-filter__item-text').textContent.toLowerCase().startsWith(filter) ? el.style.display = "" : el.style.display = "none"

    })
}

onChange = debounce(onChange, 500)

document.querySelector('.filter-control').addEventListener('keyup', onChange)

//render total cashback inside canvas//
chartHeading.innerHTML =totalValue.textContent