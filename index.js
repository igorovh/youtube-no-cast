setInterval(() => {
    const buttons = document.querySelectorAll('.ytp-remote-button');
    document.querySelectorAll('.ytp-remote-button').forEach(button => button.remove());
    console.info(`[YT-NC] Removed ${buttons.length} buttons.`);
}, 1000)