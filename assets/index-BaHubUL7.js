const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SkillsSection-DdJsPlbu.js","assets/rolldown-runtime-FDOR9p9I.js","assets/vendor-ZI3bWEEf.js","assets/badge-BZ8NW0RQ.js","assets/ExperienceSection-BDhpUjSo.js","assets/getDateFnsLocale.utils-3fFgKj4i.js","assets/PersonalInfo-CZIXU-qN.js","assets/ContactSection-C8f7Jpbj.js"])))=>i.map(i=>d[i]);
import { n as __toESM } from "./rolldown-runtime-FDOR9p9I.js";
import { $ as useLocation, A as MapPin, D as Phone, E as SearchX, H as Copy, J as ArrowLeft, L as Gitlab, M as Languages, P as House, Q as Routes, R as Github, S as X, T as Send, V as ExternalLink, W as CircleCheckBig, X as Link, Y as BrowserRouter, Z as Route, _ as Slot, at as require_jsx_runtime, b as instance, et as useNavigate, g as clsx, h as cva, it as QueryClientProvider, j as Mail, k as Menu, m as twMerge, nt as require_client, ot as require_react, p as Browser, rt as useQuery, st as QueryClient, tt as __vitePreload, v as useTranslation, y as initReactI18next } from "./vendor-ZI3bWEEf.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/shared/utils/cn.utils.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = /* @__PURE__ */ __toESM(require_client(), 1);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/shared/ui/button.tsx
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "gradient-primary text-primary-foreground hover:opacity-90 shadow-glow",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-border glass-effect text-foreground hover:bg-accent/10 hover:text-accent hover:border-accent",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent/10 hover:text-accent",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/interfaces/languagesI18N.interface.ts
var ELanguage = /* @__PURE__ */ function(ELanguage) {
	ELanguage["EN"] = "en";
	ELanguage["RU"] = "ru";
	return ELanguage;
}({});
//#endregion
//#region src/components/LanguageSwitcher.tsx
var LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const currentLang = (0, import_react.useMemo)(() => {
		return (i18n.resolvedLanguage || i18n.language || "").toLowerCase().startsWith("ru") ? ELanguage.RU : ELanguage.EN;
	}, [i18n.resolvedLanguage, i18n.language]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "sm",
		onClick: (0, import_react.useCallback)(() => {
			const next = currentLang === ELanguage.EN ? ELanguage.RU : ELanguage.EN;
			i18n.changeLanguage(next);
		}, [currentLang, i18n]),
		className: "border border-primary/20 hover:border-primary/40 transition-smooth",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "w-4 h-4 mr-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold",
			children: currentLang.toUpperCase()
		})]
	});
};
//#endregion
//#region src/widgets/Navbar/Navbar.tsx
var Navbar = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("home");
	const navItems = (0, import_react.useMemo)(() => {
		return [
			{
				id: "home",
				label: t("nav.home")
			},
			{
				id: "skills",
				label: t("nav.skills")
			},
			{
				id: "experience",
				label: t("nav.experience")
			},
			{
				id: "personal",
				label: t("nav.personal")
			},
			{
				id: "contacts",
				label: t("nav.contacts")
			}
		];
	}, [t]);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const sections = navItems.map((item) => item.id);
			const scrollPosition = window.scrollY + 100;
			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [navItems]);
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const offsetTop = element.offsetTop - 80;
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth"
			});
		}
		setIsOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between h-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-xl text-gradient",
						children: t("nav.brand")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:flex items-center space-x-1",
						children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollToSection(item.id),
							className: `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.id ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setIsOpen(!isOpen),
							className: "md:hidden",
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-4 h-4" })
						})]
					})
				]
			}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:hidden border-t border-primary/10 py-4 animate-fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col space-y-2",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollToSection(item.id),
						className: `px-4 py-2 text-left rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.id ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,
						children: item.label
					}, item.id))
				})
			})]
		})
	});
};
//#endregion
//#region src/shared/assets/photo.jpg
var photo_default = "/CV/assets/photo.jpg";
//#endregion
//#region src/widgets/Avatar/Avatar.tsx
var Avatar = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative inline-block animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-48 h-48 mx-auto rounded-full overflow-hidden shadow-glow transition-bounce hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo_default,
				alt: "Photo",
				className: "w-full h-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full border-4 border-background animate-pulse-glow" })]
	});
};
//#endregion
//#region src/shared/ui/card.tsx
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
	ref,
	className: cn("text-2xl font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
//#endregion
//#region src/widgets/Contacts/Contacts.tsx
var Contacts = ({ variant = "short" }) => {
	const { t } = useTranslation();
	const contacts = t("contacts", { returnObjects: true });
	const [copied, setCopied] = (0, import_react.useState)(false);
	const contactItems = (0, import_react.useMemo)(() => {
		return [
			contacts?.phone?.value ? {
				icon: Phone,
				label: contacts?.phone?.name ?? "Phone",
				value: contacts?.phone?.value ?? "",
				href: `tel:${contacts?.phone?.value}`,
				type: "phone",
				copyable: true
			} : null,
			contacts?.email?.value ? {
				icon: Mail,
				label: contacts?.email?.name ?? "Email",
				value: contacts?.email?.value ?? "",
				href: `mailto:${contacts?.email?.value}`,
				type: "email",
				copyable: true
			} : null,
			contacts?.telegram?.value ? {
				icon: Send,
				label: contacts?.telegram?.name ?? "Telegram",
				value: `@${contacts?.telegram?.value}`,
				href: `https://t.me/${contacts?.telegram?.value}`,
				type: "social"
			} : null,
			contacts?.github?.value ? {
				icon: Github,
				label: contacts?.github?.name ?? "GitHub",
				value: `@${contacts?.github?.value}`,
				href: `https://github.com/${contacts?.github?.value}`,
				type: "social"
			} : null,
			contacts?.gitlab?.value ? {
				icon: Gitlab,
				label: contacts?.gitlab?.name ?? "GitLab",
				value: `@${contacts?.gitlab?.value}`,
				href: `https://gitlab.com/${contacts?.gitlab?.value}`,
				type: "social"
			} : null
		].filter((x) => Boolean(x?.href));
	}, [contacts]);
	const handleCopy = (0, import_react.useCallback)(async (text) => {
		try {
			if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
			else {
				const ta = document.createElement("textarea");
				ta.value = text;
				ta.setAttribute("readonly", "");
				ta.style.position = "fixed";
				ta.style.opacity = "0";
				document.body.appendChild(ta);
				ta.select();
				document.execCommand("copy");
				document.body.removeChild(ta);
			}
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {}
	}, []);
	const getContactColor = (0, import_react.useCallback)((type) => {
		switch (type) {
			case "phone": return "text-success";
			case "email": return "text-primary";
			case "social": return "text-accent";
			default: return "text-muted-foreground";
		}
	}, []);
	if (variant === "short") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-wrap justify-center gap-2",
		children: [contactItems.map((contact) => {
			const Icon = contact.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "lg",
				asChild: true,
				className: "w-full sm:w-auto transition-bounce hover:shadow-glow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: contact.href,
					className: "flex min-w-0 items-center justify-center gap-2",
					"aria-label": `${contact.label}: ${contact.value}`,
					target: contact.type === "social" ? "_blank" : void 0,
					rel: contact.type === "social" ? "noopener noreferrer" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-5 w-5 shrink-0",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: contact.label
					})]
				})
			}, contact.href);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			"aria-live": "polite",
			children: copied ? "Copied" : ""
		})]
	});
	if (variant === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full grid-cols-1 gap-3 sm:grid-cols-2",
		children: [contactItems.map((contact, i) => {
			const Icon = contact.icon;
			const color = getContactColor(contact.type);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "glass-effect group p-5 transition-all duration-500 hover:shadow-glow animate-slide-up motion-reduce:transition-none motion-reduce:animate-none",
				style: { animationDelay: `${i * .08}s` },
				"data-testid": "card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `rounded-full bg-secondary/50 p-3 ${color} group-hover:scale-110 transition-transform duration-300 motion-reduce:transition-none`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-6 w-6",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold leading-tight text-balance",
								children: contact.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground break-all",
								children: contact.value
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 sm:gap-2",
						children: [contact.copyable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => handleCopy(contact.value),
							className: "h-10 px-3 transition-bounce hover:shadow-accent",
							"aria-label": `Copy ${contact.label}: ${contact.value}`,
							children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
								className: "h-4 w-4 text-success",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
								className: "mr-1 h-4 w-4",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden lg:inline",
								children: contacts?.copy ?? "Copy"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							asChild: true,
							className: "h-10 px-3 transition-bounce hover:shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: contact.href,
								target: contact.type === "social" ? "_blank" : void 0,
								rel: contact.type === "social" ? "noopener noreferrer" : void 0,
								"aria-label": `Open ${contact.label}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							})
						})]
					})]
				})
			}, contact.href);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			"aria-live": "polite",
			children: copied ? "Copied" : ""
		})]
	});
	if (variant === "cta") {
		const findEmail = contactItems.find((c) => c.label === contacts?.email?.name);
		const findTelegram = contactItems.find((c) => c.label === contacts?.telegram?.name);
		const EmailIcon = findEmail.icon;
		const TelegramIcon = findTelegram.icon;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap justify-center gap-3 sm:gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					asChild: true,
					className: "w-full sm:w-auto transition-bounce hover:shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: findEmail.href,
						target: findEmail.type === "social" ? "_blank" : void 0,
						rel: findEmail.type === "social" ? "noopener noreferrer" : void 0,
						"aria-label": "Send Email",
						className: "flex items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailIcon, {
							className: "mr-2 h-5 w-5",
							"aria-hidden": "true"
						}), contacts?.sendEmail]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "lg",
					asChild: true,
					className: "w-full sm:w-auto transition-bounce hover:shadow-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: findTelegram.href,
						target: findTelegram.type === "social" ? "_blank" : void 0,
						rel: findTelegram.type === "social" ? "noopener noreferrer" : void 0,
						"aria-label": "Send Telegram",
						className: "flex items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramIcon, {
							className: "mr-2 h-5 w-5",
							"aria-hidden": "true"
						}), contacts?.sendTelegram]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					"aria-live": "polite",
					children: copied ? "Copied" : ""
				})
			]
		});
	}
	return null;
};
var Contacts_default = (0, import_react.memo)(Contacts);
//#endregion
//#region src/widgets/TypingText/TypingText.tsx
var TypingText = ({ text }) => {
	const [displayText, setDisplayText] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setDisplayText("");
		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex <= text.length) {
				setDisplayText(text.slice(0, currentIndex));
				currentIndex++;
			} else clearInterval(interval);
		}, 100);
		return () => clearInterval(interval);
	}, [text]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block border-r-2 border-primary animate-typing",
		children: displayText
	});
};
//#endregion
//#region src/shared/hooks/useFxRates.ts
var API_URL = "https://v6.exchangerate-api.com/v6/0c5283f1630afea7002267d7/latest";
function useFxRates(base = "RUB") {
	return useQuery({
		queryKey: ["fx-rates", base],
		queryFn: async () => {
			const res = await fetch(`${API_URL}/${encodeURIComponent(base)}`, { cache: "no-store" });
			if (!res.ok) throw new Error("Failed to fetch FX rates");
			const data = await res.json();
			if (data.result !== "success" || !data.conversion_rates) throw new Error("Invalid FX payload");
			return data;
		},
		staleTime: 1e3 * 60 * 60 * 12,
		gcTime: 1e3 * 60 * 60 * 24,
		refetchOnWindowFocus: false,
		retry: 1
	});
}
//#endregion
//#region src/components/Hero.tsx
var ceilStep = (value, step = 10) => Math.ceil(value / step) * step;
var parseRub = (rub) => {
	if (typeof rub === "number") return rub;
	const n = Number(String(rub).replace(/[^\d.]/g, ""));
	return Number.isFinite(n) ? n : 0;
};
var fmt = (currency, value, locale) => new Intl.NumberFormat(locale || void 0, {
	style: "currency",
	currency,
	maximumFractionDigits: 0
}).format(value);
var Hero = () => {
	const { t, i18n } = useTranslation();
	const titleId = (0, import_react.useId)();
	const bio = (0, import_react.useMemo)(() => t("bio", { returnObjects: true }), [t]);
	const pay = (0, import_react.useMemo)(() => t("pay", { returnObjects: true }), [t]);
	const rubAmount = (0, import_react.useMemo)(() => parseRub(pay.rub), [pay.rub]);
	const { data, isLoading, isFetching } = useFxRates("RUB");
	const usd = (0, import_react.useMemo)(() => {
		const rate = data?.conversion_rates?.USD;
		if (!rate || !rubAmount) return null;
		return ceilStep(rubAmount * rate, 10);
	}, [data, rubAmount]);
	const eur = (0, import_react.useMemo)(() => {
		const rate = data?.conversion_rates?.EUR;
		if (!rate || !rubAmount) return null;
		return ceilStep(rubAmount * rate, 10);
	}, [data, rubAmount]);
	const rubText = rubAmount !== null ? fmt("RUB", rubAmount, i18n.resolvedLanguage) : pay.rub;
	const usdText = usd !== null ? fmt("USD", usd, i18n.resolvedLanguage) : pay.usd;
	const eurText = eur !== null ? fmt("EUR", eur, i18n.resolvedLanguage) : pay.eur;
	const loadingRates = (isLoading || isFetching) && (usd === null || eur === null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		role: "banner",
		"aria-labelledby": titleId,
		className: "relative min-h-[100svh] flex items-center justify-center py-16 md:py-20 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 gradient-hero opacity-30 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-4 relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto text-center space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 motion-safe:animate-slide-up motion-reduce:animate-none",
						style: { animationDelay: "0.2s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							id: titleId,
							className: "text-4xl md:text-6xl font-bold text-gradient pb-5",
							children: bio.fio
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xl md:text-2xl text-muted-foreground font-mono",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingText, { text: bio.position })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 text-muted-foreground motion-safe:animate-fade-in motion-reduce:animate-none",
						style: { animationDelay: "0.4s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "w-5 h-5",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bio.geo })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-effect rounded-2xl p-6 max-w-md mx-auto motion-safe:animate-scale-in motion-reduce:animate-none",
						style: { animationDelay: "0.6s" },
						"aria-busy": loadingRates || void 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold mb-2",
								children: pay.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xl font-bold text-primary",
								children: [
									pay.from,
									" ",
									rubText,
									" / ",
									usdText,
									" / ",
									eurText
								]
							}),
							loadingRates && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block h-3 w-28 mx-auto rounded bg-muted animate-pulse",
								"aria-hidden": "true"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-4 motion-safe:animate-slide-up motion-reduce:animate-none",
						style: { animationDelay: "0.8s" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacts_default, { variant: "short" })
					})
				]
			})
		})]
	});
};
var Hero_default = (0, import_react.memo)(Hero);
//#endregion
//#region src/components/skeletons/ui/Box.tsx
var Box = ({ className = "" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: `animate-pulse rounded-md bg-muted ${className}`,
	"aria-hidden": "true"
});
//#endregion
//#region src/components/skeletons/ui/SectionShell.tsx
var SectionShell = ({ titleWidth = "w-48", subWidth = "w-72", children, className = "" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: `py-20 ${className}`,
	"aria-busy": "true",
	role: "status",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container mx-auto px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: `mx-auto h-8 ${titleWidth}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: `mx-auto mt-4 h-4 ${subWidth}` })]
		}), children]
	})
});
//#endregion
//#region src/components/skeletons/ContactSectionSkeleton.tsx
var ContactSectionSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "flex flex-wrap justify-center gap-3 sm:gap-4",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "h-10 w-40 rounded-full" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "h-10 w-44 rounded-full" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "h-10 w-36 rounded-full" })
	]
}) });
//#endregion
//#region src/components/skeletons/ExperienceSectionSkeleton.tsx
var ExperienceSectionSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionShell, {
	className: "bg-gradient-to-b from-secondary/20 to-background",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto mb-12 max-w-4xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border-2 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mx-auto h-5 w-56" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mx-auto mt-3 h-8 w-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mx-auto mt-2 h-4 w-64" })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-4xl space-y-6",
		children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "h-5 w-52" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-4 h-4 w-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-11/12" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-10/12" })
			]
		}, i))
	})]
});
//#endregion
//#region src/components/skeletons/PersonalInfoSkeleton.tsx
var PersonalInfoSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "h-5 w-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-3 h-4 w-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-10/12" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-9/12" })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "h-5 w-44" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-3 h-4 w-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-10/12" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-9/12" })
		]
	})]
}) });
//#endregion
//#region src/components/skeletons/SkillsSectionSkeleton.tsx
var SkillsSectionSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
	children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "h-5 w-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-4 h-4 w-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-5/6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "mt-2 h-4 w-2/3" })
		]
	}, i))
}) });
//#endregion
//#region src/pages/Index.tsx
var SkillsSection = (0, import_react.lazy)(() => __vitePreload(() => import("./SkillsSection-DdJsPlbu.js"), __vite__mapDeps([0,1,2,3])));
var ExperienceSection = (0, import_react.lazy)(() => __vitePreload(() => import("./ExperienceSection-BDhpUjSo.js"), __vite__mapDeps([4,1,2,3,5])));
var PersonalInfo = (0, import_react.lazy)(() => __vitePreload(() => import("./PersonalInfo-CZIXU-qN.js"), __vite__mapDeps([6,2,1,3,5])));
var ContactSection = (0, import_react.lazy)(() => __vitePreload(() => import("./ContactSection-C8f7Jpbj.js"), __vite__mapDeps([7,1,2])));
var Index = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero_default, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSectionSkeleton, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSectionSkeleton, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalInfoSkeleton, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalInfo, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSectionSkeleton, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-8 border-t",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container mx-auto px-4 py-4 text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["tag: ", "v4.1.0"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								title: "96864172606a6d09fdc97313885ccc96f29878ff",
								children: ["commit: ", "9686417"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["date: ", "Tue Jan 6 20:18:06 2026 +0700"] })
						]
					})
				})
			})
		]
	});
};
var Index_default = (0, import_react.memo)(Index);
//#endregion
//#region src/pages/NotFound.tsx
var NotFound = () => {
	const location = useLocation();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		console.error("404 Error: User attempted to access non-existent route:", location.pathname);
		if (typeof document !== "undefined") document.title = "404 — Page not found";
	}, [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-svh grid place-items-center bg-linear-to-b from-background to-secondary/20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "text-center max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4 mb-4 motion-safe:animate-pulse motion-reduce:animate-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchX, {
						className: "w-8 h-8 text-primary",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-6xl md:text-7xl font-black tracking-tight text-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base md:text-lg text-muted-foreground",
					children: "Oops! Page not found."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs md:text-sm text-muted-foreground/80",
					children: [
						"Requested path:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "px-1.5 py-0.5 rounded bg-muted text-foreground",
							children: location.pathname
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col sm:flex-row items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						className: "w-full sm:w-auto",
						onClick: () => navigate(-1),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "w-4 h-4 mr-2",
							"aria-hidden": "true"
						}), "Go back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						asChild: true,
						className: "w-full sm:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							"aria-label": "Return to Home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
								className: "w-4 h-4 mr-2",
								"aria-hidden": "true"
							}), "Return to Home"]
						})
					})]
				})
			]
		})
	});
};
var NotFound_default = (0, import_react.memo)(NotFound);
//#endregion
//#region src/app/App.tsx
var App = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserRouter, {
		basename: "/CV/".replace(/\/$/, "") || void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Index_default, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "*",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound_default, {})
		})] })
	}) });
};
var translation_default$1 = {
	nav: {
		"brand": "Yury Moshkin",
		"home": "Home",
		"skills": "Skills",
		"experience": "Experience",
		"personal": "Personal",
		"contacts": "Contact"
	},
	bio: {
		"fio": "Yury Moshkin",
		"position": "Senior Node.js Backend Developer",
		"geo": "KUZBASS, Yurga (business trips possible)"
	},
	pay: {
		"title": "Desired salary:",
		"from": "from",
		"rub": "300000₽",
		"usd": "$3300",
		"eur": "€3150"
	},
	contacts: {
		"title": "Contact me",
		"subtitle": "Open to opportunities and networking",
		"copy": "Copy",
		"copied": "Copied",
		"sendEmail": "Send email",
		"sendTelegram": "Message on Telegram",
		"phone": {
			"name": "Phone",
			"value": "+7(900)100-10-10"
		},
		"email": {
			"name": "Email",
			"value": "moshkin_ura@mail.ru"
		},
		"telegram": {
			"name": "Telegram",
			"value": "bikeauto"
		},
		"github": {
			"name": "GitHub",
			"value": "moshkinura"
		},
		"gitlab": {
			"name": "GitLab",
			"value": "moshkinura"
		}
	},
	skills: {
		"title": "Technical skills",
		"description": "Experience with the following technologies* and frameworks*.",
		"disclamer": "* Skill ratings are subjective and may differ from reality",
		"categories": {
			"language": {
				"name": "Language",
				"data": [{
					"name": "Node (Javascript)",
					"percent": 85
				}, {
					"name": "TypeScript",
					"percent": 85
				}]
			},
			"backend": {
				"name": "Backend",
				"data": [{
					"name": "Express",
					"percent": 90
				}, {
					"name": "Nest",
					"percent": 95
				}]
			},
			"frontend": {
				"name": "Frontend",
				"data": [
					{
						"name": "React 18+",
						"percent": 80
					},
					{
						"name": "HTML5 / CSS3",
						"percent": 65
					},
					{
						"name": "Bootstrap 5+",
						"percent": 30
					},
					{
						"name": "Tailwind 4+",
						"percent": 50
					},
					{
						"name": "React Redux",
						"percent": 50
					},
					{
						"name": "React Router Dom",
						"percent": 85
					},
					{
						"name": "Tanstack Query",
						"percent": 85
					}
				]
			},
			"database": {
				"name": "Databases",
				"data": [
					{
						"name": "TypeORM",
						"percent": 85
					},
					{
						"name": "PostgreSQL",
						"percent": 90
					},
					{
						"name": "MongoDB",
						"percent": 50
					},
					{
						"name": "MySQL",
						"percent": 65
					}
				]
			},
			"devops": {
				"name": "DevOps",
				"data": [
					{
						"name": "Docker / Compose",
						"percent": 80
					},
					{
						"name": "GitLab CI/CD",
						"percent": 50
					},
					{
						"name": "Kubernetes (k8s)",
						"percent": 5
					}
				]
			},
			"tools": {
				"name": "Tools",
				"data": [{
					"name": "Git (Version Control Systems)",
					"percent": 95
				}, {
					"name": "Bash / Console",
					"percent": 40
				}]
			},
			"desktop": {
				"name": "Desktop",
				"data": [{
					"name": "Electron.js",
					"percent": 15
				}]
			},
			"mobile": {
				"name": "Mobile",
				"data": [{
					"name": "React Native / Expo",
					"percent": 15
				}]
			},
			"testing": {
				"name": "Testing",
				"data": [{
					"name": "Jest",
					"percent": 20
				}]
			},
			"general": {
				"name": "Computer literacy",
				"data": [{
					"name": "Computer proficiency",
					"percent": 95
				}]
			}
		}
	},
	learns: {
		"title": "Learning next:",
		"learn": [
			{ "name": "Kubernetes (k8s)" },
			{ "name": "RabbitMQ" },
			{ "name": "Apache Kafka" },
			{ "name": "gRPC" },
			{ "name": "Protocol Buffers" },
			{ "name": "n8n" }
		]
	},
	experience: {
		"now": "present",
		"responsibility": "Key responsibilities",
		"technologies": "Technologies used",
		"total": {
			"main": {
				"title": "Total professional experience: ",
				"description": ""
			},
			"more": {
				"title": "Additional experience:",
				"description": ""
			}
		},
		"main": {
			"title": "Professional experience",
			"subtitle": "",
			"data": [
				{
					"company": "Freelance",
					"position": "Senior fullstack developer",
					"location": "-",
					"period": ["2024/03/01", null],
					"projects": [
						{
							"name": "Project: Internal Payment GATE (NDA)",
							"description": "Internal payment gateway for merchants: REST API, hosted checkout with 3DS 2.0, rebill/OCT/refund, HMAC-signed webhooks.",
							"responsibilities": [
								"Designed the NestJS payment gateway backend: multi-tenant projects, merchant API, and JWT admin panel.",
								"Integrated an external payment provider: authorize/charge, 3DS 2.0, rebill, credit (OCT), cancel/refund.",
								"Built hosted checkout and card-auth flow on React/Vite with 3DS callback handling.",
								"Implemented merchant integration: order idempotency, HMAC webhook dispatcher with retries.",
								"Developed the admin panel: analytics, project management, orders, webhook deliveries.",
								"Configured Docker, GitLab CI/CD, PostgreSQL migrations, and staging environment."
							],
							"technologies": [
								"Node (Javascript)",
								"TypeScript",
								"Nest",
								"PostgreSQL",
								"TypeORM",
								"React/Vite",
								"Tanstack Query",
								"Docker/Compose",
								"S3",
								"GitLab CI/CD"
							]
						},
						{
							"name": "Project: CS2 Skins Marketplace Portal (NDA)",
							"description": "Marketplace for buying and selling Counter-Strike 2 skins: Steam auth, catalog, cart, internal balance, KYC, and payouts.",
							"responsibilities": [
								"Designed the NestJS backend: auth, items, checkout, payments, balance, KYC, RBAC.",
								"Integrated Steam OpenID and CS2 inventory loading with Steam Community Market pricing.",
								"Implemented buy/sell flows: filtered catalog, cart, checkout, and request state machine.",
								"Connected the payment gateway: balance top-ups, webhooks, withdrawals, and OCT seller payouts.",
								"Built the KYC module with S3 document uploads and admin moderation.",
								"Delivered the React/Vite SPA with an admin panel; configured Docker and GitLab CI/CD."
							],
							"technologies": [
								"Node (Javascript)",
								"TypeScript",
								"Nest",
								"PostgreSQL",
								"TypeORM",
								"Steam OpenID",
								"React/Vite",
								"Tanstack Query",
								"Docker/Compose",
								"S3",
								"GitLab CI/CD"
							]
						},
						{
							"name": "Project: AI Image Processing Portal (NDA)",
							"description": "Portal for image generation, background removal, and upscaling: job queues, progress tracking, billing, S3 storage.",
							"responsibilities": [
								"Designed the architecture and domain model (job pipelines, presets, versions).",
								"Implemented S3 storage and delivery",
								"Implemented limits/quotas and billing, role-based access control.",
								"Configured CI/CD (GitLab): Docker image builds, migrations, deployments.",
								"Ongoing maintenance: bug fixes and uptime monitoring."
							],
							"technologies": [
								"Node (Javascript)",
								"Nest",
								"PostgreSQL",
								"TypeORM",
								"Docker/Compose",
								"S3",
								"React/Vite",
								"GitLab CI/CD"
							]
						},
						{
							"name": "Project: Unity/WebGL Games Portal (NDA)",
							"description": "Platform for Unity/WebGL games with user management and payments.",
							"responsibilities": [
								"Led a team of three (2 FE, 1 BE): planning, prioritization, reviews.",
								"Designed and optimized the backend for high performance and scalability.",
								"Aligned FE/BE logic; supported React team with API integration.",
								"Integrated a payment gateway and ensured secure transaction processing.",
								"Implemented CI/CD (GitLab) for automated production releases.",
								"Ongoing maintenance: bug fixes and uptime monitoring."
							],
							"technologies": [
								"Node (Javascript)",
								"Nest",
								"PostgreSQL",
								"TypeORM",
								"Docker/Compose",
								"S3",
								"React/Vite",
								"GitLab CI/CD"
							]
						}
					]
				},
				{
					"company": "Dats.Games",
					"position": "Senior backend developer",
					"location": "Moscow",
					"period": ["2024/05/01", "2025/01/01"],
					"projects": [{
						"name": "Project: Telegram Mini App game/app with a unique crash mechanic (NDA)",
						"description": "",
						"responsibilities": [
							"Designed a high-load backend for complex gameplay in Telegram Mini App.",
							"Optimized PostgreSQL: indexes and complex queries.",
							"Implemented Redis caching to reduce DB load and speed up responses.",
							"Integrated Telegram API.",
							"Set up CI/CD (GitLab) for fast and predictable releases."
						],
						"technologies": [
							"Node (Javascript)",
							"Nest",
							"PostgreSQL",
							"TypeORM",
							"Docker/Compose",
							"Redis",
							"Telegram API",
							"GitLab CI/CD"
						]
					}]
				},
				{
					"company": "ITGost",
					"position": "Middle backend developer",
					"location": "Krasnodar",
					"period": ["2022/04/04", "2024/02/04"],
					"projects": [{
						"name": "Project: CRM for a website builder platform",
						"description": "",
						"responsibilities": [
							"Developed and integrated new CRM modules.",
							"Diagnosed and fixed bugs, improved system stability.",
							"Wrote Jest unit tests to improve reliability.",
							"Refactored legacy code and optimized performance."
						],
						"technologies": [
							"Node (Javascript)",
							"Express",
							"PostgreSQL",
							"Jest",
							"Docker/Compose",
							"Kubernetes (k8s)",
							"Redis"
						]
					}, {
						"name": "Project: Tool for manual and automated API testing (Postman-like)",
						"description": "",
						"responsibilities": [
							"Designed the data model and database structure.",
							"Implemented APIs for interaction between system components.",
							"Built on a microservices architecture for flexibility and scalability.",
							"Set up CI/CD for automated build and deployment.",
							"Fixed defects and improved product quality."
						],
						"technologies": [
							"Node (Javascript)",
							"Nest",
							"PostgreSQL",
							"TypeORM",
							"Jest",
							"Docker/Compose",
							"Redis",
							"Kafka",
							"GitLab CI/CD"
						]
					}]
				}
			]
		},
		"more": {
			"title": "Additional experience",
			"subtitle": "",
			"data": [
				{
					"company": "Auto and Moto Parts Store",
					"position": "Fullstack Developer",
					"location": "Moscow",
					"period": ["2013/02/01", "2022/04/01"],
					"projects": [{
						"name": "Project: Online store",
						"description": "E-commerce site and internal tools for catalog, orders and inventory.",
						"responsibilities": ["Developed and maintained the company website.", "Built internal tools for operational activities."],
						"technologies": [
							"HTML5/CSS3",
							"PHP",
							"Bootstrap",
							"Nginx",
							"Node.js",
							"Express",
							"PostgreSQL"
						]
					}]
				},
				{
					"company": "Tattoo Studio ­«sTATUS»",
					"position": "System Administrator",
					"location": "Yurga",
					"period": ["2020/09/01", "2022/04/01"],
					"projects": [{
						"name": "IT infrastructure support",
						"description": "Small office support: 5+ workstations, peripherals, basic network, backups.",
						"responsibilities": [
							"Serviced and diagnosed workstations and peripherals.",
							"Basic network and software setup, updates and antivirus.",
							"Backups and hardware inventory."
						],
						"technologies": [
							"OS & office software",
							"Peripherals",
							"Backup",
							"LAN (basic)"
						]
					}]
				},
				{
					"company": "Taxi «Funtik/Casper»",
					"position": "System Administrator",
					"location": "Yurga",
					"period": ["2020/11/01", "2022/04/01"],
					"projects": [{
						"name": "Workstation support",
						"description": "Support for 2 workstations: network/software, peripherals, basic security.",
						"responsibilities": ["Configured and maintained PCs and peripherals.", "Basic network configuration and software updates."],
						"technologies": [
							"OS & office software",
							"Peripherals",
							"LAN (basic)"
						]
					}]
				},
				{
					"company": "Sole Proprietor",
					"position": "Sole proprietor (auto parts store / Yandex.Taxi franchise)",
					"location": "Yurga",
					"period": ["2016/08/26", "2019/05/15"],
					"projects": [{
						"name": "Operations management",
						"description": "Built and sold the business",
						"responsibilities": ["Organized sales and operations, maintained basic accounting.", "Worked with suppliers and contracts, managed inventory."],
						"technologies": [
							"Operations management",
							"Accounting & procurement",
							"Contract work"
						]
					}]
				},
				{
					"company": "Goodline (LLC «E-Light-Telecom»)",
					"position": "Sales Manager",
					"location": "Yurga",
					"period": ["2015/05/01", "2015/08/01"],
					"projects": [{
						"name": "Telecom services sales",
						"description": "B2C sales of ISP services (internet, TV); trained in cold calling.",
						"responsibilities": ["Consulted customers and arranged connections.", "Met sales targets; conducted cold outreach."],
						"technologies": [
							"CRM",
							"Sales scripts",
							"Cold outreach"
						]
					}]
				}
			]
		}
	},
	personals: {
		"title": "Personal information",
		"description": "Professional details and preferences",
		"personal": {
			"title": "Personal data",
			"data": {
				"nationality": {
					"name": "Citizenship",
					"value": "Russian Federation"
				},
				"education": {
					"name": "Education",
					"value": "Secondary"
				},
				"birthday": {
					"name": "Date of birth",
					"value": "1997/02/25"
				},
				"gender": {
					"name": "Gender",
					"value": "Male"
				},
				"marital": {
					"name": "Marital status",
					"value": "Civil partnership"
				}
			}
		},
		"details": {
			"title": "Additional information",
			"driver": {
				"name": "Driver’s license:",
				"value": "Category B — in progress."
			},
			"hobbies": {
				"name": "Hobbies & interests:",
				"value": "Read professional literature; run several pet projects (Nest, React, Kubernetes). Constantly expanding the stack and improving skills."
			},
			"qualities": {
				"name": "Personal qualities:",
				"value": [
					"Ambitious",
					"Communicative",
					"Tactful",
					"helpful",
					"Open to feedback",
					"Team player",
					"Resilient",
					"Commited to continuous learning"
				]
			}
		},
		"languages": {
			"title": "Languages",
			"language": [{
				"name": "Russian",
				"level": "native",
				"percent": 99
			}, {
				"name": "English",
				"level": "Basic — A1",
				"percent": 15
			}]
		},
		"shedules": {
			"title": "Work schedule preferences",
			"shedule": [
				"Shift work",
				"Full-time",
				"Part-time",
				"Flexible schedule",
				"Irregular hours"
			]
		},
		"employments": {
			"title": "Employment types",
			"employment": [
				"Employment contract",
				"Contract work",
				"Self-employment"
			]
		},
		"recommendations": {
			"title": "References",
			"information": "References from «VTEK» available upon request.",
			"note": ""
		},
		"configure": {
			"title": "My computer configuration",
			"elements": [
				{
					"component": "CPU:",
					"spec": "Intel XEON E5-2696"
				},
				{
					"component": "RAM:",
					"spec": "48GB"
				},
				{
					"component": "GPU:",
					"spec": "NVIDIA GeForce GTX 750 / AMD Radeon RX 580"
				},
				{
					"component": "OS:",
					"spec": "Windows 10 Enterprise LTSC"
				},
				{
					"component": "IDE:",
					"spec": "Visual Studio Code (VSC), Cursor"
				}
			]
		}
	},
	cta: {
		"title": "Let’s work together",
		"subtitle": "I’m always interested in new opportunities and challenging projects. Feel free to reach out to discuss potential collaboration."
	}
};
var translation_default = {
	nav: {
		"brand": "Мошкин Юрий",
		"home": "Главная",
		"skills": "Навыки",
		"experience": "Опыт",
		"personal": "Личное",
		"contacts": "Контакты"
	},
	bio: {
		"fio": "Мошкин Юрий Алексеевич",
		"position": "Senior NODE.JS backend developer",
		"geo": "КУЗБАСС, г.Юрга (возможны командировки)"
	},
	pay: {
		"title": "Желаемая зарплата:",
		"from": "от",
		"rub": "300000₽",
		"usd": "$3300",
		"eur": "€3150"
	},
	contacts: {
		"title": "Связаться со мной",
		"subtitle": "Открыт для новых возможностей и налаживания связей",
		"copy": "Копировать",
		"copied": "Скопировано",
		"sendEmail": "Отправить письмо",
		"sendTelegram": "Написать в Telegram",
		"phone": {
			"name": "Телефон",
			"value": "+7(900)100-10-10"
		},
		"email": {
			"name": "Email",
			"value": "moshkin_ura@mail.ru"
		},
		"telegram": {
			"name": "Telegram",
			"value": "bikeauto"
		},
		"github": {
			"name": "GitHub",
			"value": "moshkinura"
		},
		"gitlab": {
			"name": "GitLab",
			"value": "moshkinura"
		}
	},
	skills: {
		"title": "Технические навыки",
		"description": "Опыт работы со следующими технологиями* и фреймворками*",
		"disclamer": "* - Оценка навыка, может отличаться от действительности, чисто объективно-оценочное суждение",
		"categories": {
			"language": {
				"name": "Языки",
				"data": [{
					"name": "Node (Javascript)",
					"percent": 85
				}, {
					"name": "TypeScript",
					"percent": 85
				}]
			},
			"backend": {
				"name": "Backend",
				"data": [{
					"name": "Express",
					"percent": 90
				}, {
					"name": "Nest",
					"percent": 95
				}]
			},
			"frontend": {
				"name": "Frontend",
				"data": [
					{
						"name": "React 18+",
						"percent": 80
					},
					{
						"name": "HTML5 / CSS3",
						"percent": 65
					},
					{
						"name": "BOOTSTRAP 5+",
						"percent": 30
					},
					{
						"name": "TailWind 4+",
						"percent": 50
					},
					{
						"name": "React Redux",
						"percent": 50
					},
					{
						"name": "React Router Dom",
						"percent": 85
					},
					{
						"name": "Tanstack Query",
						"percent": 85
					}
				]
			},
			"database": {
				"name": "Базы данных",
				"data": [
					{
						"name": "TypeORM",
						"percent": 85
					},
					{
						"name": "PostgreSQL",
						"percent": 90
					},
					{
						"name": "MongoDB",
						"percent": 50
					},
					{
						"name": "MySQL",
						"percent": 65
					}
				]
			},
			"devops": {
				"name": "DevOps",
				"data": [
					{
						"name": "Docker / Compose",
						"percent": 80
					},
					{
						"name": "GitLab CI/CD",
						"percent": 50
					},
					{
						"name": "Kubernetes (k8s)",
						"percent": 5
					}
				]
			},
			"tools": {
				"name": "Инструменты",
				"data": [{
					"name": "GIT (Version Control Systems)",
					"percent": 95
				}, {
					"name": "Bash / Console",
					"percent": 40
				}]
			},
			"desktop": {
				"name": "Desktop",
				"data": [{
					"name": "Electron.JS",
					"percent": 15
				}]
			},
			"mobile": {
				"name": "Мобильная платформа",
				"data": [{
					"name": "React Native/Expo",
					"percent": 15
				}]
			},
			"testing": {
				"name": "Тестирование",
				"data": [{
					"name": "Jest.js",
					"percent": 20
				}]
			},
			"general": {
				"name": "Компьютерная грамотность",
				"data": [{
					"name": "Владение компьютером",
					"percent": 95
				}]
			}
		}
	},
	learns: {
		"title": "Далее хочу изучить:",
		"learn": [
			{ "name": "Kubernetes (k8s)" },
			{ "name": "RabbitMQ" },
			{ "name": "Apache Kafka" },
			{ "name": "gRPC" },
			{ "name": "Protocol Buffers" },
			{ "name": "n8n" }
		]
	},
	experience: /* @__PURE__ */ JSON.parse("{\"now\":\"настоящее время\",\"responsibility\":\"Основные обязанности\",\"technologies\":\"Используемые технологии\",\"total\":{\"main\":{\"title\":\"Профессиональный опыт работы:\",\"description\":\"\"},\"more\":{\"title\":\"Дополнительный опыт работы:\",\"description\":\"\"}},\"main\":{\"title\":\"Основной опыт работы\",\"subtitle\":\"Профессиональный путь и достижения\",\"data\":[{\"company\":\"Фриланс\",\"position\":\"Senior fullstack developer\",\"location\":\"-\",\"period\":[\"2024/03/01\",null],\"projects\":[{\"name\":\"Проект: Внутренний платежный GATE (NDA)\",\"description\":\"Внутренний платёжный шлюз для мерчантов: REST API, hosted checkout с 3DS 2.0, rebill/OCT/refund, webhooks с HMAC-подписью.\",\"responsibilities\":[\"Спроектировал backend платёжного шлюза на NestJS: мультитенантные проекты, merchant API и JWT-админка.\",\"Интегрировал внешний платёжный провайдер: authorize/charge, 3DS 2.0, rebill, credit (OCT), cancel/refund.\",\"Реализовал hosted checkout и card-auth flow на React/Vite с обработкой 3DS callback.\",\"Построил merchant-интеграцию: идемпотентность заказов, webhook dispatcher с HMAC и retry.\",\"Разработал админ-панель: аналитика, управление проектами, заказы, webhook deliveries.\",\"Настроил Docker, GitLab CI/CD, PostgreSQL migrations и staging-окружение.\"],\"technologies\":[\"Node (Javascript)\",\"TypeScript\",\"Nest\",\"PostgreSQL\",\"TypeORM\",\"React/Vite\",\"Tanstack Query\",\"Docker/Compose\",\"S3\",\"Gitlab CI/CD\"]},{\"name\":\"Проект: Портал по продаже CS2 скинов (NDA)\",\"description\":\"Маркетплейс для покупки и продажи скинов Counter-Strike 2: Steam-авторизация, каталог, корзина, внутренний баланс, KYC и выплаты.\",\"responsibilities\":[\"Спроектировал backend на NestJS: auth, items, checkout, payments, balance, KYC, RBAC.\",\"Интегрировал Steam OpenID и загрузку CS2-инвентаря с ценами Steam Community Market.\",\"Реализовал потоки покупки/продажи: каталог с фильтрами, корзина, checkout, state machine заявок.\",\"Подключил платёжный шлюз: пополнение баланса, webhooks, вывод средств и OCT-выплаты продавцам.\",\"Разработал KYC-модуль с загрузкой документов в S3 и админ-модерацией.\",\"Собрал SPA на React/Vite с админ-панелью; настроил Docker и GitLab CI/CD.\"],\"technologies\":[\"Node (Javascript)\",\"TypeScript\",\"Nest\",\"PostgreSQL\",\"TypeORM\",\"Steam OpenID\",\"React/Vite\",\"Tanstack Query\",\"Docker/Compose\",\"S3\",\"Gitlab CI/CD\"]},{\"name\":\"Проект: Портал обработки изображений с ИИ (NDA)\",\"description\":\"Портал для генерации, удаления фона и апскейла изображений: очереди задач, прогресс выполнения, биллинг, хранение в S3.\",\"responsibilities\":[\"Спроектировал архитектуру и доменную модель (job-пайплайны, пресеты, версии).\",\"Настроил хранение и выдачу через S3.\",\"Встроил лимиты/квоты и биллинг, разграничение ролей пользователей.\",\"Настроил CI/CD (GitLab): сборка Docker-образов, миграции, деплой.\",\"Долгосрочная поддержка: правки и мониторинг доступности.\"],\"technologies\":[\"Node (Javascript)\",\"Nest\",\"PostgreSQL\",\"TypeORM\",\"Docker/Compose\",\"S3\",\"React/Vite\",\"Gitlab CI/CD\"]},{\"name\":\"Проект: Портал для Unity/WebGL игр (NDA)\",\"description\":\"Платформа для Unity/WebGL-игр с управлением пользователями и платежами.\",\"responsibilities\":[\"Руководил командой из 3 (2 FE, 1 BE): планирование, приоритизация, ревью.\",\"Спроектировал и оптимизировал backend для высокой производительности и масштабируемости.\",\"Синхронизировал бизнес-логику FE/BE, поддерживал команду React в интеграции API.\",\"Интегрировал платёжный шлюз и настроил безопасную обработку транзакций.\",\"Внедрил CI/CD (GitLab) для автоматизированных релизов на production.\",\"Долгосрочная поддержка: правки и мониторинг доступности.\"],\"technologies\":[\"Node (Javascript)\",\"Nest\",\"PostgreSQL\",\"TypeORM\",\"Docker/Compose\",\"S3\",\"React/Vite\",\"Gitlab CI/CD\"]}]},{\"company\":\"Dats.Games\",\"position\":\"Senior backend developer\",\"location\":\"г.Москва\",\"period\":[\"2024/05/01\",\"2025/01/01\"],\"projects\":[{\"name\":\"Проект: Telegram Mini App игра/приложение c уникальной краш-механикой (NDA)\",\"description\":\"\",\"responsibilities\":[\"Спроектировал высоконагруженный backend под игровые сценарии в Telegram MiniApp.\",\"Оптимизировал PostgreSQL: индексы и сложные запросы.\",\"Внедрил кэширование на Redis для разгрузки БД и ускорения отклика.\",\"Интегрировал Telegram API.\",\"Настроил CI/CD (GitLab) для быстрых и предсказуемых релизов.\"],\"technologies\":[\"Node (Javascript)\",\"Nest\",\"PostgreSQL\",\"TypeORM\",\"Docker/Compose\",\"Redis\",\"Telegram API\",\"Gitlab CI/CD\"]}]},{\"company\":\"Компания ITGost\",\"position\":\"Middle backend developer\",\"location\":\"г.Краснодар\",\"period\":[\"2022/04/04\",\"2024/02/04\"],\"projects\":[{\"name\":\"Проект: CRM для конструктора сайтов\",\"description\":\"\",\"responsibilities\":[\"Разрабатывал и интегрировал новые модули CRM.\",\"Искал и устранял баги, повышал стабильность системы.\",\"Писал юнит-тесты на Jest для повышения надёжности.\",\"Проводил рефакторинг legacy-кода и оптимизацию производительности.\"],\"technologies\":[\"Node (Javascript)\",\"Express\",\"PostgreSQL\",\"Jest\",\"Docker/Compose\",\"Kubernetes (k8s)\",\"Redis\"]},{\"name\":\"Проект: Приложение для ручного и автоматизированного тестирования API (аналог Postman)\",\"description\":\"\",\"responsibilities\":[\"Спроектировал модель данных и структуру БД.\",\"Реализовал API для взаимодействия компонентов системы.\",\"Работал с микросервисной архитектурой для гибкости и масштабируемости.\",\"Настроил CI/CD для автоматизации сборки и деплоя.\",\"Устранял дефекты и повышал качество продукта.\"],\"technologies\":[\"Node (Javascript)\",\"Nest\",\"PostgreSQL\",\"TypeORM\",\"Jest\",\"Docker/Compose\",\"Redis\",\"Kafka\",\"Gitlab CI/CD\"]}]}]},\"more\":{\"title\":\"Дополнительный опыт работы\",\"subtitle\":\"\",\"data\":[{\"company\":\"Авто-Мото магазин запчастей\",\"position\":\"Fullstack разработчик\",\"location\":\"г.Москва\",\"period\":[\"2013/02/01\",\"2022/04/01\"],\"projects\":[{\"name\":\"Проект: Интернет-магазин\",\"description\":\"E-commerce сайт и внутренние сервисы для автоматизации операций (каталог, заказы, склад).\",\"responsibilities\":[\"Разрабатывал и сопровождал сайт компании.\",\"Создавал внутренние инструменты для операционной деятельности.\"],\"technologies\":[\"HTML5/CSS3\",\"PHP\",\"Bootstrap\",\"Nginx\",\"Node.js\",\"Express\",\"PostgreSQL\"]}]},{\"company\":\"Тату студия «сТАТУс»\",\"position\":\"Системный администратор\",\"location\":\"г. Юрга\",\"period\":[\"2020/09/01\",\"2022/04/01\"],\"projects\":[{\"name\":\"Поддержка IT-инфраструктуры\",\"description\":\"Техподдержка малого офиса: 5+ рабочих станций и периферия, базовая сеть, резервные копии.\",\"responsibilities\":[\"Обслуживание и диагностика рабочих станций и периферии.\",\"Базовая настройка сети и ПО, обновления и антивирус.\",\"Резервное копирование и инвентаризация оборудования.\"],\"technologies\":[\"ОС и офисное ПО\",\"Периферия\",\"Backup\",\"LAN (базовая)\"]}]},{\"company\":\"Такси «Фунтик/Casper»\",\"position\":\"Системный администратор\",\"location\":\"г. Юрга\",\"period\":[\"2020/11/01\",\"2022/04/01\"],\"projects\":[{\"name\":\"Поддержка IT-рабочих мест\",\"description\":\"Обслуживание 2 рабочих станций: сеть и ПО, периферия, базовая безопасность.\",\"responsibilities\":[\"Настройка и поддержка ПК и периферии.\",\"Базовая сетевая конфигурация и обновления ПО.\"],\"technologies\":[\"ОС и офисное ПО\",\"Периферия\",\"LAN (базовая)\"]}]},{\"company\":\"Индивидуальный предприниматель\",\"position\":\"Владелец бизнеса (магазин автозапчастей / франшиза Yandex.Taxi)\",\"location\":\"г. Юрга\",\"period\":[\"2016/08/26\",\"2019/05/15\"],\"projects\":[{\"name\":\"Операционное управление\",\"description\":\"Запуск и развитие бизнеса c последующей продажей.\",\"responsibilities\":[\"Организовал продажи и операционку, вел базовый учёт.\",\"Работал с поставщиками и договорами, управлял запасами.\"],\"technologies\":[\"Операционное управление\",\"Учёт и закупки\",\"Работа с договорами\"]}]},{\"company\":\"Goodline (ООО «Е-Лайт-Телеком»)\",\"position\":\"Менеджер отдела продаж\",\"location\":\"г. Юрга\",\"period\":[\"2015/05/01\",\"2015/08/01\"],\"projects\":[{\"name\":\"Продажи телеком-услуг\",\"description\":\"B2C-продажи услуг провайдера (интернет, ТВ), в процессе был обучен техникам холодных продаж.\",\"responsibilities\":[\"Консультировал клиентов и оформлял подключения.\",\"Выполнял план продаж, проводил холодные звонки.\"],\"technologies\":[\"CRM\",\"Скрипты продаж\",\"Холодные звонки\"]}]}]}}"),
	personals: {
		"title": "Личная Информация",
		"description": "Профессиональные детали и предпочтения",
		"personal": {
			"title": "Личные данные",
			"data": {
				"nationality": {
					"name": "Гражданство",
					"value": "Российская Федерация"
				},
				"education": {
					"name": "Образование",
					"value": "Среднее"
				},
				"birthday": {
					"name": "Дата рождения",
					"value": "1997/02/25"
				},
				"gender": {
					"name": "Пол",
					"value": "Мужской"
				},
				"marital": {
					"name": "Семейное положение",
					"value": "Гражданский брак"
				}
			}
		},
		"details": {
			"title": "Дополнительная информация",
			"driver": {
				"name": "Водительское удостоверение:",
				"value": "Категория B — в процессе получения."
			},
			"hobbies": {
				"name": "Хобби и интересы:",
				"value": "Читаю профессиональную литературу, веду несколько pet-проектов с нуля (Nest, React, Kubernetes). Постоянно расширяю стек и прокачиваю навыки."
			},
			"qualities": {
				"name": "Личные качества:",
				"value": [
					"Амбициозность",
					"Коммуникабельность",
					"Тактичность",
					"Готовность к взаимопомощи",
					"Открытость обратной связи",
					"Командная работа",
					"Стрессоустойчивость",
					"Стремление к постоянному обучению"
				]
			}
		},
		"languages": {
			"title": "Языки",
			"language": [{
				"name": "Русский",
				"level": "родной",
				"percent": 99
			}, {
				"name": "English",
				"level": "Basic - A1",
				"percent": 15
			}]
		},
		"shedules": {
			"title": "График работы",
			"shedule": [
				"Сменный график",
				"Полный рабочий день",
				"Неполный рабочий день",
				"Гибкий график",
				"Ненормированный рабочий день"
			]
		},
		"employments": {
			"title": "Варианты трудоустройства",
			"employment": [
				"Трудовой договор",
				"ГПД",
				"Самозанятость"
			]
		},
		"recommendations": {
			"title": "Рекомендации",
			"information": "Есть рекомендации от \"ВТЭК\", при официальном трудоустройстве.",
			"note": "Предоставлю, по требованию."
		},
		"configure": {
			"title": "Кофигурация моего компьютера",
			"elements": [
				{
					"component": "CPU:",
					"spec": "Intel XEON E5-2696"
				},
				{
					"component": "RAM:",
					"spec": "48GB"
				},
				{
					"component": "GPU:",
					"spec": "NVIDIA GeForce GTX 750 / AMD Radeon RX 580"
				},
				{
					"component": "OS:",
					"spec": "Windows 10 Enterprise LTSC"
				},
				{
					"component": "IDE:",
					"spec": "Visual Studio Code (VSC), Cursor"
				}
			]
		}
	},
	cta: {
		"title": "Давайте работать вместе",
		"subtitle": "Меня всегда интересуют новые возможности и сложные проекты. Не стесняйтесь обращаться к мне, если вы хотите обсудить потенциальное сотрудничество."
	}
};
//#endregion
//#region src/app/modules/i18n.ts
instance.use(Browser).use(initReactI18next).init({
	resources: {
		ru: { translation: translation_default },
		en: { translation: translation_default$1 }
	},
	supportedLngs: ["en", "ru"],
	fallbackLng: "ru",
	detection: {
		order: [
			"cookie",
			"localStorage",
			"htmlTag",
			"path",
			"subdomain"
		],
		caches: ["cookie"]
	},
	interpolation: { escapeValue: false }
});
//#endregion
//#region src/app/main.tsx
var queryClient = new QueryClient({ defaultOptions: { queries: {
	staleTime: 720 * 60 * 1e3,
	gcTime: 1440 * 60 * 1e3,
	refetchOnWindowFocus: false
} } });
import_client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
	fallback: "Loading...",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {})
	}) })
}));
//#endregion
export { Card as n, cn as r, Contacts_default as t };
