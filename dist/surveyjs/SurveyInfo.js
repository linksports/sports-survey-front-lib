"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertSurveyInfo = void 0;
function InsertSurveyInfo(container, content) {
    if (!container) {
        return;
    }
    const titleElems = container.getElementsByClassName("sd-title");
    if (!titleElems) {
        return;
    }
    const titleElem = titleElems[0];
    let surveyInfoElem = container.getElementsByClassName("sd-custom-survey-info")[0];
    if (!surveyInfoElem) {
        surveyInfoElem = document.createElement("div");
        surveyInfoElem.classList.add("sd-custom-survey-info");
        titleElem.insertAdjacentElement("afterend", surveyInfoElem);
    }
    ;
    surveyInfoElem.innerText = content;
}
exports.InsertSurveyInfo = InsertSurveyInfo;
;
