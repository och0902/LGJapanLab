/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      screens: {
         xs: '480px',
         sm: '600px',
         md: '900px',
         lg: '1200px',
         xl: '1536px',
      },
      colors: {
         'LGred': '#A50034',
         'LGgray': '#6B6B6B',
         'LGgray-light' : '#EBEBEB',
         green: '#3E7E44',
         white : '#FFFFFF',
         black : '#000000',
      },
      fontWeight: {
         normal: '500',
         bold: '600',
      },
      extend: {
         spacing: {
            'height-nav': '100px', 
         },
         backgroundImage: {},
      },
   },
   plugins: [
      require('@tailwindcss/typography'),
   ],
};