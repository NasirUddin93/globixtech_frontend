export const inventoryVideos = {
    hero: {
        title: "Multi-Warehouse Sync",
        desc: "Instant stock adjustments across warehouses, retail outlets, and online channels.",
        src: "/videos/inventory/People_working_Inventory_Softw.mp4",
        poster: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
    },
    businessWorkflow: {
        title: "Adaptive Stock Workflows",
        desc: "Automated batch/lot tracking, barcode printing, and smart reorder points.",
        src: "/videos/inventory/People_working_for_Adaptive_St.mp4",
        poster: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
    },
    trackingEngine: {
        title: "Batch & Expiry Management",
        desc: "FIFO/LIFO tracking, automated expiration alerts, and multi-location transfers.",
        src: "/videos/inventory/People_working_for_Batch_Exp.mp4",
        poster: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
    },
    analyticsShowcase: {
        title: "Live Stock Intelligence",
        desc: "Dead stock alerts, valuation reports, and real-time inventory turn metrics.",
        src: "/videos/pos-system/bg POS.mp4",
        poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
    }
};

export const pricingPlans = [
    {
        name: "Basic Plan",
        monthlyPrice: 1200,
        oneTimeCharge: 2500,
        ranges: [
            { range: "Up to 500 Products", price: 1200 },
            { range: "501-1000 Products", price: 2000 },
            { range: "1001-2500 Products", price: 3500 },
            { range: "2501-5000 Products", price: 6000 },
            { range: "5001-10000 Products", price: 10000 },
        ],
    },
    {
        name: "Standard Plan",
        monthlyPrice: 2000,
        oneTimeCharge: 4000,
        ranges: [
            { range: "Up to 500 Products", price: 2000 },
            { range: "501-1000 Products", price: 3500 },
            { range: "1001-2500 Products", price: 6000 },
            { range: "2501-5000 Products", price: 10000 },
            { range: "5001-10000 Products", price: 16000 },
        ],
    },
    {
        name: "Premium Plan",
        recommended: true,
        monthlyPrice: 3500,
        oneTimeCharge: 7000,
        ranges: [
            { range: "Up to 500 Products", price: 3500 },
            { range: "501-1000 Products", price: 6000 },
            { range: "1001-2500 Products", price: 10000 },
            { range: "2501-5000 Products", price: 17000 },
            { range: "5001-10000 Products", price: 28000 },
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        subtitle: "UNLIMITED PRODUCTS",
        oneTimeCharge: "N/A",
        facilities: [
            "Everything From Premium Plan",
            "Unlimited Products & Warehouses",
            "Multi-Location Management",
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
        title: "Inventory Management for Retail Stores",
        desc: "Retail stores need real-time stock tracking, barcode scanning, and quick reordering. Our system helps you manage multiple store locations, track sales patterns, prevent stockouts, and optimize inventory levels. Perfect for clothing stores, electronics shops, supermarkets, and general retail.",
        features: [
            { name: "Barcode/QR Scanning", icon: "fa-barcode" },
            { name: "Multi-Store Management", icon: "fa-store" },
            { name: "POS Integration", icon: "fa-cash-register" },
            { name: "Stock Alerts", icon: "fa-bell" },
            { name: "Sales Analytics", icon: "fa-chart-line" },
            { name: "Customer Orders", icon: "fa-shopping-cart" },
        ],
    },
    {
        id: "warehouse",
        label: "Warehouses",
        title: "Warehouse Inventory Management System",
        desc: "Warehouses require advanced features like bin location tracking, batch management, and automated picking lists. Our WMS handles receiving, putaway, picking, packing, and shipping operations. Optimize space utilization and reduce fulfillment time with smart warehouse management.",
        features: [
            { name: "Bin Location Tracking", icon: "fa-map-marker-alt" },
            { name: "Batch & Serial Numbers", icon: "fa-hashtag" },
            { name: "Picking & Packing", icon: "fa-box" },
            { name: "Shipping Integration", icon: "fa-truck" },
            { name: "Space Optimization", icon: "fa-warehouse" },
            { name: "Cycle Counting", icon: "fa-clipboard-check" },
        ],
    },
    {
        id: "manufacturing",
        label: "Manufacturing",
        title: "Manufacturing Inventory Control",
        desc: "Manufacturing businesses need to track raw materials, work-in-progress, and finished goods. Our system handles bill of materials (BOM), production planning, material requirements planning (MRP), and finished goods inventory. Track costs accurately and optimize production.",
        features: [
            { name: "Bill of Materials (BOM)", icon: "fa-list-alt" },
            { name: "Raw Material Tracking", icon: "fa-industry" },
            { name: "Production Planning", icon: "fa-calendar-alt" },
            { name: "Work-in-Progress", icon: "fa-cogs" },
            { name: "Finished Goods", icon: "fa-check-circle" },
            { name: "Cost Tracking", icon: "fa-dollar-sign" },
        ],
    },
    {
        id: "ecommerce",
        label: "E-commerce",
        title: "E-commerce Inventory Management",
        desc: "E-commerce businesses selling on multiple platforms need centralized inventory control. Our system syncs stock across your website, Facebook, Instagram, marketplaces, and physical stores. Prevent overselling, automate reordering, and fulfill orders faster.",
        features: [
            { name: "Multi-Channel Sync", icon: "fa-sync" },
            { name: "Order Fulfillment", icon: "fa-shipping-fast" },
            { name: "Marketplace Integration", icon: "fa-globe" },
            { name: "Dropshipping Support", icon: "fa-parachute-box" },
            { name: "Returns Management", icon: "fa-undo" },
            { name: "Stock Forecasting", icon: "fa-chart-area" },
        ],
    },
];

export const moduleCategories = [
    {
        title: "CORE INVENTORY MODULES",
        icon: "fa-boxes",
        color: "text-blue-600",
        bg: "bg-blue-50",
        modules: [
            {
                id: 1,
                name: "Product Management",
                features: [
                    "Product catalog",
                    "Variants & attributes",
                    "Categories & tags",
                    "Product images",
                    "Pricing & discounts",
                ],
                count: 30,
            },
            {
                id: 2,
                name: "Stock Management",
                features: [
                    "Real-time stock levels",
                    "Stock adjustments",
                    "Stock transfers",
                    "Reorder points",
                    "Safety stock",
                ],
                count: 35,
            },
            {
                id: 3,
                name: "Barcode System",
                features: [
                    "Barcode generation",
                    "QR code support",
                    "Scanner integration",
                    "Batch scanning",
                ],
                count: 20,
            },
            {
                id: 4,
                name: "Multi-Location",
                features: [
                    "Multiple warehouses",
                    "Store locations",
                    "Inter-location transfer",
                    "Location-wise reports",
                ],
                count: 25,
            },
        ],
    },
    {
        title: "PURCHASING & SUPPLIERS",
        icon: "fa-truck",
        color: "text-purple-600",
        bg: "bg-purple-50",
        modules: [
            {
                id: 5,
                name: "Purchase Orders",
                features: [
                    "PO creation",
                    "Supplier management",
                    "PO approval workflow",
                    "Goods receipt",
                ],
                count: 28,
            },
            {
                id: 6,
                name: "Supplier Management",
                features: [
                    "Supplier database",
                    "Price comparison",
                    "Supplier ratings",
                    "Payment terms",
                ],
                count: 22,
            },
            {
                id: 7,
                name: "Reordering System",
                features: [
                    "Auto reorder alerts",
                    "Reorder quantity calculation",
                    "Supplier selection",
                    "Order history",
                ],
                count: 18,
            },
        ],
    },
    {
        title: "SALES & DISTRIBUTION",
        icon: "fa-shopping-cart",
        color: "text-green-600",
        bg: "bg-green-50",
        modules: [
            {
                id: 8,
                name: "Sales Orders",
                features: [
                    "Order processing",
                    "Stock reservation",
                    "Backorder management",
                    "Order tracking",
                ],
                count: 30,
            },
            {
                id: 9,
                name: "Order Fulfillment",
                features: [
                    "Pick lists",
                    "Pack lists",
                    "Shipping labels",
                    "Delivery tracking",
                ],
                count: 25,
            },
            {
                id: 10,
                name: "Returns & Exchanges",
                features: [
                    "Return authorization",
                    "Stock adjustment",
                    "Refund processing",
                    "Exchange handling",
                ],
                count: 20,
            },
        ],
    },
    {
        title: "WAREHOUSE OPERATIONS",
        icon: "fa-warehouse",
        color: "text-orange-600",
        bg: "bg-orange-50",
        modules: [
            {
                id: 11,
                name: "Bin Location Management",
                features: [
                    "Bin assignment",
                    "Location mapping",
                    "Bin transfers",
                    "Space utilization",
                ],
                count: 22,
            },
            {
                id: 12,
                name: "Batch & Serial Tracking",
                features: [
                    "Batch numbers",
                    "Serial numbers",
                    "Expiry tracking",
                    "Lot traceability",
                ],
                count: 25,
            },
            {
                id: 13,
                name: "Picking & Packing",
                features: [
                    "Wave picking",
                    "Batch picking",
                    "Packing stations",
                    "Quality checks",
                ],
                count: 20,
            },
            {
                id: 14,
                name: "Cycle Counting",
                features: [
                    "Count schedules",
                    "ABC analysis",
                    "Variance reports",
                    "Adjustment approval",
                ],
                count: 18,
            },
        ],
    },
    {
        title: "REPORTING & ANALYTICS",
        icon: "fa-chart-bar",
        color: "text-red-600",
        bg: "bg-red-50",
        modules: [
            {
                id: 15,
                name: "Stock Reports",
                features: [
                    "Stock summary",
                    "Stock valuation",
                    "Aging analysis",
                    "Dead stock report",
                ],
                count: 30,
            },
            {
                id: 16,
                name: "Movement Reports",
                features: [
                    "Stock in/out",
                    "Transfer history",
                    "Consumption reports",
                    "Turnover ratio",
                ],
                count: 25,
            },
            {
                id: 17,
                name: "Analytics Dashboard",
                features: [
                    "Real-time KPIs",
                    "Trend analysis",
                    "Forecasting",
                    "Custom dashboards",
                ],
                count: 28,
            },
        ],
    },
    {
        title: "INTEGRATIONS & ADVANCED",
        icon: "fa-plug",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        modules: [
            {
                id: 18,
                name: "E-commerce Integration",
                features: [
                    "Shopify sync",
                    "WooCommerce",
                    "Facebook Shop",
                    "Marketplace APIs",
                ],
                count: 25,
            },
            {
                id: 19,
                name: "Accounting Integration",
                features: [
                    "QuickBooks",
                    "Tally",
                    "Custom accounting",
                    "Financial sync",
                ],
                count: 20,
            },
            {
                id: 20,
                name: "Mobile App",
                features: [
                    "Stock checking",
                    "Barcode scanning",
                    "Order processing",
                    "Offline mode",
                ],
                count: 22,
            },
            {
                id: 21,
                name: "API & Automation",
                features: [
                    "REST API",
                    "Webhooks",
                    "Custom integrations",
                    "Workflow automation",
                ],
                count: 20,
            },
        ],
    },
];

export const stats = [
    { label: "Products Managed", value: "1M+" },
    { label: "Daily Transactions", value: "50k+" },
    { label: "Active Warehouses", value: "1000+" },
    { label: "Accuracy Rate", value: "99.9%" },
];

export const coreFeatures = [
    {
        title: "Real-Time Stock Tracking",
        desc: "Monitor inventory levels across all locations in real-time. Get instant updates on stock movements, sales, and purchases.",
        icon: "fa-sync",
        color: "text-blue-500",
        bg: "bg-blue-100",
    },
    {
        title: "Barcode & QR Scanning",
        desc: "Speed up operations with barcode and QR code scanning. Generate labels, scan products, and update inventory instantly.",
        icon: "fa-barcode",
        color: "text-purple-500",
        bg: "bg-purple-100",
    },
    {
        title: "Multi-Location Management",
        desc: "Manage inventory across multiple warehouses, stores, and locations. Transfer stock seamlessly between locations.",
        icon: "fa-map-marked-alt",
        color: "text-green-500",
        bg: "bg-green-100",
    },
    {
        title: "Automated Reordering",
        desc: "Set reorder points and get automatic alerts when stock runs low. Generate purchase orders automatically.",
        icon: "fa-bell",
        color: "text-orange-500",
        bg: "bg-orange-100",
    },
    {
        title: "Stock Valuation",
        desc: "Track inventory value using FIFO, LIFO, or weighted average methods. Get accurate cost of goods sold.",
        icon: "fa-calculator",
        color: "text-cyan-500",
        bg: "bg-cyan-100",
    },
    {
        title: "Comprehensive Reports",
        desc: "Generate detailed reports on stock levels, movements, aging, dead stock, and profitability. Export to Excel/PDF.",
        icon: "fa-chart-pie",
        color: "text-red-500",
        bg: "bg-red-100",
    },
];

export const faqs = [
    {
        question: "Can I track inventory across multiple locations?",
        answer: "Yes! Our system supports unlimited warehouses and store locations. You can track stock at each location separately and transfer inventory between locations with full audit trails.",
    },
    {
        question: "Does it support barcode scanning?",
        answer: "Absolutely! We support both barcode and QR code scanning. You can generate labels for your products and use any standard barcode scanner to update inventory quickly.",
    },
    {
        question: "How does automated reordering work?",
        answer: "You set minimum stock levels (reorder points) for each product. When stock falls below this level, the system automatically alerts you and can generate purchase orders. You can also set up automatic PO creation.",
    },
    {
        question: "Can it integrate with my e-commerce store?",
        answer: "Yes! We integrate with Shopify, WooCommerce, Facebook Shop, and other platforms. Stock levels sync automatically across all channels to prevent overselling.",
    },
    {
        question: "What stock valuation methods are supported?",
        answer: "We support FIFO (First In First Out), LIFO (Last In First Out), and Weighted Average costing methods. You can choose the method that best suits your business and tax requirements.",
    },
    {
        question: "Is there a mobile app?",
        answer: "Yes! Our mobile app (Android & iOS) allows you to check stock, scan barcodes, process orders, and update inventory from anywhere. It works offline and syncs when connected.",
    },
];
