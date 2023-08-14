import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function time(data){
    let second = data.seconds;
    localStorage.setItem('videoplayer-current-time', second);
    };

 player.on('timeupdate', throttle(time, 1000));
const timePlay = localStorage.getItem('videoplayer-current-time');

    if (timePlay) {
     player.setCurrentTime(timePlay);
};