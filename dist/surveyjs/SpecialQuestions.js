"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialQuestions = exports.SpecializeQuestions = void 0;
function SpecializeQuestions(cc) {
    for (const sq of exports.SpecialQuestions) {
        if (!cc.getCustomQuestionByName(sq.name)) {
            cc.add(sq);
        }
        ;
    }
    ;
}
exports.SpecializeQuestions = SpecializeQuestions;
;
exports.SpecialQuestions = [
    {
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
    },
    {
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
    },
    {
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
    },
];
