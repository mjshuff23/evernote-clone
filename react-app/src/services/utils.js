export function removeHTMLTags(str) {
    return str.replace(/<[^>]*>?/gm, ' ');
}
