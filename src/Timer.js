import { View } from './View.js';
import { Emitter } from './Emitter.js';

const Timer = {
    time: 0.1 * 60,
    currentTime: 0,
    interval: null,
    /* Aqui pegamos só a parte inteira dos minutos. Por exemplo, se vier o valor 120, retornará 2
    pois 120/60 = 2. Se vier 25 também retornará 2, pois ele arredonda para baixo, pegando apenas
    a parte inteira. */
    timeToMinutes: time => Math.floor(time / 60),
    /* Aqui pegamos apenas o resto da divisão, que são os segundos excedentes. No caso de 125 ele
    retorna 5 */
    timeToSeconds: time => time % 60,
    /* Esta linha serve para colocar zero a esquerda caso o número tenha dois dígitos. Dessa forma
    temos 11, 10, 09, 08... ao invés de 11, 10, 9, 8... */
    formatTime: time => String(time).padStart(2, '0'),

    init(time) {
        /* Se vier um valor preenchido no parâmetro da função o contador usará esse valor.
        Em caso negativo, o vaor padrão será de uma hora. */
        Timer.time = time || 60 * 60;
        Emitter.emit("countdown-start");
        Timer.currentTime = Timer.time;
        Timer.interval = setInterval(Timer.countdown, 1000)        
    },

    countdown() {
        Timer.currentTime--;

        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));

        View.render({minutes, seconds});

        if (Timer.currentTime === 0) {            
            clearInterval(Timer.interval);
            Emitter.emit("countdown-end");
            return;
        }
    }
}

export { Timer }