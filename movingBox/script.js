document.addEventListener("keydown", function (event){

    let currentCell = document.querySelector(".color");

    let currentRowIndex = [...currentCell.parentNode.parentNode.children].indexOf(currentCell.parentNode);
    let currentCellIndex = [...currentCell.parentNode.children].indexOf(currentCell);


    switch (event.key) {

        case "ArrowUp":

            if (currentRowIndex > 0) {

                currentCell.classList.remove("color");
                currentCell = currentCell.parentNode.previousElementSibling.children[currentCellIndex];
                currentCell.classList.add("color");
            }

            break;
        case "ArrowDown":

            if (currentRowIndex < 2) {

                currentCell.classList.remove("color");
                currentCell = currentCell.parentNode.nextElementSibling.children[currentCellIndex];
                currentCell.classList.add("color");
            }

            break;
        case "ArrowLeft":

            if (currentCellIndex > 0) {

                currentCell.classList.remove("color");
                currentCell = currentCell.previousElementSibling;
                currentCell.classList.add("color");
            }

            break;
        case "ArrowRight":

            if (currentCellIndex < 2) {

                currentCell.classList.remove("color");
                currentCell = currentCell.nextElementSibling;
                currentCell.classList.add("color");
            }
            break;
    }
})

