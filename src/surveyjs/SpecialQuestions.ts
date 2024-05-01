import { ComponentCollection } from 'survey-core';
import { Prefectures } from './Prefectures';

export function SpecializeQuestions(cc: ComponentCollection) {
	for (const sq of SpecialQuestions) {
		if (!cc.getCustomQuestionByName(sq.name)) {
			cc.add(sq);
		};
	};
};

export const SpecialQuestions = [
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
				isRequired: true,
				maxWidth: '40%',
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
				isRequired: true,
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
				isRequired: true,
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
];
