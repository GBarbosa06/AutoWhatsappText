// put your message here in the text variable
const text = `Dale a tu cuerpo alegría, Macarena
Que tu cuerpo es pa' darle alegría y cosa buena
Dale a tu cuerpo alegría, Macarena
Eh, Macarena (¡ay!)`;
const message = text.split('\n')

const input = document.querySelector('[contenteditable="true"][data-tab="10"]');

const sendMessage = (linha) => {
    input.focus();

    // Insert text simulating typing
    document.execCommand('insertText', false, linha);

    // input event (React needs it)
    input.dispatchEvent(new Event('input', { bubbles: true }));

    // Pressiona Enter
    setTimeout(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            which: 13,
            keyCode: 13,
            bubbles: true
        }));
    }, 100);
}
for (let index = 0; index < message.length; index++) {
    const linha = message[index];
    setTimeout(() => {
        sendMessage(linha)
    }, 1000 * index)
}