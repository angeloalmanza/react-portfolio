export const projects = [
    {
        title: "ActionFlow",
        description: "AI-powered platform that transforms meeting transcripts into tasks automatically. Paste a transcript, Groq AI (Llama 3.3 70b) extracts action items, assigns them to team members and updates the Kanban board — all in background via Laravel Queues.",
        tech: ["Laravel", "React", "PostgreSQL", "Redis", "Docker", "Groq AI"],
        github: "https://github.com/angeloalmanza/actionflow",
        live: "https://actionflow-app.netlify.app",
    },
    {
        title: "InvoiceFlow",
        description: "Invoice management SaaS for freelancers. Create and manage clients, generate professional PDF invoices, track payment status (draft → sent → paid) and monitor revenue from a real-time dashboard.",
        tech: ["Laravel", "Vue 3", "PostgreSQL", "Docker", "Vite"],
        github: "https://github.com/angeloalmanza/invoiceflow",
        live: "https://app-invoiceflow.netlify.app",
    },
    {
        title: "BDoctors",
        description: "Web interface to search for medical professionals, view them on a map, read reviews and register new doctors in the system.",
        tech: ["React", "Javascript", "Google Maps API"],
        github: "https://github.com/sebastianosalzillo/bdoctors-frontend",
    }
]