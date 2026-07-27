export const accountingVideos = {
    hero: {
        title: "Automated Ledger Engine",
        desc: "Real-time double-entry bookkeeping, automated reconciliations, and tax compliance.",
        src: "/videos/accounting/Accounting_Software_for_Bangla.mp4",
        poster: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
    },
    businessWorkflow: {
        title: "Adaptive Financial Workflows",
        desc: "From small business invoicing to multi-entity enterprise consolidated reporting.",
        src: "/videos/accounting/Adaptive_Financial_Workflows_F.mp4",
        poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    },
    auditEngine: {
        title: "Real-time Audit & Compliance",
        desc: "Instant ledger verification, automated tax calculation, and encrypted audit trails.",
        src: "/videos/accounting/Real_time_Audit_Compliance_I.mp4",
        poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
    },
    analyticsShowcase: {
        title: "Live Cash Flow Analytics",
        desc: "Predictive P&L metrics, balance sheet forecasting, and instant financial health scoring.",
        src: "/videos/accounting/Ready_to_Take_Control_of_Your.mp4",
        poster: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop"
    }
};

export const pricingPlans = [
    {
        name: "Basic Plan",
        monthlyPrice: 1500,
        oneTimeCharge: 3000,
        ranges: [
            { range: "1-5 Users", price: 1500 },
            { range: "6-10 Users", price: 2500 },
            { range: "11-20 Users", price: 4000 },
            { range: "21-50 Users", price: 7000 },
            { range: "51-100 Users", price: 12000 },
        ],
    },
    {
        name: "Standard Plan",
        monthlyPrice: 2500,
        oneTimeCharge: 5000,
        ranges: [
            { range: "1-5 Users", price: 2500 },
            { range: "6-10 Users", price: 4000 },
            { range: "11-20 Users", price: 6500 },
            { range: "21-50 Users", price: 11000 },
            { range: "51-100 Users", price: 18000 },
        ],
    },
    {
        name: "Premium Plan",
        recommended: true,
        monthlyPrice: 4000,
        oneTimeCharge: 8000,
        ranges: [
            { range: "1-5 Users", price: 4000 },
            { range: "6-10 Users", price: 6500 },
            { range: "11-20 Users", price: 10000 },
            { range: "21-50 Users", price: 17000 },
            { range: "51-100 Users", price: 28000 },
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        subtitle: "UNLIMITED USERS",
        oneTimeCharge: "N/A",
        facilities: [
            "Everything From Premium Plan",
            "Unlimited Users",
            "Multi-Company Management",
            "Dedicated Support Team",
            "Custom Integrations",
            "Deploy Your Own Server",
            "White Label License",
        ],
    },
];

export const businessTypes = [
    {
        id: "small-business",
        label: "Small Business",
        title: "Accounting Software for Small Businesses",
        desc: "Small businesses often struggle with manual bookkeeping, spreadsheets, and lost receipts. Our accounting software simplifies financial management with automated invoicing, expense tracking, and real-time reports. Perfect for shops, restaurants, service providers, and startups. Track income and expenses, manage inventory, and stay tax-ready without hiring an accountant.",
        features: [
            { name: "Income & Expense Tracking", icon: "fa-money-bill-wave" },
            { name: "Invoicing & Billing", icon: "fa-file-invoice" },
            { name: "Inventory Management", icon: "fa-boxes" },
            { name: "Bank Reconciliation", icon: "fa-university" },
            { name: "Tax Reports", icon: "fa-file-alt" },
            { name: "Mobile App Access", icon: "fa-mobile-alt" },
        ],
    },
    {
        id: "retail",
        label: "Retail & E-commerce",
        title: "Accounting for Retail & E-commerce Businesses",
        desc: "Retail and e-commerce businesses need real-time inventory tracking, multi-channel sales management, and automated financial reporting. Our solution integrates with your POS systems, online stores, and payment gateways. Track stock levels, cost of goods sold, profit margins, and customer payments all in one place.",
        features: [
            { name: "POS Integration", icon: "fa-cash-register" },
            { name: "Multi-Channel Sales", icon: "fa-shopping-cart" },
            { name: "Stock Management", icon: "fa-warehouse" },
            { name: "Profit & Loss Analysis", icon: "fa-chart-line" },
            { name: "Customer Ledger", icon: "fa-users" },
            { name: "Payment Gateway Integration", icon: "fa-credit-card" },
        ],
    },
    {
        id: "manufacturing",
        label: "Manufacturing",
        title: "Manufacturing Accounting Software",
        desc: "Manufacturing businesses require specialized accounting for raw materials, work-in-progress, finished goods, and production costs. Our manufacturing module handles job costing, bill of materials, production tracking, and inventory valuation. Get accurate cost analysis and profitability reports for each product line.",
        features: [
            { name: "Job Costing", icon: "fa-calculator" },
            { name: "Bill of Materials", icon: "fa-list-alt" },
            { name: "Production Tracking", icon: "fa-industry" },
            { name: "Inventory Valuation", icon: "fa-balance-scale" },
            { name: "Supplier Management", icon: "fa-truck" },
            { name: "Cost Analysis", icon: "fa-chart-pie" },
        ],
    },
    {
        id: "service",
        label: "Service Business",
        title: "Accounting for Service-Based Businesses",
        desc: "Service businesses like consultancies, agencies, and professional services need time tracking, project billing, and client management. Our solution helps you track billable hours, create professional invoices, manage retainers, and monitor project profitability. Perfect for freelancers and service companies.",
        features: [
            { name: "Time Tracking", icon: "fa-clock" },
            { name: "Project Billing", icon: "fa-project-diagram" },
            { name: "Client Management", icon: "fa-user-tie" },
            { name: "Recurring Invoices", icon: "fa-redo" },
            { name: "Expense Claims", icon: "fa-receipt" },
            { name: "Profitability Reports", icon: "fa-chart-bar" },
        ],
    },
];

export const moduleCategories = [
    {
        title: "CORE ACCOUNTING MODULES",
        icon: "fa-calculator",
        color: "text-green-600",
        bg: "bg-green-50",
        modules: [
            {
                id: 1,
                name: "General Ledger",
                features: [
                    "Chart of Accounts",
                    "Journal Entries",
                    "Trial Balance",
                    "Financial Statements",
                    "Multi-Currency Support",
                ],
                count: 35,
            },
            {
                id: 2,
                name: "Accounts Payable",
                features: [
                    "Vendor Management",
                    "Purchase Orders",
                    "Bill Payment",
                    "Payment Scheduling",
                    "Vendor Reports",
                ],
                count: 25,
            },
            {
                id: 3,
                name: "Accounts Receivable",
                features: [
                    "Customer Invoicing",
                    "Payment Collection",
                    "Credit Management",
                    "Aging Reports",
                    "Automated Reminders",
                ],
                count: 30,
            },
            {
                id: 4,
                name: "Bank Reconciliation",
                features: [
                    "Auto Bank Sync",
                    "Transaction Matching",
                    "Reconciliation Reports",
                    "Multiple Bank Accounts",
                ],
                count: 20,
            },
            {
                id: 5,
                name: "Cash Management",
                features: [
                    "Cash Flow Tracking",
                    "Petty Cash",
                    "Cash Forecasting",
                    "Daily Cash Reports",
                ],
                count: 18,
            },
            {
                id: 6,
                name: "Fixed Assets",
                features: [
                    "Asset Register",
                    "Depreciation Calculation",
                    "Asset Disposal",
                    "Maintenance Tracking",
                ],
                count: 22,
            },
        ],
    },
    {
        title: "INVENTORY & PURCHASING",
        icon: "fa-boxes",
        color: "text-blue-600",
        bg: "bg-blue-50",
        modules: [
            {
                id: 7,
                name: "Inventory Management",
                features: [
                    "Stock Tracking",
                    "Barcode/QR Support",
                    "Stock Valuation (FIFO/LIFO/Average)",
                    "Reorder Alerts",
                ],
                count: 30,
            },
            {
                id: 8,
                name: "Purchase Management",
                features: [
                    "Purchase Requisition",
                    "Purchase Orders",
                    "Goods Receipt",
                    "Supplier Comparison",
                ],
                count: 25,
            },
            {
                id: 9,
                name: "Warehouse Management",
                features: [
                    "Multi-Location",
                    "Stock Transfer",
                    "Stock Adjustment",
                    "Warehouse Reports",
                ],
                count: 20,
            },
        ],
    },
    {
        title: "SALES & INVOICING",
        icon: "fa-file-invoice-dollar",
        color: "text-purple-600",
        bg: "bg-purple-50",
        modules: [
            {
                id: 10,
                name: "Sales Management",
                features: [
                    "Quotations",
                    "Sales Orders",
                    "Delivery Notes",
                    "Sales Analytics",
                ],
                count: 28,
            },
            {
                id: 11,
                name: "Invoicing System",
                features: [
                    "Professional Invoices",
                    "Recurring Billing",
                    "Payment Links",
                    "Invoice Templates",
                ],
                count: 25,
            },
            {
                id: 12,
                name: "POS Integration",
                features: [
                    "Retail POS",
                    "Quick Billing",
                    "Cash Register",
                    "Sales Reports",
                ],
                count: 22,
            },
        ],
    },
    {
        title: "PAYROLL & HR",
        icon: "fa-users-cog",
        color: "text-orange-600",
        bg: "bg-orange-50",
        modules: [
            {
                id: 13,
                name: "Payroll Management",
                features: [
                    "Salary Processing",
                    "Allowances & Deductions",
                    "Tax Calculation",
                    "Payslip Generation",
                ],
                count: 30,
            },
            {
                id: 14,
                name: "Employee Management",
                features: [
                    "Employee Database",
                    "Attendance Tracking",
                    "Leave Management",
                    "Loan & Advance",
                ],
                count: 25,
            },
            {
                id: 15,
                name: "Provident Fund",
                features: [
                    "PF Calculation",
                    "Contribution Tracking",
                    "PF Reports",
                    "PF Reports",
                ],
                count: 15,
            },
        ],
    },
    {
        title: "REPORTING & ANALYTICS",
        icon: "fa-chart-line",
        color: "text-red-600",
        bg: "bg-red-50",
        modules: [
            {
                id: 16,
                name: "Financial Reports",
                features: [
                    "Profit & Loss",
                    "Balance Sheet",
                    "Cash Flow Statement",
                    "Trial Balance",
                ],
                count: 35,
            },
            {
                id: 17,
                name: "Business Analytics",
                features: [
                    "Sales Analytics",
                    "Expense Analytics",
                    "Profitability Analysis",
                    "Trend Reports",
                ],
                count: 28,
            },
            {
                id: 18,
                name: "Tax Reports",
                features: [
                    "VAT Reports",
                    "Tax Calculation",
                    "TDS Reports",
                    "Audit Trail",
                ],
                count: 22,
            },
            {
                id: 19,
                name: "Custom Reports",
                features: [
                    "Report Builder",
                    "Export to Excel/PDF",
                    "Scheduled Reports",
                ],
                count: 18,
            },
        ],
    },
    {
        title: "ADVANCED FEATURES",
        icon: "fa-cogs",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        modules: [
            {
                id: 20,
                name: "Multi-Company",
                features: [
                    "Consolidated Reports",
                    "Inter-Company Transactions",
                    "Branch Management",
                ],
                count: 25,
            },
            {
                id: 21,
                name: "Budgeting & Forecasting",
                features: [
                    "Budget Creation",
                    "Budget vs Actual",
                    "Variance Analysis",
                ],
                count: 20,
            },
            {
                id: 22,
                name: "Project Accounting",
                features: [
                    "Project Costing",
                    "Time & Expense",
                    "Project Profitability",
                ],
                count: 22,
            },
            {
                id: 23,
                name: "Integration & API",
                features: [
                    "Bank Integration",
                    "E-commerce Integration",
                    "Payment Gateway",
                    "Custom API",
                ],
                count: 20,
            },
        ],
    },
];

export const stats = [
    { label: "Active Businesses", value: "500+" },
    { label: "Transactions/Month", value: "100k+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Customer Satisfaction", value: "98%" },
];

export const coreFeatures = [
    {
        title: "Automated Invoicing",
        desc: "Create professional invoices in seconds. Send via email, WhatsApp, or SMS. Track payment status and send automated reminders.",
        icon: "fa-file-invoice-dollar",
        color: "text-green-500",
        bg: "bg-green-100",
    },
    {
        title: "Expense Management",
        desc: "Track all business expenses, categorize automatically, attach receipts, and generate expense reports for better cost control.",
        icon: "fa-receipt",
        color: "text-blue-500",
        bg: "bg-blue-100",
    },
    {
        title: "Financial Reports",
        desc: "Get real-time Profit & Loss, Balance Sheet, Cash Flow, and custom reports. Make informed decisions with accurate data.",
        icon: "fa-chart-bar",
        color: "text-purple-500",
        bg: "bg-purple-100",
    },
    {
        title: "Inventory Tracking",
        desc: "Monitor stock levels in real-time, get low-stock alerts, track product movement, and optimize inventory costs.",
        icon: "fa-warehouse",
        color: "text-orange-500",
        bg: "bg-orange-100",
    },
    {
        title: "Bank Reconciliation",
        desc: "Auto-sync with your bank accounts, match transactions automatically, and reconcile accounts in minutes instead of hours.",
        icon: "fa-university",
        color: "text-cyan-500",
        bg: "bg-cyan-100",
    },
    {
        title: "Tax Compliance",
        desc: "Stay tax-ready with automated VAT calculation, TDS reports, and audit trails. Generate tax reports with one click.",
        icon: "fa-file-alt",
        color: "text-red-500",
        bg: "bg-red-100",
    },
];

export const faqs = [
    {
        question: "Is this suitable for small businesses?",
        answer: "Absolutely! Our Basic plan is designed specifically for small businesses with 1-5 users. It includes all essential accounting features like invoicing, expense tracking, and financial reports at an affordable price.",
    },
    {
        question: "Can I access it from mobile?",
        answer: "Yes! Our accounting software works on any device - desktop, tablet, or mobile. We also have dedicated Android and iOS apps for on-the-go access.",
    },
    {
        question: "How secure is my financial data?",
        answer: "We use bank-level encryption (256-bit SSL), daily backups, and secure cloud infrastructure. Your data is stored in multiple locations and is protected with advanced security measures.",
    },
    {
        question: "Can it handle multiple companies?",
        answer: "Yes! Our Premium and Enterprise plans support multi-company management. You can manage multiple businesses from a single account with consolidated reporting.",
    },
    {
        question: "Does it integrate with banks?",
        answer: "Yes, we support automatic bank synchronization for major Bangladesh banks. Transactions are imported automatically, making reconciliation quick and easy.",
    },
    {
        question: "What about VAT and tax reports?",
        answer: "Our software is fully compliant with Bangladesh tax regulations. It automatically calculates VAT, generates tax reports, and maintains audit trails for NBR compliance.",
    },
];
