export declare class MMBase {
    private root;
    constructor(root: Element);
    on(evt: string, handler: EventListener, options?: AddEventListenerOptions | boolean): MMBase;
    off(evt: string, handler: EventListener, options?: EventListenerOptions | boolean): MMBase;
    emit<T extends object>(evt: string, evtData: T, shouldBubble?: boolean): MMBase;
}
export { MMBase as default };
