import { n as __toESM } from "./rolldown-runtime-FDOR9p9I.js";
import { A as MapPin, C as Users, K as CalendarDays, a as format, at as require_jsx_runtime, c as isValid, i as formatDuration, l as startOfDay, n as parse, o as differenceInMonths, ot as require_react, r as intervalToDuration, s as differenceInDays, t as Root, u as addMonths, v as useTranslation, x as Zap } from "./vendor-ZI3bWEEf.js";
import { n as Card, r as cn } from "./index-BaHubUL7.js";
import { t as Badge } from "./badge-BZ8NW0RQ.js";
import { t as getDateFnsLocale } from "./getDateFnsLocale.utils-3fFgKj4i.js";
//#region src/widgets/ExperienceCard/model/calculateExperience.utils.ts
var calculateExperience = ([startStr, endStr], locale) => {
	const parseYMD = (s) => startOfDay(parse(s, "yyyy/MM/dd", /* @__PURE__ */ new Date()));
	const start = parseYMD(startStr);
	const end = endStr ? parseYMD(endStr) : /* @__PURE__ */ new Date();
	if (!isValid(start) || !isValid(end)) return "";
	const { years = 0, months = 0 } = intervalToDuration({
		start,
		end
	});
	if (!years && !months) {
		const unit = formatDuration({ months: 1 }, {
			locale,
			format: ["months"]
		}).replace(/^\s*1\s+/, "");
		return `<1\u00A0${locale?.code?.toLowerCase?.().startsWith("ru") ? "месяца" : unit}`;
	}
	return formatDuration({
		years,
		months
	}, {
		locale,
		format: ["years", "months"]
	});
};
//#endregion
//#region src/widgets/ExperienceCard/model/formatDate.utils.ts
var formatDate = (period, now) => {
	const [startStr, endStr] = period;
	const parseYMD = (s) => parse(s, "yyyy/MM/dd", /* @__PURE__ */ new Date());
	const fmt = (d) => format(d, "MM.yyyy");
	const start = parseYMD(startStr);
	if (!isValid(start)) return "";
	if (!endStr) return `${fmt(start)} - ${now}`;
	const end = parseYMD(endStr);
	return `${fmt(start)} - ${isValid(end) ? fmt(end) : now}`;
};
//#endregion
//#region src/widgets/ExperienceCard/ui/HeaderCard.tsx
var import_jsx_runtime = require_jsx_runtime();
var HeaderCard = ({ experience }) => {
	const { i18n, t } = useTranslation();
	const locale = getDateFnsLocale(i18n.resolvedLanguage);
	const textExperience = calculateExperience(experience.period, locale);
	const { now } = t("experience", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl font-bold text-gradient",
				children: experience.company
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xl font-semibold text-primary",
				children: experience.position
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
			variant: "secondary",
			className: "self-start bg-primary/10 text-primary border-primary/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "w-4 h-4 mr-2" }), textExperience]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-4 text-muted-foreground mb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: experience.location })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDate(experience.period, now) })]
		})]
	})] });
};
//#endregion
//#region src/widgets/ExperienceCard/ui/Project/ui/Responsibilities.tsx
var Responsibilities = ({ responsibilityText, responsibilities }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
				className: "font-medium text-sm",
				children: responsibilityText
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: responsibilities.map((r, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground text-sm leading-relaxed",
					children: r
				})]
			}, idx))
		})]
	});
};
//#endregion
//#region src/widgets/ExperienceCard/ui/Project/ui/Technologies.tsx
var Technologies = ({ technologiesText, technologies }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
		className: "font-medium text-sm mb-2",
		children: technologiesText
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
			variant: "outline",
			className: "text-primary border-primary/30 bg-primary/5",
			children: tech
		}, tech))
	})] });
};
//#endregion
//#region src/widgets/ExperienceCard/ui/Project/Project.tsx
var Project = ({ responsibilityText, technologiesText, project }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-l-4 border-accent pl-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-5 h-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "font-semibold text-lg text-foreground",
					children: project.name
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-4 leading-relaxed",
				children: project.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Responsibilities, {
				responsibilityText,
				responsibilities: project.responsibilities
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Technologies, {
				technologiesText,
				technologies: project.technologies
			})
		]
	});
};
//#endregion
//#region src/widgets/ExperienceCard/ExperienceCard.tsx
var ExperienceCard = ({ experience, index, responsibilityText, technologiesText }) => {
	const { projects } = experience;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "glass-effect p-8 transition-all duration-500 hover:shadow-glow animate-slide-up border-2",
		style: { animationDelay: `${index * .2}s` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderCard, { experience }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6",
			children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Project, {
				project,
				responsibilityText,
				technologiesText
			}, i))
		})]
	});
};
var Separator = (/* @__PURE__ */ __toESM(require_react(), 1)).forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
	...props
}));
Separator.displayName = Root.displayName;
//#endregion
//#region src/shared/utils/getTotalExperience.utils.ts
var getTotalExperienceText = (items, locale) => {
	const parseYMD = (s) => parse(s, "yyyy/MM/dd", /* @__PURE__ */ new Date());
	const intervals = items.map(({ period: [s, e] }) => ({
		start: parseYMD(s),
		end: e ? parseYMD(e) : /* @__PURE__ */ new Date()
	})).filter(({ start, end }) => isValid(start) && isValid(end) && start <= end).sort((a, b) => +a.start - +b.start);
	if (!intervals.length) return "";
	const merged = [];
	for (const cur of intervals) {
		const last = merged[merged.length - 1];
		if (!last || cur.start > last.end) merged.push({ ...cur });
		else if (cur.end > last.end) last.end = cur.end;
	}
	let totalMonths = 0;
	let totalRemainderDays = 0;
	for (const { start, end } of merged) {
		const m = differenceInMonths(end, start);
		totalMonths += m;
		const afterM = addMonths(start, m);
		totalRemainderDays += differenceInDays(end, afterM);
	}
	if (totalRemainderDays >= 15) totalMonths += 1;
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;
	if (!years && !months) {
		const unit = formatDuration({ months: 1 }, {
			locale,
			format: ["months"]
		}).replace(/^\s*1\s+/, "");
		return `<1\u00A0${locale?.code?.toLowerCase?.().startsWith("ru") ? "месяца" : unit}`;
	}
	return formatDuration({
		years,
		months
	}, {
		locale,
		format: ["years", "months"]
	});
};
//#endregion
//#region src/components/ExperienceSection.tsx
var ExperienceSection = () => {
	const { t, i18n } = useTranslation();
	const { responsibility: responsibilityText, technologies: technologiesText, total: { main: mainTotal, more: moreTotal }, main, more } = t("experience", { returnObjects: true });
	const locale = getDateFnsLocale(i18n.resolvedLanguage);
	const totalProfessionalExperience = getTotalExperienceText(main.data, locale);
	const totalMoreExperience = more?.data?.length ? getTotalExperienceText(more.data, locale) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "py-20 bg-gradient-to-b from-secondary/20 to-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-bold text-gradient mb-4 pb-4",
						children: main.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl text-muted-foreground max-w-2xl mx-auto",
						children: main.subtitle
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-4xl mx-auto mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "glass-effect p-6 border-2 bg-primary/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold text-primary mb-1",
										children: mainTotal.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl font-bold text-gradient",
										children: totalProfessionalExperience
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: mainTotal.description
									})
								]
							}), totalMoreExperience && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold text-primary mb-1",
										children: moreTotal.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl font-bold text-gradient",
										children: totalMoreExperience
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: moreTotal.description
									})
								]
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-4xl mx-auto space-y-8",
					children: main.data.map((experience, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, {
						experience,
						index,
						responsibilityText,
						technologiesText
					}, `main-${index}`))
				}),
				more?.data?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl mx-auto mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative my-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-3 text-xs md:text-sm text-muted-foreground whitespace-nowrap",
								children: [more.title, totalMoreExperience ? ` · ${totalMoreExperience}` : ""]
							})]
						}),
						more.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-muted-foreground mb-8 text-balance",
							children: more.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-8",
							children: more.data.map((experience, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, {
								experience,
								index: main.data.length + index,
								responsibilityText,
								technologiesText
							}, `more-${index}`))
						})
					]
				}) : null
			]
		})
	});
};
//#endregion
export { ExperienceSection as default };
