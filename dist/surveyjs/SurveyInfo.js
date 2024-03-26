"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertSurveyInfo = void 0;
function InsertSurveyInfo(container, content) {
    const titleElem = container.getElementsByClassName("sd-title")[0];
    if (!titleElem) {
        return;
    }
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
