# Electron Selected Text

> Get selected text from any application using Electron's [clipboard](https://www.electronjs.org/docs/api/clipboard) and [robotjs](https://github.com/octalmage/robotjs)

For [Electron 9 and later](https://github.com/electron/electron/issues/18397), this module should only be used in the main process because [robotjs is not context aware](https://github.com/octalmage/robotjs/issues/580)

## Install

```
$ npm install electron-selected-text
```

## Usage

```ts
import { app } from "electron";
import { getSelectedText, registerShortcut } from "electron-selected-text";

const printSelectedText = (selectedText) => {
  console.log(`Selected Text: ${selectedText}`);
};

getSelectedText().then(printSelectedText);

app.whenReady().then(() => {
  const ret = registerShortcut("F6", printSelectedText);

  if (!ret) {
    console.warn("registration failed");
  }
});
```
