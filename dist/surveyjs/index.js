"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSportsSurveyThemeJson = exports.InsertSurveyInfo = exports.handleChoicesMultiColumns = exports.AddChoicesMultiColumns = exports.handleRichDescription = exports.ConvertHtml = exports.GetSportsSurveyLocales = exports.SpecialQuestions = exports.SpecializeQuestions = void 0;
const theme_json_1 = __importDefault(require("./theme.json"));
require("survey-core/defaultV2.min.css");
require("survey-core/survey.i18n");
require("./theme.css");
var SpecialQuestions_1 = require("./SpecialQuestions");
Object.defineProperty(exports, "SpecializeQuestions", { enumerable: true, get: function () { return SpecialQuestions_1.SpecializeQuestions; } });
Object.defineProperty(exports, "SpecialQuestions", { enumerable: true, get: function () { return SpecialQuestions_1.SpecialQuestions; } });
var i18n_1 = require("./i18n");
Object.defineProperty(exports, "GetSportsSurveyLocales", { enumerable: true, get: function () { return i18n_1.GetSportsSurveyLocales; } });
var RichDescription_1 = require("./RichDescription");
Object.defineProperty(exports, "ConvertHtml", { enumerable: true, get: function () { return RichDescription_1.ConvertHtml; } });
Object.defineProperty(exports, "handleRichDescription", { enumerable: true, get: function () { return RichDescription_1.handleRichDescription; } });
var ChoicesMultiColumns_1 = require("./ChoicesMultiColumns");
Object.defineProperty(exports, "AddChoicesMultiColumns", { enumerable: true, get: function () { return ChoicesMultiColumns_1.AddChoicesMultiColumns; } });
Object.defineProperty(exports, "handleChoicesMultiColumns", { enumerable: true, get: function () { return ChoicesMultiColumns_1.handleChoicesMultiColumns; } });
var SurveyInfo_1 = require("./SurveyInfo");
Object.defineProperty(exports, "InsertSurveyInfo", { enumerable: true, get: function () { return SurveyInfo_1.InsertSurveyInfo; } });
function GetSportsSurveyThemeJson() {
    return theme_json_1.default;
}
exports.GetSportsSurveyThemeJson = GetSportsSurveyThemeJson;
;
