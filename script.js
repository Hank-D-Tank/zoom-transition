function syncVideo(video) {
  video.currentTime = (Date.now() / 1000) % video.duration;
}

document.addEventListener("loadedmetadata", (event) => syncVideo(event.target), true);

window.addEventListener("pageshow", (event) => {
  if (event.persisted) document.querySelectorAll("video").forEach(syncVideo);
});
