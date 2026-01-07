import type { Registry } from "@/registry/schema";

export const lib: Registry = [
    {
        name: "utils",
        type: "registry:lib",
        dependencies: ["clsx", "tailwind-merge"],
        files: [
            {
                path: "lib/utils.ts",
                type: "registry:lib",
            },
        ],
    },
    {
        name: "action",
        type: "registry:lib",
        files: [
            {
                path: "lib/action.ts",
                type: "registry:lib",
            },
        ],
    },
    {
        name: "source",
        type: "registry:lib",
        dependencies: ["fumadocs-mdx", "fumadocs-core", "lucide-react"],
        files: [
            {
                path: "lib/source.ts",
                type: "registry:lib",
            },
        ],
    },
];
