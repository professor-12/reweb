/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{html,md,mdx}"],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                "primary-gradient": "hsl(var(--primary-gradient))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                "muted-foreground": "hsl(var(--muted-foreground))",
                gradient: "hsl(var(--gradient))",
            },
            fontFamily: {
                "geist-sans": "var(--font-geist-sans)",
                heading: "var(--font-heading)",
            },
        },
    },
    plugins: [],
};
