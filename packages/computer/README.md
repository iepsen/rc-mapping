# Remote Control Mappig for Computer keyboard
Computer key binding. Currently supports navigation (arrows, enter and esc), numeric and color keys.

## Install
```shell
npm install @rc-mapping/computer
```

## Usage

Ecmascript 6 syntax:
```js
import { navigation } from  @rc-mapping/computer;

const onKeyDown = event => {
  if (event.keyCode === navigation.keyEnter) {
    // your code
  }
}
document.addEventListener('keydown', onKeyDown)
```