export const erpVideos = {
    hero: {
        url: "/videos/erp-system/Enterprise_Resource_Planning_f.mp4",
        poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        badge: "Live ERP Interface v4.2",
        title: "Real-time Operational Command Center"
    },
    automation: {
        url: "/videos/erp-system/Autonomous_Decision_Workflow.mp4",
        poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        badge: "AI Workflow Engine",
        title: "Autonomous Decision Processing"
    },
    industry: {
        url: "/videos/erp-system/ERP_for_Manufacturing_Manufact.mp4",
        poster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        badge: "Industry 4.0 Sync",
        title: "Smart Supply & Factory Floor Integration"
    },
    ecosystem: {
        url: "/videos/erp-system/Ecosystem_ArchitectureSeamless.mp4",
        poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        badge: "Unified Ecosystem",
        title: "500+ Features Synced via Low-Latency Bus"
    }
};

export const pricingPlans = [
    {
        name: "Basic Plan",
        monthlyPrice: 3000,
        oneTimeCharge: 8000,
        ranges: [
            { range: "1-5 Users", price: 3000 },
            { range: "6-15 Users", price: 5000 },
            { range: "16-30 Users", price: 8000 },
        ],
    },
    {
        name: "Standard Plan",
        monthlyPrice: 5000,
        oneTimeCharge: 15000,
        ranges: [
            { range: "1-5 Users", price: 5000 },
            { range: "6-15 Users", price: 8000 },
            { range: "16-30 Users", price: 12000 },
        ],
    },
    {
        name: "Premium Plan",
        recommended: true,
        monthlyPrice: 8000,
        oneTimeCharge: 25000,
        ranges: [
            { range: "1-5 Users", price: 8000 },
            { range: "6-15 Users", price: 12000 },
            { range: "16-30 Users", price: 18000 },
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        subtitle: "UNLIMITED USERS",
        oneTimeCharge: "N/A",
        facilities: [
            "Everything From Premium Plan",
            "Unlimited Users & Modules",
            "Multi-Company Management",
            "Dedicated Support Team",
            "Custom Integrations",
            "Deploy Your Own Server",
            "White Label License",
        ],
    },
];

export const industryTypes = [
    {
        id: "manufacturing",
        label: "Manufacturing",
        title: "ERP for Manufacturing",
        desc: "Manufacturing businesses need to coordinate raw materials, production planning, quality control, and finished goods inventory. Our ERP handles BOM, MRP, shop floor management, and production scheduling to optimize your entire manufacturing lifecycle.",
        features: [
            { name: "Bill of Materials", icon: "fa-list-alt" },
            { name: "Production Planning", icon: "fa-calendar-alt" },
            { name: "Quality Control", icon: "fa-check-double" },
            { name: "Shop Floor Mgmt", icon: "fa-industry" },
            { name: "MRP", icon: "fa-cogs" },
            { name: "Cost Tracking", icon: "fa-dollar-sign" },
        ],
    },
    {
        id: "trading",
        label: "Trading & Distribution",
        title: "ERP for Trading Businesses",
        desc: "Trading companies need multi-channel sales management, warehouse operations, and distribution network oversight. Our ERP manages purchase orders, sales orders, inventory across locations, and distribution logistics with real-time visibility.",
        features: [
            { name: "Multi-Channel Sales", icon: "fa-shopping-cart" },
            { name: "Warehouse Management", icon: "fa-warehouse" },
            { name: "Distribution Network", icon: "fa-truck" },
            { name: "Purchase Orders", icon: "fa-file-invoice" },
            { name: "Sales Orders", icon: "fa-clipboard-list" },
            { name: "Real-Time Inventory", icon: "fa-sync" },
        ],
    },
    {
        id: "services",
        label: "Service Companies",
        title: "ERP for Service Businesses",
        desc: "Service businesses need project management, time tracking, and resource allocation. Our ERP handles project workflows, employee timesheets, client billing, and service contracts to streamline your service delivery operations.",
        features: [
            { name: "Project Management", icon: "fa-project-diagram" },
            { name: "Time Tracking", icon: "fa-clock" },
            { name: "Resource Allocation", icon: "fa-users" },
            { name: "Client Billing", icon: "fa-file-invoice-dollar" },
            { name: "Service Contracts", icon: "fa-file-contract" },
            { name: "Expense Management", icon: "fa-receipt" },
        ],
    },
    {
        id: "retail",
        label: "Retail Chains",
        title: "ERP for Retail Businesses",
        desc: "Retail chains need centralized control over multiple stores, inventory distribution, and sales consolidation. Our ERP integrates POS across all locations, manages stock transfers, and provides unified reporting for complete business visibility.",
        features: [
            { name: "Multi-Store Management", icon: "fa-store" },
            { name: "POS Integration", icon: "fa-cash-register" },
            { name: "Inventory Distribution", icon: "fa-boxes" },
            { name: "Sales Consolidation", icon: "fa-chart-bar" },
            { name: "Vendor Management", icon: "fa-handshake" },
            { name: "Loyalty Programs", icon: "fa-star" },
        ],
    },
];

export const moduleCategories = [
    {
        title: "FINANCE & ACCOUNTING",
        icon: "fa-calculator",
        color: "text-blue-600",
        bg: "bg-blue-50",
        modules: [
            {
                id: 1,
                name: "General Ledger",
                features: [
                    "Chart of accounts",
                    "Journal entries",
                    "Trial balance",
                    "Financial statements",
                ],
                count: 35,
            },
            {
                id: 2,
                name: "Accounts Payable",
                features: [
                    "Invoice processing",
                    "Payment scheduling",
                    "Supplier management",
                    "Aging reports",
                ],
                count: 28,
            },
            {
                id: 3,
                name: "Accounts Receivable",
                features: [
                    "Customer invoicing",
                    "Payment collection",
                    "Credit management",
                    "Dunning letters",
                ],
                count: 25,
            },
            {
                id: 4,
                name: "Budgeting",
                features: [
                    "Budget planning",
                    "Variance analysis",
                    "Department budgets",
                    "Forecasting",
                ],
                count: 20,
            },
        ],
    },
    {
        title: "HUMAN RESOURCES",
        icon: "fa-users",
        color: "text-purple-600",
        bg: "bg-purple-50",
        modules: [
            {
                id: 5,
                name: "Employee Management",
                features: [
                    "Employee database",
                    "Personal records",
                    "Document management",
                    "Org chart",
                ],
                count: 30,
            },
            {
                id: 6,
                name: "Payroll",
                features: [
                    "Salary processing",
                    "Tax calculations",
                    "Deductions & benefits",
                    "Payslip generation",
                ],
                count: 35,
            },
            {
                id: 7,
                name: "Attendance & Leave",
                features: [
                    "Biometric integration",
                    "Leave requests",
                    "Shift scheduling",
                    "Overtime tracking",
                ],
                count: 25,
            },
            {
                id: 8,
                name: "Recruitment",
                features: [
                    "Job postings",
                    "Applicant tracking",
                    "Interview scheduling",
                    "Onboarding",
                ],
                count: 20,
            },
        ],
    },
    {
        title: "INVENTORY & WAREHOUSE",
        icon: "fa-warehouse",
        color: "text-green-600",
        bg: "bg-green-50",
        modules: [
            {
                id: 9,
                name: "Inventory Control",
                features: [
                    "Stock management",
                    "Multi-location",
                    "Stock transfers",
                    "Reorder management",
                ],
                count: 30,
            },
            {
                id: 10,
                name: "Warehouse Operations",
                features: [
                    "Bin location tracking",
                    "Picking & packing",
                    "Shipping integration",
                    "Cycle counting",
                ],
                count: 28,
            },
            {
                id: 11,
                name: "Purchase Management",
                features: [
                    "Purchase orders",
                    "Goods receipt",
                    "Supplier management",
                    "Price comparison",
                ],
                count: 25,
            },
        ],
    },
    {
        title: "SALES & CRM",
        icon: "fa-handshake",
        color: "text-orange-600",
        bg: "bg-orange-50",
        modules: [
            {
                id: 12,
                name: "Sales Management",
                features: [
                    "Quotation management",
                    "Sales orders",
                    "Invoice generation",
                    "Delivery tracking",
                ],
                count: 28,
            },
            {
                id: 13,
                name: "CRM",
                features: [
                    "Lead management",
                    "Pipeline tracking",
                    "Customer history",
                    "Follow-up reminders",
                ],
                count: 30,
            },
            {
                id: 14,
                name: "E-commerce Integration",
                features: [
                    "Online store sync",
                    "Order sync",
                    "Stock sync",
                    "Customer sync",
                ],
                count: 22,
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
                id: 15,
                name: "Financial Reports",
                features: [
                    "Profit & loss",
                    "Balance sheet",
                    "Cash flow",
                    "Tax reports",
                ],
                count: 30,
            },
            {
                id: 16,
                name: "Operational Reports",
                features: [
                    "Inventory reports",
                    "Sales analytics",
                    "HR reports",
                    "Production reports",
                ],
                count: 28,
            },
            {
                id: 17,
                name: "Dashboards",
                features: [
                    "Executive dashboard",
                    "Real-time KPIs",
                    "Custom widgets",
                    "Export to Excel/PDF",
                ],
                count: 25,
            },
        ],
    },
    {
        title: "ADVANCED MODULES",
        icon: "fa-puzzle-piece",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        modules: [
            {
                id: 18,
                name: "Multi-Company",
                features: [
                    "Multiple companies",
                    "Consolidated reports",
                    "Inter-company transfers",
                    "Shared resources",
                ],
                count: 20,
            },
            {
                id: 19,
                name: "Project Management",
                features: [
                    "Project tracking",
                    "Task management",
                    "Resource allocation",
                    "Timesheet tracking",
                ],
                count: 25,
            },
            {
                id: 20,
                name: "API & Integrations",
                features: [
                    "REST API",
                    "Webhooks",
                    "Third-party integrations",
                    "Custom connectors",
                ],
                count: 22,
            },
            {
                id: 21,
                name: "Document Management",
                features: [
                    "File storage",
                    "Document templates",
                    "Approval workflows",
                    "Audit trails",
                ],
                count: 18,
            },
        ],
    },
];

export const stats = [
    { label: "Businesses Served", value: "200+" },
    { label: "Modules Available", value: "50+" },
    { label: "Daily Transactions", value: "100k+" },
    { label: "Uptime", value: "99.9%" },
];

export const coreFeatures = [
    {
        title: "Unified Business Management",
        desc: "Manage finance, HR, inventory, sales, and operations from a single integrated platform. Eliminate data silos and improve decision-making.",
        icon: "fa-th-large",
        color: "text-blue-500",
        bg: "bg-blue-100",
    },
    {
        title: "Real-Time Dashboards",
        desc: "Get instant visibility into your entire business with customizable dashboards. Monitor KPIs, trends, and alerts in real-time.",
        icon: "fa-tachometer-alt",
        color: "text-purple-500",
        bg: "bg-purple-100",
    },
    {
        title: "Automated Workflows",
        desc: "Automate repetitive tasks like approvals, notifications, and report generation. Reduce manual work and human errors.",
        icon: "fa-magic",
        color: "text-green-500",
        bg: "bg-green-100",
    },
    {
        title: "Multi-Company Support",
        desc: "Manage multiple companies and branches from one system. Consolidate financials and transfer resources between entities.",
        icon: "fa-building",
        color: "text-orange-500",
        bg: "bg-orange-100",
    },
    {
        title: "Scalable Architecture",
        desc: "Start with the modules you need and add more as your business grows. Our modular design ensures you only pay for what you use.",
        icon: "fa-expand-arrows-alt",
        color: "text-cyan-500",
        bg: "bg-cyan-100",
    },
    {
        title: "Compliance & Security",
        desc: "Stay compliant with local tax regulations and international standards. Role-based access control and audit trails protect your data.",
        icon: "fa-shield-alt",
        color: "text-red-500",
        bg: "bg-red-100",
    },
];

export const faqs = [
    {
        question: "What is an ERP system and do I need one?",
        answer: "ERP (Enterprise Resource Planning) is an integrated software system that manages your core business processes - finance, HR, inventory, sales, and more - in one place. If your business has multiple departments, growing operations, or you're struggling with disconnected systems, an ERP can significantly improve efficiency.",
    },
    {
        question: "How long does ERP implementation take?",
        answer: "Implementation timeline depends on your business size and complexity. Basic setups take 4-6 weeks, while enterprise deployments with custom modules can take 3-6 months. We follow a phased approach to minimize disruption.",
    },
    {
        question: "Can I migrate from my existing accounting software?",
        answer: "Yes! We support data migration from Tally, QuickBooks, spreadsheets, and other systems. Our team handles the migration process to ensure data integrity and minimal downtime.",
    },
    {
        question: "Is the ERP cloud-based or on-premise?",
        answer: "We offer both options. Cloud-based ERP requires no server investment and can be accessed from anywhere. On-premise deployment gives you full control over your data. We also offer hybrid options.",
    },
    {
        question: "Can I customize the ERP for my industry?",
        answer: "Absolutely! Our ERP is modular and highly customizable. We tailor workflows, reports, and features to match your specific industry requirements. Custom modules can be developed for unique business needs.",
    },
    {
        question: "What support do you provide after implementation?",
        answer: "We provide comprehensive post-implementation support including training, documentation, technical support, and regular updates. Our support team is available during business hours with emergency support for critical issues.",
    },
];
