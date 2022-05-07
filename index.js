let i = 0;
document.querySelectorAll('.ytp-remote-button').forEach(button => {
    button.remove();
    i++;
});

console.info(`[YT-NC] Removed ${i} buttons.`);