const terminal = document.getElementById('terminal');

// 隨機英文句子模擬終端機
const lines = [
    "> Initializing system components...",
    "> Verifying access credentials...",
    "> Downloading data packets...",
    "> Analyzing neural signals...",
    "> Compiling fun subroutines...",
    "> Running diagnostics check...",
    "> Establishing quantum connection...",
    "> Injecting random humor module...",
    "> Finalizing boot sequence...",
    "> Terminal operational."
];

const finalLine = '> 點擊以進入網站';

let i = 0;
let lineIndex = 0;
let typingSpeed = 25;
let currentLine = '';

function typeLine() {
    if (lineIndex < lines.length) {
        currentLine = lines[lineIndex];
        if (i < currentLine.length) {
            terminal.innerHTML += currentLine.charAt(i);
            i++;
            setTimeout(typeLine, typingSpeed);
        } else {
            terminal.innerHTML += '\n';
            i = 0;
            lineIndex++;
            setTimeout(typeLine, 150);
        }
    } else {
        // 顯示發光閃爍的按鈕（保留底線）
        const link = document.createElement('a');
        link.className = 'glow blink';
        link.href = 'memeAPI.html';
        link.textContent = finalLine;
        terminal.appendChild(link);
    }
}

typeLine();

