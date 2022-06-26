# mmbase
> Base class for metismenu.

## Install

```sh
npm install mmbase
```

## Usage

```js
import MMBase from 'mmbase';

const selected = document.querySelector('.my-target');
// create new MMBase instance
const mmb = new MMBase(selected);

// create handler function
const myHandler = (evt) => {
    console.log(evt.detail);
}
```
 ### Extend

```js
import MMBase from 'mmbase';

class MyClass extends MMBase {}
```



#### Properties

`MMBase` provides the following "private" property to subclasses:

| property | description |
| --- | --- |
| `root` | The root element passed into the constructor as the first argument. |


#### Methods

`MMBase` provides the following methods to subclasses:

| method | description |
| --- | --- |
| `on(evt: string, handler: EventListener)` | Adds an event listener to the root element for the given `evt`. Note that this is simply a proxy to `this.root.addEventListener`. |
| `off(evt: string, handler: EventListener)` | Removes an event listener from the root element. Note that this is simply a proxy to `this.root.removeEventListener`. |
| `emit(evt: string, evtData: Object, shouldBubble: boolean = false)` | Dispatches a custom event of type `evt` with detail `evtData` from the root element. It also takes an optional shouldBubble argument to specify if the event should bubble. |
