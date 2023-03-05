import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveCurrentTime, 1000));
player.on('loaded', onPlayerReady);

function saveCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
}

function onPlayerReady() {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
}
