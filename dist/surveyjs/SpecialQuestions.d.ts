import { ComponentCollection } from 'survey-core';
export declare function SpecializeQuestions(cc: ComponentCollection): void;
export declare const SpecialQuestions: ({
    name: string;
    title: string;
    defaultQuestionTitle: {
        en: string;
        ja: string;
    };
    questionJSON: {
        type: string;
        choices: {
            value: string;
            text: {
                en: string;
                ja: string;
            };
        }[];
        inputType?: undefined;
    };
    elementsJSON?: undefined;
} | {
    name: string;
    title: string;
    defaultQuestionTitle: {
        en: string;
        ja: string;
    };
    questionJSON: {
        type: string;
        inputType: string;
        choices?: undefined;
    };
    elementsJSON?: undefined;
} | {
    name: string;
    title: string;
    defaultQuestionTitle: {
        en: string;
        ja: string;
    };
    elementsJSON: ({
        type: string;
        name: string;
        title: string;
        titleLocation: string;
        commentPlaceholder: string;
        isRequired: boolean;
        maxWidth: string;
        startWithNewLine?: undefined;
    } | {
        type: string;
        name: string;
        title: string;
        titleLocation: string;
        startWithNewLine: boolean;
        isRequired: boolean;
        maxWidth: string;
        commentPlaceholder?: undefined;
    } | {
        type: string;
        name: string;
        title: string;
        titleLocation: string;
        isRequired: boolean;
        commentPlaceholder?: undefined;
        maxWidth?: undefined;
        startWithNewLine?: undefined;
    })[];
    questionJSON?: undefined;
})[];
//# sourceMappingURL=SpecialQuestions.d.ts.map