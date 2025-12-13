"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Code2, Terminal, Cpu } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const iconMap: Record<string, any> = {
    "Backend Engineering": Server,
    "Databases & Caching": Database,
    "Cloud & Infrastructure": Cloud,
    "Systems & Messaging": Cpu
};

export default function Skills() {
    const { skills } = portfolioData;

    return (
        <section className="py-24 bg-background relative">
            <div className="container px-4 md:px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Technical Arsenal</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        My expertise lies in building robust backend systems. I focus on performance, scalability, and maintainable code.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = iconMap[skill.category] || Terminal;

                        return (
                            <motion.div
                                key={skill.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 rounded-xl group"
                            >
                                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-4">{skill.category}</h3>
                                <ul className="space-y-2">
                                    {skill.items.map((item) => (
                                        <li key={item} className="text-sm text-muted-foreground flex items-center">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
