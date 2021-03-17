/* Aqui é utilizado o padrão de projeto PubSub (Publisher/Subscriber)
onde alguém fará um broadcast de um evento e os responsáveis por
ouvir este evento responderão de acordo */
const Emitter = {
    events: {        
    },

    on(event, cb) {
        Emitter.events[event] = Emitter.events[event] || [];
        Emitter.events[event].push(cb);
    },

    emit(event, ...rest) {
        if (event in Emitter.events === false)
        return;

        Emitter.events[event].forEach((e) => {
            e(...rest);            
        });
    }
}

export { Emitter }