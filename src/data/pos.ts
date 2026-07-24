export const pricingPlans = [
    {
        name: "Basic Plan",
        monthlyPrice: 1500,
        oneTimeCharge: 3000,
        ranges: [
            { range: "1 Terminal", price: 1500 },
            { range: "2 Terminals", price: 2500 },
            { range: "3-5 Terminals", price: 4000 },
        ],
    },
    {
        name: "Standard Plan",
        monthlyPrice: 2500,
        oneTimeCharge: 5000,
        ranges: [
            { range: "1 Terminal", price: 2500 },
            { range: "2 Terminals", price: 4000 },
            { range: "3-5 Terminals", price: 6500 },
        ],
    },
    {
        name: "Premium Plan",
        recommended: true,
        monthlyPrice: 4000,
        oneTimeCharge: 8000,
        ranges: [
            { range: "1 Terminal", price: 4000 },
            { range: "2 Terminals", price: 6500 },
            { range: "3-5 Terminals", price: 10000 },
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        subtitle: "UNLIMITED TERMINALS",
        oneTimeCharge: "N/A",
        facilities: [
            "Everything From Premium Plan",
            "Unlimited Terminals",
            "Multi-Branch Management",
            "Dedicated Support Team",
            "Custom Integrations",
            "Deploy Your Own Server",
            "White Label License",
        ],
    },
];

export const businessTypes = [
    {
        id: "retail",
        label: "Retail Stores",
        title: "POS System for Retail Stores",
        desc: "Retail stores need fast checkout, barcode scanning, and real-time stock updates. Our POS system handles sales, returns, exchanges, and customer loyalty programs. Perfect for clothing stores, electronics shops, supermarkets, and department stores.",
        features: [
            { name: "Barcode Scanning", icon: "fa-barcode" },
            { name: "Receipt Printing", icon: "fa-receipt" },
            { name: "Discount & Coupons", icon: "fa-tags" },
            { name: "Customer Profiles", icon: "fa-user" },
            { name: "Sales Reports", icon: "fa-chart-line" },
            { name: "Multi-Payment", icon: "fa-credit-card" },
        ],
    },
    {
        id: "restaurant",
        label: "Restaurants & Cafes",
        title: "Restaurant POS System",
        desc: "Restaurants need table management, kitchen order routing, and quick bill splitting. Our restaurant POS handles dine-in, takeaway, and delivery orders with menu customization, modifier tracking, and real-time kitchen display integration.",
        features: [
            { name: "Table Management", icon: "fa-chair" },
            { name: "Kitchen Display", icon: "fa-utensils" },
            { name: "Order Routing", icon: "fa-route" },
            { name: "Menu Management", icon: "fa-book-open" },
            { name: "Bill Splitting", icon: "fa-divide" },
            { name: "Tip Management", icon: "fa-hand-holding-usd" },
        ],
    },
    {
        id: "supermarket",
        label: "Supermarkets & Grocery",
        title: "Supermarket POS System",
        desc: "Supermarkets require high-speed scanning, weight scale integration, and perishable goods tracking. Our POS handles thousands of SKUs, promotional pricing, loyalty programs, and self-checkout kiosk support for busy stores.",
        features: [
            { name: "Weight Scale Integration", icon: "fa-balance-scale" },
            { name: "High-Speed Scanning", icon: "fa-bolt" },
            { name: "Promotional Pricing", icon: "fa-percentage" },
            { name: "Loyalty Programs", icon: "fa-star" },
            { name: "Self-Checkout Kiosk", icon: "fa-desktop" },
            { name: "Expiry Tracking", icon: "fa-calendar-times" },
        ],
    },
    {
        id: "pharmacy",
        label: "Pharmacies",
        title: "Pharmacy POS System",
        desc: "Pharmacies need prescription tracking, expiry date management, and controlled substance logging. Our POS handles medicine sales, prescription management, insurance claims, and regulatory compliance with detailed transaction audit trails.",
        features: [
            { name: "Prescription Tracking", icon: "fa-prescription" },
            { name: "Expiry Management", icon: "fa-clock" },
            { name: "Drug Interaction Check", icon: "fa-exclamation-triangle" },
            { name: "Insurance Claims", icon: "fa-file-medical" },
            { name: "Controlled Substances", icon: "fa-shield-alt" },
            { name: "Batch & Lot Tracking", icon: "fa-hashtag" },
        ],
    },
];

export const moduleCategories = [
    {
        title: "SALES & TRANSACTIONS",
        icon: "fa-cash-register",
        color: "text-blue-600",
        bg: "bg-blue-50",
        modules: [
            {
                id: 1,
                name: "Quick Sale",
                features: [
                    "Fast product search",
                    "Barcode scanning",
                    "Quick buttons",
                    "Hold & recall",
                ],
                count: 25,
            },
            {
                id: 2,
                name: "Payment Processing",
                features: [
                    "Cash payments",
                    "Card payments",
                    "Digital wallets",
                    "Split payments",
                ],
                count: 30,
            },
            {
                id: 3,
                name: "Returns & Refunds",
                features: [
                    "Return authorization",
                    "Refund processing",
                    "Exchange handling",
                    "Return reasons",
                ],
                count: 20,
            },
            {
                id: 4,
                name: "Discounts & Promotions",
                features: [
                    "Percentage discounts",
                    "Fixed amount off",
                    "Bundle deals",
                    "Happy hour pricing",
                ],
                count: 22,
            },
        ],
    },
    {
        title: "PRODUCT & INVENTORY",
        icon: "fa-boxes",
        color: "text-purple-600",
        bg: "bg-purple-50",
        modules: [
            {
                id: 5,
                name: "Product Management",
                features: [
                    "Product catalog",
                    "Variants & sizes",
                    "Categories & tags",
                    "Product images",
                ],
                count: 30,
            },
            {
                id: 6,
                name: "Stock Management",
                features: [
                    "Real-time stock levels",
                    "Stock adjustments",
                    "Low stock alerts",
                    "Auto reorder",
                ],
                count: 28,
            },
            {
                id: 7,
                name: "Barcode System",
                features: [
                    "Barcode generation",
                    "Label printing",
                    "Batch scanning",
                    "QR code support",
                ],
                count: 20,
            },
            {
                id: 8,
                name: "Price Management",
                features: [
                    "Multiple price lists",
                    "Price history",
                    "Bulk price updates",
                    "Currency support",
                ],
                count: 18,
            },
        ],
    },
    {
        title: "CUSTOMER MANAGEMENT",
        icon: "fa-users",
        color: "text-green-600",
        bg: "bg-green-50",
        modules: [
            {
                id: 9,
                name: "Customer Profiles",
                features: [
                    "Customer database",
                    "Purchase history",
                    "Contact information",
                    "Notes & tags",
                ],
                count: 18,
            },
            {
                id: 10,
                name: "Loyalty Program",
                features: [
                    "Points system",
                    "Reward tiers",
                    "Referral program",
                    "Birthday rewards",
                ],
                count: 22,
            },
            {
                id: 11,
                name: "Customer Display",
                features: [
                    "Customer-facing screen",
                    "Real-time total display",
                    "Itemized receipt view",
                    "Promotional messages",
                ],
                count: 12,
            },
        ],
    },
    {
        title: "REPORTING & ANALYTICS",
        icon: "fa-chart-bar",
        color: "text-orange-600",
        bg: "bg-orange-50",
        modules: [
            {
                id: 12,
                name: "Sales Reports",
                features: [
                    "Daily sales summary",
                    "Hourly breakdown",
                    "Product performance",
                    "Cash register report",
                ],
                count: 25,
            },
            {
                id: 13,
                name: "Inventory Reports",
                features: [
                    "Stock summary",
                    "Low stock alerts",
                    "Stock movement",
                    "Dead stock report",
                ],
                count: 20,
            },
            {
                id: 14,
                name: "Financial Reports",
                features: [
                    "Profit & loss",
                    "Tax reports",
                    "Payment method summary",
                    "Discount analysis",
                ],
                count: 22,
            },
            {
                id: 15,
                name: "Employee Reports",
                features: [
                    "Sales per employee",
                    "Clock-in/out tracking",
                    "Commission calculation",
                    "Performance metrics",
                ],
                count: 18,
            },
        ],
    },
    {
        title: "HARDWARE & INTEGRATIONS",
        icon: "fa-plug",
        color: "text-red-600",
        bg: "bg-red-50",
        modules: [
            {
                id: 16,
                name: "Hardware Support",
                features: [
                    "Receipt printers",
                    "Barcode scanners",
                    "Cash drawers",
                    "Customer displays",
                ],
                count: 20,
            },
            {
                id: 17,
                name: "Payment Gateways",
                features: [
                    "bKash / Nagad",
                    "Rocket / Cards",
                    "Bank transfer",
                    "Manual payment",
                ],
                count: 18,
            },
            {
                id: 18,
                name: "Cloud & Offline",
                features: [
                    "Offline mode",
                    "Auto sync",
                    "Cloud backup",
                    "Multi-device",
                ],
                count: 22,
            },
        ],
    },
];

export const stats = [
    { label: "POS Deployed", value: "500+" },
    { label: "Daily Transactions", value: "50k+" },
    { label: "Active Terminals", value: "1000+" },
    { label: "Uptime", value: "99.9%" },
];

export const coreFeatures = [
    {
        title: "Lightning-Fast Checkout",
        desc: "Process sales in under 3 seconds with barcode scanning and quick-button interfaces. Reduce queue wait times and keep customers happy.",
        icon: "fa-bolt",
        color: "text-blue-500",
        bg: "bg-blue-100",
    },
    {
        title: "Multi-Payment Support",
        desc: "Accept cash, cards, bKash, Nagad, Rocket, and digital wallets. Split payments and handle any payment method your customers prefer.",
        icon: "fa-credit-card",
        color: "text-purple-500",
        bg: "bg-purple-100",
    },
    {
        title: "Real-Time Inventory Sync",
        desc: "Every sale automatically updates stock levels across all locations. Never oversell or run out of popular items with instant alerts.",
        icon: "fa-sync",
        color: "text-green-500",
        bg: "bg-green-100",
    },
    {
        title: "Detailed Sales Reports",
        desc: "Track daily sales, hourly trends, top products, and employee performance. Make data-driven decisions with real-time dashboards.",
        icon: "fa-chart-pie",
        color: "text-orange-500",
        bg: "bg-orange-100",
    },
    {
        title: "Customer Loyalty Program",
        desc: "Build customer loyalty with points, rewards, and personalized offers. Increase repeat purchases and customer lifetime value.",
        icon: "fa-star",
        color: "text-cyan-500",
        bg: "bg-cyan-100",
    },
    {
        title: "Offline Mode",
        desc: "Keep selling even without internet. Our POS works offline and auto-syncs when connection is restored. Never lose a sale.",
        icon: "fa-wifi",
        color: "text-red-500",
        bg: "bg-red-100",
    },
];

export const faqs = [
    {
        question: "What hardware do I need for the POS system?",
        answer: "Our POS works on any Windows PC, laptop, or tablet. For optimal performance, we recommend a barcode scanner, receipt printer, and cash drawer. We support all major brands and can help you source compatible hardware.",
    },
    {
        question: "Does it work offline?",
        answer: "Yes! Our POS system has a full offline mode. You can process sales, print receipts, and manage inventory even without internet. All data syncs automatically when you reconnect.",
    },
    {
        question: "Can I manage multiple store locations?",
        answer: "Absolutely! Our Standard and Premium plans support multi-branch management. You can view sales, transfer stock, and manage all locations from a single dashboard.",
    },
    {
        question: "How does the loyalty program work?",
        answer: "Customers earn points on every purchase which can be redeemed for discounts. You can set point values, create reward tiers, and run promotional campaigns to boost repeat visits.",
    },
    {
        question: "Is there a mobile app for the POS?",
        answer: "Yes! Our mobile app lets you process sales, check stock, and view reports from your phone or tablet. Perfect for pop-up stores, events, or on-the-go management.",
    },
    {
        question: "Can I integrate with my existing inventory system?",
        answer: "Yes! Our POS integrates seamlessly with our Inventory Management System and can connect to your existing systems via API. Stock levels stay in sync across all platforms.",
    },
];
