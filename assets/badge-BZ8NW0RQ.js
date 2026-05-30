import "./rolldown-runtime-FDOR9p9I.js";
import { at as require_jsx_runtime, h as cva, ot as require_react } from "./vendor-ZI3bWEEf.js";
import { r as cn } from "./index-BaHubUL7.js";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-smooth focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent gradient-primary text-primary-foreground hover:opacity-90",
		secondary: "border-transparent bg-secondary/60 text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		outline: "text-foreground border-border hover:bg-accent/10 hover:text-accent hover:border-accent"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
