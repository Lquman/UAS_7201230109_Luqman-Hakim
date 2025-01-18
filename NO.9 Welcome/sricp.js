function tampilkanPesan() {
    document.getElementById('welcomeMessage').innerText = 'Selamat Datang!';
}

document.getElementById('welcomeButton').addEventListener('click', tampilkanPesan);

setInterval(() => {
    const date = new Date();
    const clock = document.getElementById("clock");
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
