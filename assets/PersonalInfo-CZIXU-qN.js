import { B as FileText, F as Heart, G as Calendar, I as GraduationCap, M as Languages, N as Info, O as Monitor, U as Clock, a as format, at as require_jsx_runtime, c as isValid, i as formatDuration, n as parse, q as BadgeCheck, r as intervalToDuration, v as useTranslation, w as User, z as Flag } from "./vendor-ZI3bWEEf.js";
import { n as Card } from "./index-BaHubUL7.js";
import { t as Badge } from "./badge-BZ8NW0RQ.js";
import { t as getDateFnsLocale } from "./getDateFnsLocale.utils-3fFgKj4i.js";
//#region src/shared/utils/formatBirthday.utils.ts
var formatBirthday = (value, locale) => {
	const d = parse(value, "yyyy/MM/dd", /* @__PURE__ */ new Date());
	if (!isValid(d)) return "";
	const { years = 0 } = intervalToDuration({
		start: d,
		end: /* @__PURE__ */ new Date()
	});
	return `${format(d, "dd.MM.yyyy", { locale })} (${formatDuration({ years }, {
		locale,
		format: ["years"]
	})})`;
};
//#endregion
//#region src/components/PersonalInfo.tsx
var import_jsx_runtime = require_jsx_runtime();
var PersonalInfo = () => {
	const { t, i18n } = useTranslation();
	const { title, description, personal, details, languages, shedules, employments, recommendations, configure } = t("personals", { returnObjects: true });
	const personalData = [
		{
			icon: Flag,
			name: personal.data.nationality.name,
			value: personal.data.nationality.value
		},
		{
			icon: GraduationCap,
			name: personal.data.education.name,
			value: personal.data.education.value
		},
		{
			icon: Calendar,
			name: personal.data.birthday.name,
			value: formatBirthday(personal.data.birthday.value, getDateFnsLocale(i18n.resolvedLanguage))
		},
		{
			icon: User,
			name: personal.data.gender.name,
			value: personal.data.gender.value
		},
		{
			icon: Heart,
			name: personal.data.marital.name,
			value: personal.data.marital.value
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "personal",
		className: "py-20 bg-linear-to-b from-background to-secondary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl md:text-5xl font-bold text-gradient mb-4",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-muted-foreground max-w-2xl mx-auto",
					children: description
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 animate-slide-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold",
								children: personal.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: personalData.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "w-5 h-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [item.name, ":"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 font-medium",
										children: item.value
									})]
								})]
							}, index))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 animate-slide-up",
						style: { animationDelay: "0.37s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold",
								children: details.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground font-medium mb-1",
									children: details.driver.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground",
									children: details.driver.value
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground font-medium mb-1",
									children: details.hobbies.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-foreground",
									children: details.hobbies.value
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground font-medium mb-2",
									children: details.qualities.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: details.qualities.value.map((q, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "text-accent",
										children: q
									}, idx))
								})] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 animate-slide-up",
						style: { animationDelay: "0.1s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold",
								children: languages.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: languages.language.map((lang, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-start items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium mr-2",
										children: lang.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										children: lang.level
									})]
								})
							}, index))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 animate-slide-up",
						style: { animationDelay: "0.2s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold",
								children: shedules.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: shedules.shedule.map((schedule, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "text-accent",
								children: schedule
							}, index))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 animate-slide-up",
						style: { animationDelay: "0.3s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold",
								children: employments.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 mb-10",
							children: employments.employment.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "text-success",
								children: option
							}, index))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 animate-slide-up",
						style: { animationDelay: "0.3s" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold",
									children: recommendations.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: recommendations.information
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-2",
								children: recommendations.note
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 lg:col-span-2 animate-slide-up",
						style: { animationDelay: "0.4s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold",
								children: configure.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
							children: configure.elements.map((spec, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-secondary/50 rounded-lg p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground font-medium mb-1",
									children: spec.component
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground",
									children: spec.spec
								})]
							}, index))
						})]
					})
				]
			})]
		})
	});
};
//#endregion
export { PersonalInfo as default };
