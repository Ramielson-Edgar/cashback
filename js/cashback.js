const button = document.querySelector('.btn-filter')
const filterMenu = document.querySelector('.filter-dropdown')
const filterList = document.querySelector('.statistics-filter__list')
const filterItem = document.querySelectorAll('.statistics-filter__list-item')
 
//fix list padding//
if(filterItem.length > 5) {
    filterList.style.paddingRight = '15px'
}


button.addEventListener('click', ()=>{
    filterMenu.classList.toggle('show')
})

//color generator // 

function generateColorProgressBar () {
    const randomRgb = 'rgba(' +  Math.round(Math.random()*255) + ',' +  Math.round(Math.random()*255) + ',' +  Math.round(Math.random()*255) + ')';
}

generateColorProgressBar ()


 