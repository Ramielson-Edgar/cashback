const buttons = document.querySelectorAll(".report-buttons__list-item button");
const headers = document.querySelectorAll(".report-table__header tr th");
const tableBody = document.querySelector(".report-table__body");
const rows = document.querySelectorAll(".report-table__body tr");

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


function removeNewTr() {
    for (var i = tableBody.children.length - 1; i >= 0; i--) {
        var childElement = tableBody.children[i];

        if (childElement.id === "type" || childElement.id === "symbol" || childElement.id === "commissions" ||
            childElement.id === "open-time" || childElement.id === "open-price" || childElement.id === "close-price" ||
            childElement.id === "order") {
            tableBody.removeChild(childElement);
        }
    }
}



function createNewCompleteRow(td, id) {
    removeNewTr()

    const textArray = [];

    td.forEach((text) => textArray.push(text.textContent));

    let currentTrElement = null;
    let currentIndex = 0;

    while (currentIndex < textArray.length) {


        if (!currentTrElement) {
            currentTrElement = document.createElement("tr");
            currentTrElement.id = id;
        }

        const tdElement = document.createElement("td");

        tdElement.textContent = textArray[currentIndex];

        currentTrElement.appendChild(tdElement);

        currentIndex++;

        if (currentTrElement.childElementCount >= 8 || currentIndex === textArray.length) {

            tableBody.appendChild(currentTrElement);
            currentTrElement = null;
        }


    }
}



buttons.forEach((el) => {
    el.addEventListener("click", (e) => {
        const buttonText = el.textContent.trim();
        const dataTarget = e.target.dataset.target;

        if (dataTarget === "order") {
            createNewCompleteRow(tdOrder, "order");
        }

        if (dataTarget === "open-time") {
            createNewCompleteRow(tdOpenTime, "open-time");
        }

        if (dataTarget === "type") {
            createNewCompleteRow(tdType, "type");
        }

        if (dataTarget === "symbol") {
            createNewCompleteRow(tdSymbol, "symbol");
        }

        if (dataTarget === "open-price") {
            createNewCompleteRow(tdOpenPrice, "open-price");
        }

        if (dataTarget === "close-price") {
            createNewCompleteRow(tdClosePrice, "close-price");
        }

        if (dataTarget === "commissions") {
            createNewCompleteRow(tdCommissions, "commissions");
        }

        headers.forEach((el) => {
            const th = el.textContent;

            //sort headers//
            if (buttonText === th) {
                el.style.display = "";
                el.style.borderRight = "unset";
                rows.forEach((el) => (el.style.display = "none"));
            } else {
                el.style.display = "none";
            }

            //when click show all headers//
            if (buttonText === "all") {
                el.style.display = "";
                el.style.borderRight = "";
                rows.forEach((el) => (el.style.display = ""));

                removeNewTr();
            }
        });
    });
});
