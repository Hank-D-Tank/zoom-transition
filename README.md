# Zoom Transition

Click a card and its video zooms up into the hero of a completely new page. No libraries and no JavaScript animation. It's real HTML pages and the browser's View Transitions API, turned on by one rule in CSS.

**Live demo:** https://dimaac.com/projects/zoom-transition
**Tutorial:** https://youtu.be/9I_MGRMn_Z8

## How it works

```css
@view-transition {
  navigation: auto;
}
```

That one rule tells the browser to animate between pages of the site. Give an element the same `view-transition-name` on both pages and the browser treats it as one thing and moves it from where it was to where it is now.

`script.js` keeps the video in sync. Both pages ask what time it is and jump to the same spot:

```js
video.currentTime = (Date.now() / 1000) % video.duration;
```

## Files

- `index.html`: the home page, a grid of six films
- `tangerine.html`, `cobalt.html`, `marigold.html`, `violet.html`, `crimson.html`, `sky.html`: one page per film
- `style.css`: the layout and every transition rule
- `script.js`: the video sync

Open `index.html` in Chrome, Edge or Safari. Other browsers just get a normal page change, so nothing breaks.

## Credits

- Inspired by [Cyd Stumpel's portfolio](https://cydstumpel.nl), Awwwards Site of the Day. The design and the code here are my own.
- Videos from [Pexels](https://www.pexels.com) under the Pexels License, streamed from their CDN.
- Font: [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) (SIL OFL).
