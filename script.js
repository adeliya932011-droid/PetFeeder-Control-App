const serverIP = '192.168.4.1';  // IP ESP8266 в AP mode
const logList = document.getElementById('logList');
const statusEl = document.getElementById('status');

// Функция отправки команды
async function sendCommand(command) {
    const url = `http://${serverIP}/${command}`;
    statusEl.textContent = 'Статус: Отправка...';
    
    try {
        const response = await fetch(url);
        const text = await response.text();
        statusEl.textContent = 'Статус: ' + text;
        addLog(`Команда "${command}" отправлена: ${text}`);
    } catch (error) {
        statusEl.textContent = 'Статус: Ошибка соединения';
        addLog(`Ошибка: ${error.message}`);
    }
}

// Добавление записи в лог
function addLog(message) {
    const li = document.createElement('li');
    li.textContent = new Date().toLocaleTimeString() + ' - ' + message;
    logList.appendChild(li);
}
