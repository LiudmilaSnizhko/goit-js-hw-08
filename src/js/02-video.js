import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function time(data){
    let second = data.seconds;
    localStorage.setItem('videoplayer-current-time', second);
    };


    const timePlay = localStorage.getItem('videoplayer-current-time');

    player.on('timeupdate', throttle(time, 1000));
    player.setCurrentTime(timePlay);
