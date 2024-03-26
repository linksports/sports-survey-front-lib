export function InsertSurveyInfo(container: HTMLElement, content: string) {
  const titleElem = container.getElementsByClassName("sd-title")[0];
  if (!titleElem) {
    return;
  }
  let surveyInfoElem = container.getElementsByClassName("sd-custom-survey-info")[0];
  if (!surveyInfoElem) {
    surveyInfoElem = document.createElement("div");
    surveyInfoElem.classList.add("sd-custom-survey-info");
    titleElem.insertAdjacentElement("afterend", surveyInfoElem);
  };
  (surveyInfoElem as HTMLElement).innerText = content;
};
