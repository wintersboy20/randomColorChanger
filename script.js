let isRgb = false ;
let colorHistory = [];

// Start Change Color

    function ChangeColor() {
        // let color;

        if(isRgb){
            let r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
            color = `rgb(${r},${g},${b})`;
        }else{
            color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6,"0");
        }

        document.body.style.backgroundColor = color;
        document.getElementById("colorcode").textContent = color;
        document.getElementById("colorcode").style.color = color;
        
        // colorHistory.unshift(color);

        // if(colorHistory.length > 5){
        //     colorHistory.pop();
        // }

        addToHistory(color);
    }

// End Change Color


// Start Toggle Color Mode

    function toggleMode() {
        isRgb = !isRgb;
        let button = document.querySelectorAll("button")[1];    // Switch to RGB
        button.textContent = isRgb ? "Switch to Hex" : "Switch to RGB";
        
    }

// End Toggle Color Mode


// Start History function

    function addToHistory(color){
        if(colorHistory.length >= 5){
            colorHistory.pop();
        }
        colorHistory.unshift(color);

        let historyDiv = document.getElementById('history');
        historyDiv.innerHTML = "<strong>History : </strong>";

        colorHistory.forEach( x => {
            let span = document.createElement('span');
            span.textContent = x;
            span.className = "historyItems";
            span.style.backgroundColor = x;
            span.onclick = () => applyColor(x);

            historyDiv.appendChild(span);
        });
    }

// End History function

// Start Apply Color

    function applyColor(color){
        document.body.style.backgroundColor = color;
        document.getElementById("colorcode").textContent = color;
        document.getElementById("colorcode").style.color = color;  
    }

// End Apply Color

// Start Copy Color

    function copyColor(){
        let colorText = document.getElementById('colorcode').textContent;
        navigator.clipboard.writeText(colorText).then( () => {
            alert (`Copied: ${colorText}`);
        });
    }

// End Copy Color