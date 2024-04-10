import { SurveyModel, TextMarkdownEvent } from 'survey-core';

export function ConvertHtml(text: string): string {
	const showdown = require('showdown');
	const converter = new showdown.Converter();
	return converter.makeHtml(text);
};

export function handleRichDescription(_: SurveyModel, options: TextMarkdownEvent) {
	if (options.name !== "description") {
		return;
	}
	options.html = ConvertHtml(options.text);
}
