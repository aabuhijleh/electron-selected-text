# Electron Selected Text

> Get selected text from any application using Electron's [clipboard](https://www.electronjs.org/docs/api/clipboard) and [robotjs](https://github.com/octalmage/robotjs)

For Electron 10 and later, this module should only be used in the main process because [robotjs is not context aware](https://github.com/octalmage/robotjs/issues/580)

## Install

```
$ npm install electron-selected-text
```

## Usage

```ts
import { getSelectedText } from "electron-selected-text";

console.log(await getSelectedText());
```
