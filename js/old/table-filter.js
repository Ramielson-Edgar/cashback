const buttons = document.querySelectorAll(".report-buttons__list-item button");
const headers = document.querySelectorAll(".report-table__header tr th");
const resetBtn = document.querySelector("#reset-btn")
const filterBtn = document.querySelectorAll('.filter-btn')
const tds = document.querySelectorAll('.report-table__body tr td')

//column//
const tdOrder = document.querySelectorAll(
    ".report-table__body tr td:first-child"
);
const tdOpenTime = document.querySelectorAll(
    ".report-table__body tr td:nth-child(2)"
);
const tdType = document.querySelectorAll(
    ".report-table__body tr td:nth-child(3)"
);
const tdSymbol = document.querySelectorAll(
    ".report-table__body tr td:nth-child(4)"
);
const tdOpenPrice = document.querySelectorAll(
    ".report-table__body tr td:nth-child(5)"
);
const tdClosePrice = document.querySelectorAll(
    ".report-table__body tr td:nth-child(6)"
);
const tdCommissions = document.querySelectorAll(
    ".report-table__body tr td:last-child"
);


function onHandleShowAllHeaders() {
    resetBtn.addEventListener('click', () => {
        headers.forEach(header => header.classList.remove('is-active'))

        const allTd = document.querySelectorAll('.report-table__body tr td')
        allTd.forEach(el => {
            el.classList.remove('is-active')
        })
    })
}
onHandleShowAllHeaders()

function onHandleHideColumn(td) {

    let visibleTds = Array.from(tds).filter(
        tabledTd =>
            !tabledTd.classList.contains('is-active')

    );
 
 

      if (td.length === visibleTds.length) {
        td.forEach(el => {
            el.classList.remove('is-active');
            
        });

    } else {
        td.forEach(el => {
            el.classList.toggle('is-active');
 
        });
    }


}


function onHandleHideHeader() {

    filterBtn.forEach((btn, btnIndex) => {
        btn.addEventListener('click', (e) => {
            const dataTarget = e.target.dataset.target;

            for (let i = 0; i < headers.length; i++) {
                let visibleHeaders = Array.from(headers).filter(header => !header.classList.contains('is-active'));

                if (i === btnIndex) {
                    headers[i].classList.toggle('is-active')
                    
                }

                if (dataTarget === "order") {
                    onHandleHideColumn(Array.from(tdOrder))
                }

                if (dataTarget === "open-time") {
                    onHandleHideColumn(Array.from(tdOpenTime))
                }

                if (dataTarget === "type") {
                    onHandleHideColumn(Array.from(tdType))
                }

                if (dataTarget === "symbol") {
                    onHandleHideColumn(Array.from(tdSymbol))
                }

                if (dataTarget === "open-price") {
                    onHandleHideColumn(Array.from(tdOpenPrice))
                }

                if (dataTarget === "close-price") {
                    onHandleHideColumn(Array.from(tdClosePrice))
                }

                if (dataTarget === "commissions") {
                    onHandleHideColumn(Array.from(tdCommissions))
                }


                if (visibleHeaders.length === 1) {
                    visibleHeaders[0].classList.remove('is-active')
                }

            }


        })
    })

}
onHandleHideHeader()


