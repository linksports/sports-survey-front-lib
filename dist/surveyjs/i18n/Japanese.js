"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrideJapanese = void 0;
function overrideJapanese(locales) {
    const t = locales['ja'];
    t.requiredText = '必須';
    t.booleanCheckedLabel = 'はい';
    t.booleanUncheckedLabel = 'いいえ';
}
exports.overrideJapanese = overrideJapanese;
