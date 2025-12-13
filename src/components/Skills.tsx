"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import type { LucideIcon } from "lucide-react";

type IconName = keyof typeof Icons;

export default function Skills() {
    const { skills } = portfolioData;

    const getIcon = (name: string): LucideIcon => {
        return (Icons[name as IconName] as LucideIcon) || Icons.Terminal;
    };

    return (
        <section className="py-24 bg-background relative">
            <div className="container px-4 md:px-6">
                <div className="mb-12 max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground">
                        Backend, distributed systems, and cloud engineering skills aligned
                        with global Python & Go roles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((group, index) => {
                        const CategoryIcon = getIcon(group.icon);

                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 rounded-xl group
                           hover:border-primary/40 transition-all"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <CategoryIcon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {group.category}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <ul className="flex flex-wrap gap-2">
                                    {group.items.map((item) => {
                                        const SkillIcon = getIcon(item.icon);

                                        return (
                                            <motion.li
                                                key={item.name}
                                                whileHover={{ y: -2 }}
                                                className="flex items-center gap-2 px-3 py-1.5
                                   rounded-full bg-white/5 border border-white/10
                                   text-xs text-muted-foreground
                                   hover:text-white hover:border-primary/40
                                   transition-all"
                                            >
                                                <SkillIcon className="w-3.5 h-3.5 text-primary/80" />
                                                {item.name}
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
