import { EventBus } from "./event-bus";

export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update",
    };

    eventBus: () => EventBus;
    props: any;
    _meta: { tagName: string, props?: any } | null = null;


    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName: string = "div", props: {} = {}) {
        const eventBus = new EventBus();

        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _element: null | HTMLElement = null;

    get element(): HTMLElement | null {
        return this._element;
    }

    _registerEvents (eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createResources (): void {
        if (this._meta){
            const { tagName } = this._meta;
            this._element = this._createDocumentElement(tagName);
        }
    }

    init (): void {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount (): void {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount (): void {}

    _componentDidUpdate (oldProps: any, newProps: any): void {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate (oldProps: any, newProps: any): boolean {
        return JSON.stringify(oldProps) !== JSON.stringify(newProps);
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    _render (): void {
        const block: string = this.render();

        if (this._element) {
            this._element.innerHTML = block;
        }
    }

    render (): string {
        return "";
    }

    getContent (): HTMLElement | null {
        return this.element;
    }

    _makePropsProxy (props: any): any {
        return new Proxy(props, {
            set: (target, prop: string | symbol, value) => {
                const oldProps = {...props};
                target[prop] = value;
                this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Что-то пошло не так');
            }
        });
    }

    _createDocumentElement (tagName: string): HTMLElement {
        return document.createElement(tagName);
    }

    show (): void {
        // @ts-ignore
        this.getContent()?.classList.remove("not-visible");
    }

    hide (): void {
        // @ts-ignore
        this.getContent()?.classList.add("not-visible");
    }

    _addEvents (): void {
        const { events = {} } = this.props;

        Object.keys(events).forEach(eventName => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }
}
