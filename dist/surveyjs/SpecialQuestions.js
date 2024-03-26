"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecializeQuestions = exports.ComponentCollection = void 0;
var survey_core_1 = require("survey-core");
Object.defineProperty(exports, "ComponentCollection", { enumerable: true, get: function () { return survey_core_1.ComponentCollection; } });
function SpecializeQuestions(cc) {
    if (!cc.getCustomQuestionByName('__spprop__gender')) {
        cc.add({
            name: '__spprop__gender',
            title: '性別',
            defaultQuestionTitle: {
                en: 'Your gender',
                ja: '性別',
            },
            questionJSON: {
                type: 'radiogroup',
                choices: [
                    {
                        value: 'male',
                        text: {
                            en: 'Male',
                            ja: '男性',
                        },
                    },
                    {
                        value: 'female',
                        text: {
                            en: 'Female',
                            ja: '女性',
                        },
                    },
                ],
            },
        });
    }
    if (!cc.getCustomQuestionByName('__spprop__birthday')) {
        cc.add({
            name: '__spprop__birthday',
            title: '生年月日',
            defaultQuestionTitle: {
                en: 'Your birthday',
                ja: '生年月日',
            },
            questionJSON: {
                type: 'text',
                inputType: 'date',
            },
        });
    }
    if (!cc.getCustomQuestionByName('__spprop__address')) {
        cc.add({
            name: '__spprop__address',
            title: '現住所',
            defaultQuestionTitle: {
                en: 'Your address',
                ja: '現住所',
            },
            elementsJSON: [
                {
                    type: 'text',
                    name: 'zip',
                    title: 'Zip Code',
                    titleLocation: 'hidden',
                    commentPlaceholder: 'Zip code',
                    isRequired: true,
                    maxWidth: '40%',
                },
                {
                    type: 'text',
                    name: 'prefecture',
                    title: 'Prefecture',
                    titleLocation: 'hidden',
                    startWithNewLine: false,
                    isRequired: true,
                    maxWidth: '60%',
                },
                {
                    type: 'text',
                    name: 'address',
                    title: 'Address',
                    titleLocation: 'hidden',
                    isRequired: true,
                },
                {
                    type: 'text',
                    name: 'address2',
                    title: 'Address 2',
                    titleLocation: 'hidden',
                    isRequired: false,
                },
            ],
        });
    }
}
exports.SpecializeQuestions = SpecializeQuestions;
