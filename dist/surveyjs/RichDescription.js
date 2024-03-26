"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRichDescription = exports.ConvertHtml = void 0;
function ConvertHtml(text) {
    const showdown = require('showdown');
    const converter = new showdown.Converter();
    return converter.makeHtml(text);
}
exports.ConvertHtml = ConvertHtml;
;
function handleRichDescription(_, options) {
    if (options.name !== "description") {
        return;
    }
    options.html = ConvertHtml(options.text);
}
exports.handleRichDescription = handleRichDescription;
