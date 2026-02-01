// Songs data with YouTube links (you can replace these with actual audio files)
const songs = [
    {
        title: "Sailor Song",
        description: "Always wanna Sail through life with you 🌊",
        emoji: "⛵",
        url: "music/sailor-song.mp3" 
    },
    {
        title: "Her",
        description: "Every moment with you feels like magic 💫",
        emoji: "💕",
        url: "music/her.mp3" 
    },
    {
        title: "If the world was ending...",
        description: "Every beat celebrates your beautiful heart 💗",
        emoji: "🌍",
        url: "music/if-the-world-was-ending.mp3" 
    }
];

let currentSongIndex = 0;
let isPlaying = false;
const audioPlayer = document.getElementById('audioPlayer');

// Page Navigation
function nextPage(pageNum) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('page' + pageNum).classList.add('active');
    window.scrollTo(0, 0);
    
    // Pause music when leaving music page
    if (pageNum !== 4 && audioPlayer) {
        audioPlayer.pause();
        isPlaying = false;
        updatePlayButton();
    }
}

// Cake Cutting Interaction
let cuttingProgress = 0;
const knife = document.getElementById('knife');
const cutLine = document.getElementById('cutLine');
const progressText = document.getElementById('cuttingProgress');
let isDragging = false;

if (knife) {
    knife.addEventListener('mousedown', () => {
        isDragging = true;
    });

    knife.addEventListener('touchstart', () => {
        isDragging = true;
    });
}

document.addEventListener('mousemove', (e) => {
    if (isDragging && knife) {
        const cakeContainer = document.querySelector('.cake-container');
        if (cakeContainer) {
            const rect = cakeContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            
            if (x > 50 && x < rect.width - 50) {
                cuttingProgress = Math.min(100, cuttingProgress + 2);
                progressText.textContent = `Cutting Progress: ${Math.floor(cuttingProgress)}%`;
                cutLine.style.width = cuttingProgress + '%';
                
                if (cuttingProgress >= 100) {
                    setTimeout(() => {
                        nextPage(3);
                    }, 500);
                }
            }
        }
    }
});

document.addEventListener('touchmove', (e) => {
    if (isDragging && knife) {
        const cakeContainer = document.querySelector('.cake-container');
        if (cakeContainer) {
            const rect = cakeContainer.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            
            if (x > 50 && x < rect.width - 50) {
                cuttingProgress = Math.min(100, cuttingProgress + 2);
                progressText.textContent = `Cutting Progress: ${Math.floor(cuttingProgress)}%`;
                cutLine.style.width = cuttingProgress + '%';
                
                if (cuttingProgress >= 100) {
                    setTimeout(() => {
                        nextPage(3);
                    }, 500);
                }
            }
        }
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('touchend', () => {
    isDragging = false;
});

// Music Player Functions
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    
    document.getElementById('currentSongTitle').textContent = song.title;
    document.getElementById('currentSongDesc').textContent = song.description;
    document.querySelector('.album-art').textContent = song.emoji;
    
    // Update playlist highlighting
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Load audio
    audioPlayer.src = song.url;
    audioPlayer.load();
}

function togglePlay() {
    if (!audioPlayer.src) {
        loadSong(0);
    }
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer.play();
        isPlaying = true;
    }
    updatePlayButton();
}

function updatePlayButton() {
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.textContent = isPlaying ? '⏸' : '▶';
    }
}

function changeSong(index) {
    loadSong(index);
    audioPlayer.play();
    isPlaying = true;
    updatePlayButton();
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function seekAudio(event) {
    const progressBar = document.getElementById('progressBar');
    const rect = progressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    audioPlayer.currentTime = percent * audioPlayer.duration;
}

// Audio event listeners
if (audioPlayer) {
    audioPlayer.addEventListener('timeupdate', () => {
        if (audioPlayer.duration) {
            const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            document.getElementById('progressFill').style.width = percent + '%';
            document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
            document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
        }
    });

    audioPlayer.addEventListener('ended', () => {
        // Play next song
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        changeSong(currentSongIndex);
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
        document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('error', () => {
        console.error('Error loading audio. Please check the audio file URLs.');
        // Show user-friendly message
        alert('Audio files not found. Please add your own MP3 files to the songs array in script.js');
    });
}

// Initialize first song when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadSong(0);
});

// Birthday Cards
let cardsRevealed = 0;
const totalCards = 3;

function revealCard(card, index) {
    if (!card.classList.contains('revealed')) {
        card.classList.add('revealed');
        cardsRevealed++;
        
        document.getElementById('cardsOpened').textContent = cardsRevealed;
        const progressPercent = (cardsRevealed / totalCards) * 100;
        document.getElementById('cardProgressBar').style.width = progressPercent + '%';
        
        if (cardsRevealed === totalCards) {
            setTimeout(() => {
                document.getElementById('allCardsModal').classList.add('active');
            }, 500);
        }
    }
}

function openFinalLetter() {
    document.getElementById('allCardsModal').classList.remove('active');
    nextPage(6);
}

function completeBirthday() {
    document.getElementById('completionModal').classList.add('active');
}

function closeCompletionModal() {
    document.getElementById('completionModal').classList.remove('active');
    nextPage(1);
    resetExperience();
}

function replayExperience() {
    document.getElementById('completionModal').classList.remove('active');
    nextPage(1);
    resetExperience();
}

function resetExperience() {
    // Reset cake cutting
    cuttingProgress = 0;
    if (progressText) {
        progressText.textContent = 'Cutting Progress: 0%';
    }
    if (cutLine) {
        cutLine.style.width = '0%';
    }
    
    // Reset cards
    cardsRevealed = 0;
    document.querySelectorAll('.birthday-card').forEach(card => {
        card.classList.remove('revealed');
    });
    document.getElementById('cardsOpened').textContent = '0';
    document.getElementById('cardProgressBar').style.width = '0%';
    
    // Reset music
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        isPlaying = false;
        updatePlayButton();
    }
}

// Keyboard controls for music player
document.addEventListener('keydown', (e) => {
    if (document.querySelector('#page4.active')) {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight') {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            changeSong(currentSongIndex);
        } else if (e.code === 'ArrowLeft') {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            changeSong(currentSongIndex);
        }
    }
});
