export class MMBase {
    root;
    constructor(root) {
        this.root = root;
    }
    on(evt, handler, options) {
        this.root.addEventListener(evt, handler, options);
        return this;
    }
    off(evt, handler, options) {
        this.root.removeEventListener(evt, handler, options);
        return this;
    }
    emit(evt, evtData, shouldBubble = false) {
        const ev = new CustomEvent(evt, {
            bubbles: shouldBubble,
            detail: evtData,
        });
        this.root.dispatchEvent(ev);
        return this;
    }
}
export { MMBase as default };
