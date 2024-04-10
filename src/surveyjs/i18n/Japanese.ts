export function overrideJapanese(locales: { [index: string]: any }) {
	const t = locales['ja'];

	t.requiredText = '必須';
	t.booleanCheckedLabel = 'はい';
	t.booleanUncheckedLabel = 'いいえ';
}
