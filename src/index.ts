export class MMBase {

  constructor(private root: Element) {}

  on(
    evt: string,
    handler: EventListener,
    options?: AddEventListenerOptions | boolean,
  ): MMBase {
    this.root!.addEventListener(evt, handler, options);
    return this;
  }

  off(
    evt: string,
    handler: EventListener,
    options?: EventListenerOptions | boolean,
  ): MMBase {
    this.root!.removeEventListener(evt, handler, options);
    return this;
  }

  emit<T extends object>(
    evt: string,
    evtData: T,
    shouldBubble = false,
  ): MMBase {
    const ev = new CustomEvent<T>(evt, {
      bubbles: shouldBubble,
      detail: evtData,
    });

    this.root!.dispatchEvent(ev);
    return this;
  }
}

export { MMBase as default };
