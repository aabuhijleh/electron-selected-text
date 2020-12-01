import { keyTap } from "robotjs";
import { clipboard, globalShortcut } from "electron";

/**
 * Gets selected text by synthesizing the keyboard shortcut
 * "CommandControl+c" then reading text from the clipboard
 */
export const getSelectedText = async () => {
  const currentClipboardContent = clipboard.readText(); // preserve clipboard content
  clipboard.clear();
  keyTap("c", process.platform === "darwin" ? "command" : "control");
  await new Promise((resolve) => setTimeout(resolve, 200)); // add a delay before checking clipboard
  const selectedText = clipboard.readText();
  clipboard.writeText(currentClipboardContent);
  return selectedText;
};

/**
 * Registers a global shortcut and calls the callback
 * with the selected text when the shorcut is pressed
 */
export const registerShortcut = (
  accelerator: Electron.Accelerator,
  callback: (selectedText: string) => any
) => {
  const ret = globalShortcut.register(accelerator, async () => {
    callback(await getSelectedText());
  });

  if (!ret) {
    throw new Error("registration failed");
  }
};

/**
 * Unregisters a global shortcut and is
 * equivalent to electron.globalShortcut.unregister
 */
export const unregisterShortcut = (accelerator: Electron.Accelerator) => {
  globalShortcut.unregister(accelerator);
};
