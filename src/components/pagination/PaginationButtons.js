export const getPaginationButtons = (pageCount, currentPage) => {
    const buttons = [];
    let firstButton;
    let secondButton;
    let thirdButton;
    let fourthButton;
    let lastButton;
    if (pageCount < 6) {
        for (let i = 1; i < pageCount + 1; i++) {
            buttons.push(i);
        }
    }
    if (pageCount > 5) {
        firstButton = 1;
        lastButton = pageCount;
        if (currentPage > 2 && currentPage < pageCount - 1) {
            secondButton = currentPage - 1;
            thirdButton = currentPage;
            fourthButton = currentPage + 1;
        }
        if (currentPage === 1) {
            secondButton = currentPage + 1;
            thirdButton = currentPage + 2;
            fourthButton = currentPage + 3;
        }

        if (currentPage === 2) {
            secondButton = currentPage;
            thirdButton = currentPage + 1;
            fourthButton = currentPage + 2;
        }

        if (currentPage === pageCount - 1) {
            secondButton = currentPage - 2;
            thirdButton = currentPage - 1;
            fourthButton = currentPage;
        }

        if (currentPage === pageCount) {
            secondButton = pageCount - 3;
            thirdButton = pageCount - 2;
            fourthButton = pageCount - 1;
        }

        buttons.push(firstButton);
        buttons.push(secondButton);
        buttons.push(thirdButton);
        buttons.push(fourthButton);
        buttons.push('...');
        buttons.push(lastButton);
        buttons.push('>');
    }
    return buttons;
}