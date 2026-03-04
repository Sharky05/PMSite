import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PM RPG Docs",
  description: "Documentation for my Project Moon inspired RPGs.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rulebook', link: '/rulebook' },
      { text: 'Statblocks', link: '/statblocks' },
      { text: 'Passives', link: '/passives' }
    ],
  }
})
