export interface PricePackage {
	name: string;
	description: string;
	pricePrefix: string;
	price: string;
	priceUnit: string;
	/** Render the whole price line in the brand accent color. */
	priceAccent?: boolean;
	features: string[];
	footerNotes: string[];
	ctaLabel: string;
	ctaSubject: string;
	badge?: string;
	highlight?: boolean;
}

export interface PricingNote {
	title: string;
	text: string;
}

export interface Addon {
	name: string;
	price: string;
	desc: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface ComparisonRow {
	name: string;
	cells: string[];
	highlight?: boolean;
}

export const packages: PricePackage[] = [
	{
		name: "Catalog",
		description: "To start showing your business online.",
		pricePrefix: "From",
		price: "$2,500",
		priceUnit: "MXN",
		features: [
			"Responsive website",
			"Product or service catalog",
			"Up to 20 products",
			"Images provided by the client",
			"Name, description and price",
			"Basic categories",
			"WhatsApp contact button",
			"Basic SEO",
			"Setup and publication",
		],
		footerNotes: [
			"Does not include: cart, online payments, user accounts, admin panel, inventory or shipping.",
			"Ideal to get started. You can add features later.",
		],
		ctaLabel: "I want this package",
		ctaSubject: "I want the Catalog package",
	},
	{
		name: "Catalog + Management",
		description: "For businesses that want to manage their catalog without depending on the developer.",
		pricePrefix: "From",
		price: "$4,500",
		priceUnit: "MXN",
		features: [
			"Everything included in Catalog",
			"Larger product catalog",
			"Categories",
			"Search and filters",
			"Basic admin panel",
			"Product management",
			"Database",
			"Basic information management",
		],
		footerNotes: ["Ideal for businesses with a catalog that changes constantly."],
		ctaLabel: "I want this package",
		ctaSubject: "I want the Catalog + Management package",
	},
	{
		name: "Online Store",
		description: "For businesses ready to sell online.",
		pricePrefix: "From",
		price: "$8,000",
		priceUnit: "MXN",
		badge: "Most complete",
		highlight: true,
		features: [
			"Catalog",
			"Shopping cart",
			"Checkout",
			"Payment integration",
			"Order management",
			"Confirmation emails",
			"Customer management",
			"Basic admin panel",
			"Responsive design",
		],
		footerNotes: [
			"Integrations like Stripe or Mercado Pago can be set up with the business's own account.",
			"Payment platform and other external service fees are separate from the development cost.",
		],
		ctaLabel: "I want to sell online",
		ctaSubject: "I want to sell online (Store)",
	},
	{
		name: "Custom System",
		description: "For needs beyond a traditional website or store.",
		pricePrefix: "Quote",
		price: "Let's talk about your project",
		priceUnit: "",
		priceAccent: true,
		features: [
			"Internal systems",
			"Inventory and bookings",
			"Customer management",
			"Automations and dashboards",
			"API integrations",
			"WhatsApp and custom processes",
		],
		footerNotes: ["Every project is different. Tell me what you need and I'll give you a clear quote."],
		ctaLabel: "Request a quote",
		ctaSubject: "Request quote for a custom system",
	},
];

export const notes: PricingNote[] = [
	{
		title: "Starting prices",
		text: "The prices shown are starting prices. The final price depends on the scope and specific needs of the project.",
	},
	{
		title: "External services",
		text: "Costs for domain, hosting, payment gateways, shipping services, WhatsApp, email or other external providers are not included unless stated otherwise.",
	},
	{
		title: "Your accounts are yours",
		text: "Your domain, payment and other service accounts can stay in your name. RavexCode sets up and builds the technology around them.",
	},
	{
		title: "Payments",
		text: "Projects can be split into payments depending on the scope and duration of the development.",
	},
];

export const addons: Addon[] = [
	{ name: "Domain + setup", price: "From $300 MXN", desc: "The domain cost depends on the provider and extension." },
	{ name: "Additional products", price: "Quote", desc: "For catalogs that exceed the included scope." },
	{ name: "Payment integration", price: "From $1,000 MXN", desc: "Depends on the provider and business requirements." },
	{ name: "Shipping integration", price: "From $1,500 MXN", desc: "Depends on the provider and business requirements." },
	{ name: "WhatsApp / Automation", price: "From $3,000 MXN", desc: "Depends heavily on scope." },
	{ name: "Maintenance", price: "From $250 MXN/month", desc: "Optional service, independent from the development." },
];

export const faqs: FaqItem[] = [
	{
		question: "Are the prices final?",
		answer: "No. They are starting prices for each type of project. The final price depends on the features, amount of content and required integrations.",
	},
	{
		question: "Do I have to pay everything at once?",
		answer: "Not necessarily. Depending on the project, payment can be split into stages. This is agreed before development starts.",
	},
	{
		question: "Is the domain mine?",
		answer: "Yes. It's recommended that the domain be registered in the business's name. RavexCode can help you set it up and connect it to the site.",
	},
	{
		question: "Who receives the money from my sales?",
		answer: "You do. When we use a platform like Stripe or Mercado Pago, the account and the money belong to the business. RavexCode builds the integration but doesn't need to receive your sales.",
	},
	{
		question: "Do I have to get hosting?",
		answer: "Yes, a website needs infrastructure to be available on the internet. The provider and cost depend on the project. We can help you set it up and maintain it.",
	},
	{
		question: "Can I start with a catalog and add payments later?",
		answer: "Yes. The idea is that you don't pay for features you don't need yet. We can start with a catalog and later add cart, payments, orders, shipping or other features.",
	},
	{
		question: "Can I manage my products?",
		answer: "It depends on the package. The basic catalog may require changes to be made by RavexCode, while the Catalog + Management package includes tools to manage content.",
	},
	{
		question: "How long does it take to have my page ready?",
		answer: "It depends on the scope and how fast the required content is provided. A simple catalog can be much faster than a store with payments, shipping and administration.",
	},
	{
		question: "What do I need to provide?",
		answer: "Usually we'll need the business name, contact information, logo if it exists, photos, products or services, prices and any information you want to show. For integrations we'll also need access or authorization to the corresponding accounts.",
	},
	{
		question: "Can I cancel the maintenance?",
		answer: "Yes. Maintenance is a service independent from development, as long as it's established in the project agreement. The business keeps its own accounts and resources.",
	},
];

export const comparisonFeatures: string[] = [
	"Responsive",
	"Catalog",
	"WhatsApp",
	"Basic SEO",
	"Database",
	"Admin panel",
	"Cart",
	"Online payments",
	"Orders",
	"Integrations",
];

export const comparisonRows: ComparisonRow[] = [
	{ name: "Catalog", cells: ["✓", "✓", "✓", "✓", "—", "—", "—", "—", "—", "—"] },
	{ name: "Catalog + Management", cells: ["✓", "✓", "✓", "✓", "✓", "✓", "—", "—", "—", "—"] },
	{
		name: "Online Store",
		cells: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "Optional"],
		highlight: true,
	},
	{ name: "Custom System", cells: ["✓", "✓", "✓", "✓", "✓", "✓", "Optional", "Optional", "Optional", "✓"] },
];
