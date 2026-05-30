import { n as __toESM } from "./rolldown-runtime-FDOR9p9I.js";
import { at as require_jsx_runtime, ot as require_react, v as useTranslation } from "./vendor-ZI3bWEEf.js";
import { n as Card } from "./index-BaHubUL7.js";
import { t as Badge } from "./badge-BZ8NW0RQ.js";
//#region src/widgets/SkillCard/ui/SkillBar.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var SkillBar = ({ skill, isVisible }) => {
	const [animatedLevel, setAnimatedLevel] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				setAnimatedLevel(skill.percent);
			}, 200);
			return () => clearTimeout(timer);
		}
	}, [isVisible, skill.percent]);
	const getColorClass = (percent) => {
		if (percent >= 80) return "bg-success";
		if (percent >= 60) return "bg-primary";
		if (percent >= 40) return "bg-warning";
		return "bg-destructive";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: skill.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted-foreground",
				children: [skill.percent, "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 bg-secondary rounded-full overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `h-full ${getColorClass(skill.percent)} transition-all duration-1000 ease-out`,
				style: { width: `${animatedLevel}%` }
			})
		})]
	});
};
//#endregion
//#region src/widgets/SkillCard/SkillCard.tsx
var SkillCard = ({ index, isVisible, category }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "glass-effect p-6 transition-all duration-500 hover:shadow-glow animate-slide-up",
		style: { animationDelay: `${index * .1}s` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-3 mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "secondary",
				className: "text-primary font-semibold",
				children: category.name
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: category.data.map((skill, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillBar, {
				skill,
				isVisible
			}, index))
		})]
	}, index);
};
//#endregion
//#region src/components/SkillsSection.tsx
var SkillsSection = () => {
	const { t } = useTranslation();
	const sectionRef = (0, import_react.useRef)(null);
	const titleId = (0, import_react.useId)();
	const [isVisible, setIsVisible] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return false;
		return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
	});
	const skills = (0, import_react.useMemo)(() => t("skills", { returnObjects: true }), [t]);
	const learns = (0, import_react.useMemo)(() => t("learns", { returnObjects: true }), [t]);
	const skillCategories = (0, import_react.useMemo)(() => Object.keys(skills.categories), [skills.categories]);
	(0, import_react.useEffect)(() => {
		if (isVisible) return;
		if (typeof window === "undefined") return;
		const show = () => requestAnimationFrame(() => setIsVisible(true));
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			show();
			return;
		}
		if (!("IntersectionObserver" in window)) {
			show();
			return;
		}
		const node = sectionRef.current;
		if (!node) {
			show();
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			setIsVisible(true);
			observer.disconnect();
		}, {
			threshold: .15,
			rootMargin: "0px 0px -10% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, [isVisible]);
	const renderSkill = (0, import_react.useCallback)((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillCard, {
		index,
		category: skills.categories[category],
		isVisible
	}, index), [isVisible, skills.categories]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		ref: sectionRef,
		"aria-labelledby": titleId,
		className: "py-16 md:py-20 bg-linear-to-b from-background to-secondary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12 md:mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: titleId,
							className: "text-3xl md:text-5xl font-bold text-gradient mb-4",
							children: skills.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base md:text-xl text-muted-foreground max-w-2xl mx-auto",
							children: skills.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 text-xs md:text-sm text-muted-foreground",
							children: skills.disclamer
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto",
					children: skillCategories.map(renderSkill)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 md:mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 md:p-8 max-w-4xl mx-auto text-center motion-safe:animate-fade-in motion-reduce:animate-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl md:text-2xl font-bold mb-6 text-gradient",
							children: learns.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2 md:gap-3",
							children: learns.learn.map((tech, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-accent border-accent hover:bg-accent hover:text-accent-foreground transition-smooth",
								children: tech.name
							}, i))
						})]
					})
				})
			]
		})
	});
};
var SkillsSection_default = (0, import_react.memo)(SkillsSection);
//#endregion
export { SkillsSection_default as default };
