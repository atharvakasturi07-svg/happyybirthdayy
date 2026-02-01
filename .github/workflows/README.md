# Birthday Website 🎂

A beautiful, interactive birthday website with music player, cake cutting game, wish-making, and birthday cards.

## Files Structure

```
birthday-website/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # All interactive functionality
├── music/          # (Create this folder for audio files)
│   ├── sailor-song.mp3
│   ├── her.mp3
│   └── if-the-world-was-ending.mp3
└── README.md       # This file
```

## How to Add Music

### Step 1: Download the Songs
Download the MP3 files for these songs:
- **Sailor Song** by Gigi Perez
- **Her** by Chase Atlantic (or your preferred version)
- **If the World Was Ending** by JP Saxe ft. Julia Michaels

### Step 2: Create Music Folder
1. Create a folder named `music` in the same directory as `index.html`
2. Place your downloaded MP3 files in this folder
3. Name them:
   - `sailor-song.mp3`
   - `her.mp3`
   - `if-the-world-was-ending.mp3`

### Step 3: Update the JavaScript
Open `script.js` and find the `songs` array at the top. Replace the placeholder URLs with your actual file paths:

```javascript
const songs = [
    {
        title: "Sailor Song",
        description: "Sailing through life with you 🌊",
        emoji: "⛵",
        url: "music/sailor-song.mp3"  // Update this line
    },
    {
        title: "Her",
        description: "Every moment feels like magic 💫",
        emoji: "💕",
        url: "music/her.mp3"  // Update this line
    },
    {
        title: "If the world was ending...",
        description: "Every beat celebrates your beautiful heart 💗",
        emoji: "🌍",
        url: "music/if-the-world-was-ending.mp3"  // Update this line
    }
];
```

## Alternative: Use YouTube or Streaming URLs

If you want to use streaming URLs instead of local files:

1. Find the direct MP3 URLs for these songs (from legal sources)
2. Replace the `url` values in the `songs` array with these URLs

**Note**: Some streaming services don't allow direct linking. You'll need to find legitimate MP3 files.

## Features

### 🎂 Interactive Pages
1. **Welcome Page** - Beautiful greeting with animations
2. **Cake Cutting** - Drag the knife across the cake to cut it
3. **Wish Making** - Make a birthday wish
4. **Music Player** - Play the 3 birthday songs
5. **Birthday Cards** - Click cards to reveal messages
6. **Final Letter** - A special birthday message

### 🎵 Music Player Controls
- Click the play button to play/pause
- Click on any song card to switch songs
- Progress bar shows current playback position
- Click on the progress bar to seek
- Keyboard shortcuts:
  - `Space` - Play/Pause
  - `→` - Next song
  - `←` - Previous song

### 🎮 Cake Cutting Game
- Click and drag the knife across the cake
- Progress bar shows cutting completion
- Automatically moves to next page when 100% complete

### 🎁 Birthday Cards
- Click each card to reveal a special message
- Progress indicator shows how many cards opened
- Modal appears when all 3 cards are revealed

## How to Use

1. Open `index.html` in any modern web browser
2. Click "Let's Gooo" to start the experience
3. Follow through each interactive page
4. Enjoy the music, games, and messages!

## Customization

### Change Colors
Edit the CSS variables in `styles.css`:
- Primary pink: `#ec407a`
- Secondary purple: `#ab47bc`
- Background: `#fce4ec` to `#f3e5f5` gradient

### Change Text
Edit the text in `index.html`:
- Birthday messages
- Card messages
- Final letter content

### Add More Songs
Add more objects to the `songs` array in `script.js`:
```javascript
{
    title: "Song Name",
    description: "Description text",
    emoji: "🎵",
    url: "path/to/song.mp3"
}
```

## Browser Compatibility

Works on:
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile browsers

## Troubleshooting

### Music Not Playing
1. Check if audio files are in the correct folder
2. Verify file names match exactly
3. Make sure files are in MP3 format
4. Check browser console (F12) for error messages
5. Try a different browser
6. Ensure audio files aren't corrupted

### Animations Laggy
- Close other browser tabs
- Try a different browser
- Check if hardware acceleration is enabled

### On Mobile
- Use landscape mode for best experience
- Enable autoplay in browser settings for music

## Credits

Made with ❤️ for a special birthday celebration

## License

Personal use only. Audio files should be obtained legally.
