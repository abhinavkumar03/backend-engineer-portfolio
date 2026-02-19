"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background">
            <div className="container-xl px-4 md:px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Professional Journey</h2>
                    <p className="text-muted-foreground">
                        Building value through engineering excellence.
                    </p>
                </div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 hidden md:block" />

                            <div className="flex-1 md:w-1/2">
                                <div className={`p-6 rounded-xl glass-card ${index % 2 === 0 ? "md:text-left" : "md:text-left"
                                    }`}>
                                    <div className="flex flex-col gap-2 mb-4">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                            <span className="text-sm text-primary font-medium px-2 py-1 rounded-full bg-primary/10">
                                                {job.company}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {job.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" /> {job.location}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {job.description.map((item, i) => (
                                            <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                                                <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {job.tech.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded border border-white/5 bg-white/5 text-muted-foreground">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for the other side of the timeline */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
