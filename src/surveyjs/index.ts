import { ITheme } from 'survey-core';
import themeJson from './theme.json';

import 'survey-core/defaultV2.min.css';
import 'survey-core/survey.i18n';
import './theme.css';

export { SpecializeQuestions } from './SpecialQuestions';
export { GetSportsSurveyLocales } from './i18n';
export { ConvertHtml, handleRichDescription } from './RichDescription';
export { AddChoicesMultiColumns, handleChoicesMultiColumns } from './ChoicesMultiColumns';
export { InsertSurveyInfo } from './SurveyInfo';

export function GetSportsSurveyThemeJson(): ITheme {
	return themeJson as ITheme;
};

