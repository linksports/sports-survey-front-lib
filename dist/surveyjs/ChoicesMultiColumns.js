"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleChoicesMultiColumns = exports.AddChoicesMultiColumns = void 0;
function AddChoicesMultiColumns(serializer) {
    const conf = {
        name: 'choicesColumns',
        choices: [
            { value: '1-col', text: '1' },
            { value: '2-cols', text: '2' },
            { value: 'resp-2-cols', text: '2 (resp)' },
        ],
        default: '2-cols',
        category: 'layout',
    };
    serializer.addProperty('checkbox', conf);
    serializer.addProperty('radiogroup', conf);
    serializer.addProperty('__spprop__gender', conf);
}
exports.AddChoicesMultiColumns = AddChoicesMultiColumns;
;
function handleChoicesMultiColumns(sender, options) {
    const cc = options.question.getPropertyValue('choicesColumns');
    if (cc) {
        const field = options.htmlElement.getElementsByClassName('sd-selectbase')[0];
        field.classList.remove("sd-custom-choices-column-1-col");
        field.classList.remove("sd-custom-choices-column-2-cols");
        field.classList.remove("sd-custom-choices-column-resp-2-cols");
        field.classList.add("sd-custom-choices-column-" + cc);
    }
    ;
}
exports.handleChoicesMultiColumns = handleChoicesMultiColumns;
