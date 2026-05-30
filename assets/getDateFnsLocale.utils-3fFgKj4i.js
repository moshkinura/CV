import { d as ru, f as enUS } from "./vendor-ZI3bWEEf.js";
//#region src/shared/utils/getDateFnsLocale.utils.ts
var getDateFnsLocale = (lng) => {
	const l = lng.toLowerCase();
	if (l.startsWith("ru")) return ru;
	if (l.startsWith("en")) return enUS;
	return ru;
};
//#endregion
export { getDateFnsLocale as t };
