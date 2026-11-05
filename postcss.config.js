module.exports = {
    plugins: {
        // Tailwind v3 under an alias: the root `tailwindcss` resolves to v4,
        // which can't read tailwind.config.js or the @tailwind directives in globals.css.
        tailwindcss3: {},
        autoprefixer: {},
    },
}
