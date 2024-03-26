"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSportsSurveyLocales = void 0;
require("survey-core/survey.i18n");
require("survey-core/i18n/japanese");
const survey_core_1 = require("survey-core");
const Japanese_1 = require("./Japanese");
function GetSportsSurveyLocales() {
    const locales = survey_core_1.surveyLocalization.locales;
    (0, Japanese_1.overrideJapanese)(locales);
    return locales;
}
exports.GetSportsSurveyLocales = GetSportsSurveyLocales;
