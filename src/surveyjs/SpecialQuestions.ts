import { ComponentCollection, Question } from 'survey-core';
import { Prefectures } from './Prefectures';

export function SpecializeQuestions(cc: ComponentCollection) {
	for (const sq of SpecialQuestions) {
		if (!cc.getCustomQuestionByName(sq.name)) {
			cc.add(sq);
		};
	};
};

export function validateAddress(params: any) {
	console.log("validate!!!!!", params);
	return false;
}

export const SpecialQuestions = [
	{
		name: '__spprop__name',
		title: 'お名前',
		defaultQuestionTitle: {
			en: 'Your name',
			ja: 'お名前',
		},
		questionJSON: {
			type: 'text',
		},
	},
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
				placeholder: {
					ja: '郵便番号',
					en: 'Zip Code',
				},
				commentPlaceholder: 'Zip code',
				maxWidth: '40%',
				validators: [{
					type: 'regex',
					regex: '[0-9]{7}',
					text: {
						ja: '郵便番号は数字7桁で入力してください',
						en: 'Zip code has to be 7 digits numbers in Japan',
					},
				}, {
					type: 'expression',
					expression: '{composite.zip} notempty or ({composite.zip} empty and {composite.prefecture} empty and {composite.address} empty)',
					text: {
						ja: '郵便番号を入力してください',
						en: 'Please enter your zip code',
					},
				}],
			},
			{
				type: 'dropdown',
				name: 'prefecture',
				choices: Prefectures,
				title: 'Prefecture',
				titleLocation: 'hidden',
				placeholder: {
					ja: '都道府県',
					en: 'Prefecture',
				},
				startWithNewLine: false,
				validators: [{
					type: 'expression',
					expression: '{composite.prefecture} notempty or ({composite.zip} empty and {composite.prefecture} empty and {composite.address} empty)',
					text: {
						ja: '都道府県を選択してください',
						en: 'Please select your prefecture',
					},
				}],
				maxWidth: '60%',
			},
			{
				type: 'text',
				name: 'address',
				title: 'Address',
				titleLocation: 'hidden',
				placeholder: {
					ja: '住所1',
					en: 'Address 1',
				},
				validators: [{
					type: 'expression',
					expression: '{composite.address} notempty or ({composite.zip} empty and {composite.prefecture} empty and {composite.address} empty)',
					text: {
						ja: '住所を入力してください',
						en: 'Please enter your address',
					},
				}],
				// isRequired: true,
			},
			{
				type: 'text',
				name: 'address2',
				title: 'Address 2',
				titleLocation: 'hidden',
				placeholder: {
					ja: '住所2',
					en: 'Address 2',
				},
				isRequired: false,
			},
		],
	},
	{
		name: '__spprop__tel',
		title: '電話番号',
		defaultQuestionTitle: {
			en: 'Your phone number',
			ja: '電話番号',
		},
		questionJSON: {
			type: 'text',
		},
	},
	{
		name: '__spprop__fax',
		title: 'FAX番号',
		defaultQuestionTitle: {
			en: 'Your fax number',
			ja: 'FAX番号',
		},
		questionJSON: {
			type: 'text',
		},
	},
];
