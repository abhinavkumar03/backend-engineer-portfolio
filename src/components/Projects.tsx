"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";
import portfolioData from "@/data/portfolio.json";

export default function Projects() {
    const { projects, personal } = portfolioData;

    return (
        <section id="projects" className="py-24 bg-background relative">
            <div className="container-xl px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Engineering solutions for real-world problems.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
                            View All on GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-xl glass-card p-6 hover:-translate-y-1 ${project.featured ? "lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-card/80 to-primary/10" : ""
                                }`}
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className={`font-bold text-white ${project.featured ? "text-2xl" : "text-xl"}`}>
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2">
                                            {project.links.github && (
                                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.links.demo && project.links.demo !== "#" && (
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.stats.map((stat) => (
                                            <span key={stat} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-white border border-white/10">
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs text-primary/80">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
