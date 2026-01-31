export const pricingPlans = [
    {
        name: "Basic Plan",
        monthlyPrice: 1500,
        oneTimeCharge: 3000,
        ranges: [
            { range: "Up to 300 Students", price: 1500 },
            { range: "301-500 Students", price: 2000 },
            { range: "501-1000 Students", price: 3000 },
            { range: "1001-2000 Students", price: 5000 },
            { range: "2001-3000 Students", price: 7000 },
        ],
    },
    {
        name: "Standard Plan",
        monthlyPrice: 2500,
        oneTimeCharge: 5000,
        ranges: [
            { range: "Up to 300 Students", price: 2500 },
            { range: "301-500 Students", price: 3500 },
            { range: "501-1000 Students", price: 5000 },
            { range: "1001-2000 Students", price: 8000 },
            { range: "2001-3000 Students", price: 12000 },
        ],
    },
    {
        name: "Premium Plan",
        recommended: true,
        monthlyPrice: 4000,
        oneTimeCharge: 10000,
        ranges: [
            { range: "Up to 300 Students", price: 4000 },
            { range: "301-500 Students", price: 6000 },
            { range: "501-1000 Students", price: 10000 },
            { range: "1001-2000 Students", price: 15000 },
            { range: "2001-3000 Students", price: 20000 },
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        subtitle: "UNLIMITED STUDENTS",
        oneTimeCharge: "N/A",
        facilities: [
            "Everything From Premium Plan",
            "Unlimited Students",
            "Dedicated Support Manager",
            "Custom Feature Development",
            "On-Premise Deployment Option",
            "White Label Mobile App",
            "Annual On-Site Training",
        ],
    },
];

export const institutionTypes = [
    {
        id: "school",
        label: "Schools",
        title: "School Management System",
        desc: "Automate attendance, exams, results, and fee collection. Connect parents, teachers, and students in one digital ecosystem designed for modern schooling.",
        features: [
            { name: "Digital Attendance", icon: "fa-user-check" },
            { name: "Result Processing", icon: "fa-poll" },
            { name: "Fee Management", icon: "fa-money-bill-wave" },
            { name: "Online Class", icon: "fa-video" },
            { name: "SMS Notification", icon: "fa-comment-alt" },
            { name: "Digital ID Card", icon: "fa-id-card" },
        ],
    },
    {
        id: "college",
        label: "Colleges",
        title: "College Management Software",
        desc: "Handle complex course structures, department-wise management, and academic transcripts with ease. Streamline admissions and academic planning.",
        features: [
            { name: "Online Admission", icon: "fa-laptop" },
            { name: "Course Management", icon: "fa-book" },
            { name: "Transcript Gene.", icon: "fa-file-alt" },
            { name: "Library System", icon: "fa-book-reader" },
            { name: "Alumni Portal", icon: "fa-user-graduate" },
            { name: "Hostel Management", icon: "fa-bed" },
        ],
    },
    {
        id: "madrasah",
        label: "Madrasah",
        title: "Madrasah Management System",
        desc: "Specialized features for Arabic curriculum, Hifz tracking, and residential management. A complete solution respecting traditional values with modern tech.",
        features: [
            { name: "Hifz Tracking", icon: "fa-quran" },
            { name: "Arabic Support", icon: "fa-language" },
            { name: "Donation Manage", icon: "fa-hand-holding-heart" },
            { name: "Board Exam", icon: "fa-scroll" },
            { name: "Residential", icon: "fa-home" },
            { name: "Meal Management", icon: "fa-utensils" },
        ],
    },
    {
        id: "training",
        label: "Training Centers",
        title: "Training Center ERP",
        desc: "Manage batches, trainers, and certifications efficiently. Perfect for coaching centers, vocational institutes, and skill development academies.",
        features: [
            { name: "Batch Schedule", icon: "fa-calendar-alt" },
            { name: "Trainer Portal", icon: "fa-chalkboard-teacher" },
            { name: "Certificates", icon: "fa-certificate" },
            { name: "Leads Manage", icon: "fa-funnel-dollar" },
            { name: "Student Portal", icon: "fa-user-circle" },
            { name: "Expense Track", icon: "fa-calculator" },
        ],
    },
];

export const moduleCategories = [
    {
        title: "CORE ACADEMIC MODULES",
        icon: "fa-graduation-cap",
        modules: [
            {
                id: 1,
                name: "Admission System",
                features: [
                    "Online admission form",
                    "Exam & interview scheduling",
                    "Selection process",
                    "Digital database creation",
                ],
                count: 15,
            },
            {
                id: 2,
                name: "Student Management",
                features: [
                    "Complete profile management",
                    "Class & section allocation",
                    "ID card generation",
                    "Promotion & transfer",
                ],
                count: 20,
            },
            {
                id: 3,
                name: "Academic Setup",
                features: [
                    "Class, Subject, Group setup",
                    "Routine/Schedule builder",
                    "Syllabus & lesson plan",
                    "Academic calendar",
                ],
                count: 12,
            },
            {
                id: 4,
                name: "Attendance System",
                features: [
                    "Biometric/RFID integration",
                    "Manual digital entry",
                    "Leave application & approval",
                    "Absentee SMS alert",
                ],
                count: 10,
            },
        ],
    },
    {
        title: "EXAM & RESULTS",
        icon: "fa-file-signature",
        modules: [
            {
                id: 5,
                name: "Exam Management",
                features: [
                    "Exam scheduling",
                    "Admit card generation",
                    "Seat plan creation",
                    "Invigilator duty roster",
                ],
                count: 14,
            },
            {
                id: 6,
                name: "Result Processing",
                features: [
                    "Auto GPA/CGPA calculation",
                    "Mark sheet generation",
                    "Tabulation sheet",
                    "Merit list preparation",
                ],
                count: 18,
            },
            {
                id: 7,
                name: "Question Bank",
                features: [
                    "Question paper generation",
                    "Online exam system",
                    "MCQ & written support",
                    "Result analysis",
                ],
                count: 8,
            },
        ],
    },
    {
        title: "FINANCE & ACCOUNTS",
        icon: "fa-donate",
        modules: [
            {
                id: 8,
                name: "Fees Collection",
                features: [
                    "Online payment gateway",
                    "Fee receipt generation",
                    "Due reminders (SMS)",
                    "Waiver/Scholarship management",
                ],
                count: 16,
            },
            {
                id: 9,
                name: "Accounts & Expense",
                features: [
                    "Income-expense tracking",
                    "Daily/Monthly reports",
                    "Bank account management",
                    "Voucher system",
                ],
                count: 12,
            },
            {
                id: 10,
                name: "Payroll Management",
                features: [
                    "Staff salary processing",
                    "Provident fund",
                    "Allowance & deduction",
                    "Payslip generation",
                ],
                count: 10,
            },
        ],
    },
    {
        title: "HR & OTHERS",
        icon: "fa-users-cog",
        modules: [
            {
                id: 11,
                name: "Staff Management",
                features: [
                    "Teacher/Staff database",
                    "Attendance tracking",
                    "Leave management",
                    "Access control",
                ],
                count: 15,
            },
            {
                id: 12,
                name: "Library Management",
                features: [
                    "Book cataloging",
                    "Issue & return tracking",
                    "Fine calculation",
                    "Digital library support",
                ],
                count: 10,
            },
            {
                id: 13,
                name: "Inventory / Store",
                features: [
                    "Asset management",
                    "Stock tracking",
                    "Purchase history",
                    "Supplier management",
                ],
                count: 8,
            },
            {
                id: 14,
                name: "Hostel & Transport",
                features: [
                    "Room allocation",
                    "Route management",
                    "Vehicle tracking",
                    "Fee collection",
                ],
                count: 12,
            },
            {
                id: 15,
                name: "Website & Content",
                features: [
                    "Dynamic school website",
                    "Notice board",
                    "Photo gallery",
                    "Download center",
                ],
                count: 8,
            },
        ],
    },
];

export const stats = [
    { label: "Students Managed", value: "50k+" },
    { label: "Institutions", value: "100+" },
    { label: "Daily Users", value: "10k+" },
    { label: "Uptime", value: "99.9%" },
];

export const coreFeatures = [
    {
        title: "Smart Attendance",
        desc: "Automated attendance tracking with Biometric/RFID integration. Instant SMS notifications to parents for absentees.",
        icon: "fa-user-clock",
        color: "text-blue-500",
        bg: "bg-blue-100",
    },
    {
        title: "Result Automation",
        desc: "Error-free result processing with auto GPA calculation, tabulation sheets, and progress report generation.",
        icon: "fa-chart-line",
        color: "text-purple-500",
        bg: "bg-purple-100",
    },
    {
        title: "Fee Management",
        desc: "Complete accounts management with online payment, due tracking, and daily collection reports. Reduce financial leakage.",
        icon: "fa-coins",
        color: "text-green-500",
        bg: "bg-green-100",
    },
    {
        title: "Mobile Apps",
        desc: "Dedicated Android & iOS apps for Teachers, Parents, and Students to stay connected with the institution anytime.",
        icon: "fa-mobile-alt",
        color: "text-orange-500",
        bg: "bg-orange-100",
    },
    {
        title: "Online Admission",
        desc: "Paperless admission process with digital forms, payment integration, and applicant sorting. Streamline new enrollments.",
        icon: "fa-laptop-medical",
        color: "text-cyan-500",
        bg: "bg-cyan-100",
    },
    {
        title: "Digital Payroll",
        desc: "Manage staff salaries, leaves, and increments automatically. Generate professional payslips with one click.",
        icon: "fa-file-invoice-dollar",
        color: "text-red-500",
        bg: "bg-red-100",
    },
];

export const faqs = [
    {
        question: "Is this software suitable for English Medium schools?",
        answer: "Yes! GlobixTech SMS is fully customizable for English Medium, Bangla Medium, and Madrasah curriculums. We support different grading systems and academic calendars.",
    },
    {
        question: "Do you provide data entry support during setup?",
        answer: "Absolutely. Our team helps migrate your existing student and staff data into the new system to ensure a smooth transition.",
    },
    {
        question: "Can parents pay fees online?",
        answer: "Yes, we integrate with major payment gateways (bkash, Nagad, Rocket, Cards) so parents can pay fees directly from the mobile app or website.",
    },
    {
        question: "Is my data secure?",
        answer: "We use daily cloud backups and encrypted servers. Your institution's data is 100% safe and confidential.",
    },
    {
        question: "What happens if I need technical help?",
        answer: "We offer dedicated support via phone and remote desktop. Our support team is available during business hours to resolve any issues instantly.",
    },
    {
        question: "Do I need to buy a server?",
        answer: "No, we provide a complete cloud solution. You just need an internet connection and a computer or mobile device to use the software.",
    },
];
