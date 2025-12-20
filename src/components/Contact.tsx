"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/Button";
import portfolioData from "@/data/portfolio.json";

export default function Contact() {
    const { contact, personal } = portfolioData;

    return (
        <section className="py-24 border-t border-white/10 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                            {contact.headline}
                        </h2>
                        <p className="font-normal tracking-normal text-muted-foreground max-w-xl mx-auto">
                            {contact.subtext}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button size="lg" asChild>
                            <a href={`mailto:${personal.email}`}>
                                <Mail className="mr-2 h-4 w-4" />
                                {contact.cta}
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </a>
                        </Button>
                        <Button size="lg" variant="ghost" asChild>
                            <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        </Button>
                    </motion.div>

                    <div className="pt-16 text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} {personal.name}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
