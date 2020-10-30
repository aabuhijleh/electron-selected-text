import { keyTap } from "robotjs";
import { clipboard } from "electron";

export const getSelectedText = async () => {
  const oldClipboardContent = clipboard.readText(); // preserve clipboard content
  clipboard.clear();
  keyTap("c", process.platform === "darwin" ? "command" : "control");
  await new Promise((resolve) => setTimeout(resolve, 200)); // add a delay before checking clipboard
  const selectedText = clipboard.readText();
  clipboard.writeText(oldClipboardContent);
  return selectedText;
};
