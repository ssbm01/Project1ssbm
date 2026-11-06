const resultField = document.getElementById('result');

function appendValue(value) {
    if (resultField.value === '0' && value !== '.') {
        resultField.value = value;
    } else {
        resultField.value += value;
    }
}

function clearScreen() {
    resultField.value = '';
}

function deleteChar() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
    try {
        // eval ফাংশন ব্যবহার করে সহজেই হিসাব করা যায়
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
        setTimeout(() => {
            clearScreen();
        }, 1500);
    }
}
