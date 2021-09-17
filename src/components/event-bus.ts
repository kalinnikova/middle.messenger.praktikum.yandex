export class EventBus {

    public listeners:{[key:string]:any[]};

    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        if(!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    emit(event) {
        this.listeners[event].forEach(function(listener) {
            listener();
        });
    }

    off(event: string, callback: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener:any) => listener !== callback
        );
    }
}