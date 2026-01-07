import { ArrowRight, Grid3X3, Zap, Palette, Code } from "lucide-react";
import Link from "next/link";
import Text02 from "@/components/codesnippetui/text/text-02";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function ShowcaseSection() {
    return (
        <div className="py-16 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Decorative background elements - contained within the relative container */}
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -z-10" />
                
                <div className="relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                            <Text02 />
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
                            See our beautiful components in action. Experience the perfect blend of design and functionality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-zinc-900 dark:to-zinc-800 border-0 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                    <Grid3X3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Component Gallery</h3>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                Browse our extensive collection of beautifully designed UI components, ready to integrate into your projects.
                            </p>
                            <Button variant="outline" className="w-full">
                                Explore Components
                            </Button>
                        </Card>

                        <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-zinc-900 dark:to-zinc-800 border-0 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Instant Integration</h3>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                Copy and paste components directly into your code. No complex setup required.
                            </p>
                            <Button variant="outline" className="w-full">
                                Get Started
                            </Button>
                        </Card>

                        <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-800 border-0 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                                    <Palette className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Fully Customizable</h3>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                Adapt colors, sizes, and styles to match your brand identity perfectly.
                            </p>
                            <Button variant="outline" className="w-full">
                                Customize Now
                            </Button>
                        </Card>
                    </div>

                    <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex-1 max-w-lg">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                                    Ready to elevate your UI?
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                    Join thousands of developers who trust our components to build stunning user interfaces.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
                                        Get Started Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        View Documentation
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold border-2 border-white dark:border-zinc-900">
                                        A
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold border-2 border-white dark:border-zinc-900">
                                        B
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold border-2 border-white dark:border-zinc-900">
                                        C
                                    </div>
                                </div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                    <p className="font-medium">Join 5,000+</p>
                                    <p>Happy Developers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
