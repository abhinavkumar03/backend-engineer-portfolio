"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/Button";
import Scene from "./canvas/Scene";
import portfolioData from "@/data/portfolio.json";

export default function Hero() {
    const { hero, personal } = portfolioData;

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
            <Scene />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-sm md:text-base font-medium tracking-wider text-primary uppercase">
                            {personal.name}
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl">
                            {hero.headline}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {hero.subtext}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="group cursor-pointer" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            {hero.ctaPrimary}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                                {hero.ctaSecondary}
                                <Download className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </motion.div>
        </section>
    );
}
