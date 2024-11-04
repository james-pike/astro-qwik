/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // These are for the modal
    'backdrop-blur',
    // These are for the TOC
    'pl-4',
    'pl-5',
    'pl-6',
    'pl-7',
    'pl-8',
    // These are for the charts
    'stroke-brand-teal',
    'stroke-brand-mauve',
    'stroke-brand-salmon',
    'stroke-brand-yellow',
    'stroke-brand-lime',
    'stroke-brand-blood',
    'stroke-brand-starfleet',
    'stroke-brand-electric',
    'stroke-brand-pink',
    'stroke-brand-fuchsia',
    'stroke-brand-secondary',

    'fill-brand-teal',
    'fill-brand-mauve',
    'fill-brand-salmon',
    'fill-brand-yellow',
    'fill-brand-lime',
    'fill-brand-blood',
    'fill-brand-starfleet',
    'fill-brand-electric',
    'fill-brand-pink',
    'fill-brand-fuchsia',
    'fill-brand-secondary',

    'bg-brand-teal',
    'bg-brand-mauve',
    'bg-brand-salmon',
    'bg-brand-yellow',
    'bg-brand-lime',
    'bg-brand-blood',
    'bg-brand-starfleet',
    'bg-brand-electric',
    'bg-brand-pink',
    'bg-brand-fuchsia',
    'bg-brand-secondary',

    'text-brand-teal',
    'text-brand-mauve',
    'text-brand-salmon',
    'text-brand-yellow',
    'text-brand-lime',
    'text-brand-blood',
    'text-brand-starfleet',
    'text-brand-electric',
    'text-brand-pink',
    'text-brand-fuchsia',
    'text-brand-secondary',

    // This is for the GitHub Activity
    'bg-brand-starfleet',
    'bg-brand-electric',
    'bg-red-500',

    // These are for the Ghosts collections cards
    'cursor-not-allowed',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          text: '#333333',          // Dark gray for text, easier to read on a lighter background
          primary: '#1D4ED8',       // Business blue, inspired by classic corporate blue tones
          secondary: '#2563EB',     // Slightly brighter blue for accents
          tertiary: '#93C5FD',      // Light blue, friendly for highlights
          muted: '#64748B',         // Muted gray-blue for subtle elements
          salmon: '#FB7185',        // Lighter salmon, keeps a vibrant touch
          mauve: '#6366F1',         // Soft violet for less intense accents
          teal: '#06B6D4',          // Bright teal, adds a fresh color pop
          lime: '#84CC16',          // Lightened lime, adds energy while staying readable
          yellow: '#F59E0B',        // Warm yellow for caution or highlights
          fuchsia: '#C026D3',       // Brighter fuchsia for attention-grabbing elements
          blood: '#F87171',         // Softer red for alerts, not too intense
          starfleet: '#3B82F6',     // Bright blue, good for buttons and links
          electric: '#7C3AED',      // Electric violet for occasional flair
          pink: '#EC4899',          // Lightened pink, playful but easier to read
          background: '#F3F4F6',    // Light gray, safer on the eyes for a bright background
          outline: '#CBD5E1',       // Light gray-blue, subtle contrast against background
          surface: '#E5E7EB',       // Very light gray, for cards or surfaces on the background
          guide: '#9CA3AF',         // Medium gray, guides or borders
          radar: '#D1D5DB',   
        },
      },
      fontFamily: {
        sans: ['Inconsolata', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {
        'x-icon': "url('https://paulie.dev/images/x-icon.svg')",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*:not(h1, h2, h3, h4, h5, h6, a, code)': {
              color: theme('colors.brand.text'),
            },

            h1: {
              color: theme('colors.brand.text'),
              margin: '2rem 0',
              fontWeight: 900,
              a: {
                fontWeight: 900,
                textDecoration: 'none',
                color: theme('colors.brand.salmon'),
              },
            },
            'h2, h3, h4, h5, h6': {
              color: theme('colors.brand.salmon'),
              fontWeight: 900,
              a: {
                fontWeight: 900,
                textDecoration: 'none',
                color: theme('colors.brand.salmon'),
              },
            },
            p: {
              fontFamily: 'system-ui',
              strong: {
                fontWeight: 700,
              },
            },
            button: {
              fontFamily: 'system-ui',
              fontWeight: 700,
            },
            a: {
              color: theme('colors.brand.secondary'),
              cursor: 'pointer',
              wordBreak: 'break-word',
              '&:hover': {
                color: theme('colors.brand.text'),
              },
              p: {
                margin: 0,
                color: 'inherit',
              },
            },
            ol: {
              li: {
                '&::marker': {
                  color: theme('colors.brand.salmon'),
                },
              },
            },
            ul: {
              li: {
                '&::marker': {
                  color: theme('colors.brand.salmon'),
                },
              },
            },
            'a, small, time': {
              fontWeight: 300,
            },
            'pre[class*="language-"]': {
              margin: '2.5rem 0px!important',
            },
            code: {
              color: theme('colors.brand.tertiary'),
              wordBreak: 'break-word',
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
            },

            blockquote: {
              background: theme('colors.brand.surface'),
              padding: '1.2em',
              borderLeftColor: theme('colors.brand.yellow'),
              borderRadius: '.2em',
              p: {
                margin: 0,
              },
            },
            dl: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '1.625em',
              dt: {
                fontSize: '1.25rem',
                color: theme('colors.brand.text'),
                paddingLeft: '0.375em',
              },
              dd: {
                display: 'list-item',
                listStyleType: 'disc',
                marginTop: '0.5em',
                marginBottom: '0.5em',
                paddingLeft: '0.375em',
                '&::marker': {
                  color: theme('colors.brand.salmon'),
                },
              },
            },
            '.twitter-tweet': {
              '&::before': {
                content: "''",
                display: 'block',
                background: theme('backgroundImage.x-icon'),
                width: 24,
                height: 24,
                marginBottom: 16,
              },
              borderColor: '#232140!important',
              padding: '32px!important',
              background: theme('colors.brand.surface'),
              borderRadius: '4px',
              color: theme('colors.brand.text'),
            },
            '.event-color-PushEvent': {
              backgroundColor: theme('colors.brand.starfleet'),
            },
            '.event-color-CreateEvent': {
              backgroundColor: theme('colors.brand.lime'),
            },
            '.event-color-ForkEvent': {
              backgroundColor: theme('colors.brand.mauve'),
            },
            '.event-color-WatchEvent': {
              backgroundColor: theme('colors.brand.electric'),
            },
            '.event-color-DeleteEvent': {
              backgroundColor: theme('colors.red.500'),
            },

            '.event-color-IssueCommentEvent': {
              backgroundColor: theme('colors.brand.yellow'),
            },
            '.event-color-PullRequestReviewCommentEvent': {
              backgroundColor: theme('colors.brand.yellow'),
            },

            '.event-color-PullRequestEvent': {
              backgroundColor: theme('colors.brand.teal'),
            },
            '.event-color-PullRequestReviewEvent': {
              backgroundColor: theme('colors.brand.teal'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
