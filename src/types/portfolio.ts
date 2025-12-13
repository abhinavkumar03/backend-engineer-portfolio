export interface PortfolioData {
    personal: {
        name: string;
        role: string;
        email: string;
        location: string;
        resumeUrl: string;
        social: {
            github: string;
            linkedin: string;
        };
    };
    hero: {
        headline: string;
        subtext: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    skills: {
        category: string;
        items: string[];
    }[];
    experience: {
        company: string;
        role: string;
        period: string;
        location: string;
        description: string[];
        tech: string[];
    }[];
    projects: {
        title: string;
        description: string;
        tech: string[];
        stats: string[];
        links: {
            github: string;
            demo: string;
        };
        featured: boolean;
    }[];
    contact: {
        headline: string;
        subtext: string;
        cta: string;
    };
}
