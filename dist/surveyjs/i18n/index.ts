import 'survey-core/survey.i18n';
import 'survey-core/i18n/japanese';
import { surveyLocalization } from 'survey-core';
import { overrideJapanese } from './Japanese';

export function GetSportsSurveyLocales(): { [index: string]: any } {
	const locales = surveyLocalization.locales;
	overrideJapanese(locales);
	return locales;
}
