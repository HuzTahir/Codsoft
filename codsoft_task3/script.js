let screen = document.querySelector(".screen h2");
let buttons = document.querySelectorAll(".buttons button");
let leftPosition = 195; // Initialize left position
let currentVal = 0;
let nextVal = 0;
let operator = ""; // To store the operator (+, -, *, /)
let result = 0;

for (const button of buttons) {
    button.addEventListener("click", () => {
        // Update screen text
        if (screen.innerHTML === "0" || screen.innerHTML === "+" || screen.innerHTML === "-" || screen.innerHTML === "*" || screen.innerHTML === "/" || screen.innerHTML === "^"|| result !== 0) {
            screen.innerHTML = button.textContent;
            result = 0;
            leftPosition = 195;
            screen.style.left = leftPosition + "px"; // Update screen's left position
        } else {
            screen.innerHTML += button.textContent;
            leftPosition -= 10; // Decrease left position by 10 pixels
            screen.style.left = leftPosition + "px"; // Update screen's left position
        }

        // Update current value
        currentVal = parseFloat(screen.innerHTML);

        // Handle operator buttons
        if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/" || button.textContent === "^") {
            operator = button.textContent;
            nextVal = currentVal;
            screen.innerHTML = operator; // Display operator on screen
            leftPosition = 195;
            screen.style.left = leftPosition + "px"; // Update screen's left position
        }

        // Handle equal button
        if (button.textContent === "=") {
            switch (operator) {
                case "+":
                    result = nextVal + currentVal;
                    break;
                case "-":
                    result = nextVal - currentVal;
                    break;
                case "*":
                    result = nextVal * currentVal;
                    break;
                case "/":
                    result = nextVal / currentVal;
                    break;
                case "^":
                    result = Math.pow(nextVal, parseInt(currentVal));
                    break;
            }
            screen.innerHTML = result;
            currentVal = result; // Update current value for further calculations
            leftPosition -= (String(result).length*4);
            screen.style.left = leftPosition + "px"; // Update screen's left position
            
        }
    });
}
