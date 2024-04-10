export function InsertSurveyInfo(container: HTMLElement, content: string) {
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
	};
	(surveyInfoElem as HTMLElement).innerText = content;
};
