'use strict'

import './styles.css';
import { CountDown } from  './js/timer.js';

const countDownTimer = new CountDown ({
    tagId : '#timer-1',
    targetDate : '1 Jan 2022'
})
countDownTimer.countDown()
