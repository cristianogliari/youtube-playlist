export default function textCropper(text, maxChar) {
    return text.slice(0, maxChar - 3) + '...';
}