let history = [];

function calculate(operation) {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result;

    switch (operation) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            result = input1 / input2;
            break;
        default:
            result = 'Invalid operation';
    }

    const output = document.getElementById('output');
    output.textContent = `Result: ${result}`;

    // Add to history
    const historyEntry = `${input1} ${operation} ${input2} = ${result}`;
    history.push(historyEntry);
    updateHistory();
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}