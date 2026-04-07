# Simple Auto Message Script (Browser Console)

### This script sends multiple messages automatically in a chat input field using the browser console.

It takes a block of text, splits it into lines, and sends each line one by one with a short delay.

Usage
- Open the website
- Open DevTools (F12) → Console
- Paste the script
- Replace the text variable with your message
- Run it

Each line will be sent as a separate message.

**Notes**

The selector

`document.querySelector('[contenteditable="true"][data-tab="10"]')`

may need to be changed depending on the site.

It simulates typing and pressing Enter, so it works with apps that rely on events (like React).
Timing is set to 1 second between messages and can be adjusted in the script.
