import { SurveyModel, Serializer, AfterRenderQuestionEvent } from 'survey-core';

export function AddChoicesMultiColumns(serializer: typeof Serializer) {
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
};

export function handleChoicesMultiColumns(sender: SurveyModel, options: AfterRenderQuestionEvent) {
	const cc = options.question.getPropertyValue('choicesColumns');
	if (cc) {
		const fields = options.htmlElement.getElementsByClassName('sd-question__content');
		if (fields) {
			const field = fields[0];
			field.classList.remove("sd-custom-choices-column-1-col");
			field.classList.remove("sd-custom-choices-column-2-cols");
			field.classList.remove("sd-custom-choices-column-resp-2-cols");
			field.classList.add("sd-custom-choices-column-" + cc);
		};
	};
}
