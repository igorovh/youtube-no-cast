setInterval(() => {
    const buttons = document.querySelectorAll('.ytp-remote-button');
    if(buttons.length > 0) {
        document.querySelectorAll('.ytp-remote-button').forEach(button => button.remove());
        console.info(`[YT-NC] Removed ${buttons.length} buttons.`);
    }
}, 1000)