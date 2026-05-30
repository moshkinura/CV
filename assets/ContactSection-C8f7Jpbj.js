import { n as __toESM } from "./rolldown-runtime-FDOR9p9I.js";
import { at as require_jsx_runtime, ot as require_react, v as useTranslation } from "./vendor-ZI3bWEEf.js";
import { n as Card, t as Contacts_default } from "./index-BaHubUL7.js";
//#region src/components/ContactSection.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var ContactSection = () => {
	const { t } = useTranslation();
	const titleId = (0, import_react.useId)();
	const contacts = (0, import_react.useMemo)(() => t("contacts", { returnObjects: true }), [t]);
	const cta = (0, import_react.useMemo)(() => t("cta", { returnObjects: true }), [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacts",
		"aria-labelledby": titleId,
		className: "py-16 md:py-20 bg-linear-to-b from-secondary/20 to-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12 md:mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: titleId,
						className: "text-3xl md:text-5xl font-bold text-gradient mb-4",
						children: contacts.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base md:text-xl text-muted-foreground max-w-2xl mx-auto",
						children: contacts.subtitle
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-4xl mx-auto space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacts_default, { variant: "card" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 md:mt-16 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-effect p-6 md:p-8 max-w-2xl mx-auto motion-safe:animate-fade-in motion-reduce:animate-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl md:text-2xl font-bold mb-4 text-gradient",
								children: cta.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-6",
								children: cta.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacts_default, { variant: "cta" })
						]
					})
				})
			]
		})
	});
};
var ContactSection_default = (0, import_react.memo)(ContactSection);
//#endregion
export { ContactSection_default as default };
