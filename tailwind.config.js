module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1400px',
    }
  },
  plugins: [require('flowbite/plugin')],
}
