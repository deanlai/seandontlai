function checkBirthday() {
    const box = document.getElementById('birthday-box');
    const originalContent = box.innerHTML;
    
    const today = new Date();
    const isBirthday = (today.getMonth() === 2 && today.getDate() === 16);
    
    const message = isBirthday ? "it is 🎉" : "nope";
    
    box.innerHTML = `<h2>${message}</h2>`;
    
    setTimeout(() => {
        box.innerHTML = originalContent;
    }, 3000);
}

function flipCoin() {
    const box = document.getElementById('flip-box');
    const originalContent = box.innerHTML;
    
    const result = Math.random() < 0.5 ? "heads" : "tails";
    
    box.innerHTML = `<h2>${result}</h2>`;
    
    setTimeout(() => {
        box.innerHTML = originalContent;
    }, 3000);
}

function toggleVideo() {
    const video = document.getElementById('crane');
    const toggle = document.getElementById('crane-toggle');
    
    if (video.classList.contains('hidden')) {
        video.classList.remove('hidden');
        toggle.textContent = 'Close';
    } else {
        video.classList.add('hidden');
        toggle.textContent = 'A Crane Flies';
    }
}
