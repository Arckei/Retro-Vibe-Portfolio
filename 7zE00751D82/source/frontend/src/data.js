export const PROFILE = {
    name: "KEITH WILSON GAYTO",
    firstLine: "KEITH WILSON",
    secondLine: "GAYTO",
    role: "FULL STACK DEVELOPER",
    tagline: "> it student · full stack dev · retro at heart_",
    avatar:
        "https://images.unsplash.com/photo-1543914052-0df90fd2f932?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHJvYm90JTIwcGl4ZWwlMjBhcnR8ZW58MHx8fHwxNzg4OTIyMjQ1fDA&ixlib=rb-4.1.0&q=85",
    email: "keithwilsongayto@gmail.com",
};

export const SOCIALS = [
    { id: "github", label: "github.exe", url: "https://github.com/Arckei" },
    { id: "facebook", label: "facebook.exe", url: "https://facebook.com/keithwilson.gayto" },
    { id: "tiktok", label: "tiktok.exe", url: "https://tiktok.com/@keithwilson.gayto" },
    { id: "email", label: "mail.sh", url: "mailto:keithwilsongayto@gmail.com" },
];

export const SKILL_CHAPTERS = [
    {
        index: "01",
        title: "ENVIRONMENTS",
        note: "where the code gets compiled",
        skills: [
            { name: "Android Studio", level: 8 },
            { name: "Visual Studio", level: 8 },
        ],
    },
    {
        index: "02",
        title: "CORE LOGIC",
        note: "heavy lifting, low level thinking",
        skills: [
            { name: "Java", level: 8 },
            { name: "C++", level: 7 },
            { name: "C#", level: 7 },
        ],
    },
    {
        index: "03",
        title: "WEB MATRIX",
        note: "the front line of the interface",
        skills: [
            { name: "HTML", level: 9 },
            { name: "CSS", level: 9 },
            { name: "JavaScript", level: 8 },
        ],
    },
    {
        index: "04",
        title: "DATABASES",
        note: "structured memory, queried fast",
        skills: [{ name: "Microsoft SQL", level: 7 }],
    },
];

export const PROJECTS = [
    {
        id: 1,
        title: "LIBRATECH",
        kind: "LIBRARY MANAGEMENT SYSTEM",
        description:
            "A complete library system with user login, book management, borrow/return transactions, renewals, ISBN search & scan, borrower records, staff management and transaction reports.",
        stack: ["C#", "Windows Forms", "SQL Server"],
        image:
            "https://images.unsplash.com/photo-1677022725616-91e41d36db21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHxyZXRybyUyMGNvbXB1dGVyJTIwdGVybWluYWwlMjA4MHN8ZW58MHx8fHwxNzg4OTIyMjYyfDA&ixlib=rb-4.1.0&q=85",
        link: "https://github.com/Arckei/LibraTech-Library-Management-System",
        span: "md:col-span-7",
    },
    {
        id: 2,
        title: "CYBERGUARD",
        kind: "SECURITY WEBSITE",
        description:
            "The official website for CyberGuard — a responsive multi-page site with an interactive UI built entirely with vanilla JavaScript, CSS and HTML.",
        stack: ["JavaScript", "CSS", "HTML"],
        image:
            "https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwZGFyayUyMG5lb258ZW58MHx8fHwxNzg4OTIyMjQ1fDA&ixlib=rb-4.1.0&q=85",
        link: "https://github.com/Arckei/Website-CyberGuard",
        span: "md:col-span-5",
    },
    {
        id: 3,
        title: "KREMRICE",
        kind: "WEB PROJECT",
        description:
            "A clean, fast-loading static website built with pure HTML — simple structure, sharp content, no frameworks needed.",
        stack: ["HTML"],
        image:
            "https://images.unsplash.com/photo-1769120062656-23adba3790b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHxhYnN0cmFjdCUyMGdsb3dpbmclMjBzeW50aHdhdmUlMjBncmlkfGVufDB8fHx8MTc4ODkyMjI0NXww&ixlib=rb-4.1.0&q=85",
        link: "https://github.com/Arckei/KremRice",
        span: "md:col-span-12",
    },
];

export const MARQUEE_ITEMS = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "JAVA",
    "C++",
    "C#",
    "ANDROID STUDIO",
    "VISUAL STUDIO",
    "MS SQL",
];
