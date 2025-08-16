// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const clearBtn = document.getElementById('clearBtn');
    const boxContent = document.getElementById('boxContent');
    const song = document.getElementById('song');

    if (clearBtn) {
            clearBtn.onclick = function() {
                clearBtn.style.display = 'none';
                boxContent.textContent = '';
            if (song) {
                song.currentTime = 0;
                song.play();
            }
                setTimeout(() => {
                    typeLetter('Hi love, I just want to take this moment to thank you for everything you do for me, even the little things you think don\'t matter. You always show your love in ways I never even thought I needed from taking care of me to making sure I feel appreciated and loved every day. Kahit hindi mo napapansin, you give so much of yourself just to see me happy, and that means the world to me. You surprise me with gifts, treat me to dates, and never make me feel like I have to prove anything to deserve your love. I honestly don\'t know what I did to deserve someone as selfless and genuine as you. You love me so purely, and I feel it in the smallest moments, even when you think I don\'t notice. Thank you for being my safe place, my partner, and my best friend. Alam kong hindi ko palaging nasasabi, pero sobrang na-appreciate ko lahat ng efforts mo. I hope you see how amazing and loving you are, just like I see it every single day.I Love You Andrea.');
                }, 300);
            }
    }

    function typeLetter(letter) {
        let i = 0;
        function type() {
            if (i < letter.length) {
                boxContent.textContent += letter[i];
                i++;
                setTimeout(type, 40); // Faster typing speed
            }
        }
        type();
    }
});

