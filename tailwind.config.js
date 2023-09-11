/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./assets/**/*.{png,jpeg,jpg,gif}"],
  theme: {
    screens: {
      sm: { max: '639px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xl: { max: '1279px' },
      xlog: {max:'1300px'},
      xlg: {max: '1440px'}
    },
    fontFamily:{
      'SegoePrint':['Segoe Print'],
      'Montserrat':['Montserrat'],
      'Poppins':[
        'Poppins'
      ],
      'Noto':[
        'Noto Sans JP'
      ],
      'Tahoma':['Tahoma'],
      'Kyokasho':['UD Digi Kyokasho NK-R'],
      'YaHei' :['Micro YaHei Ui'],
      'KyokashoNPB':['UD Digi Kyokasho NP-B']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}