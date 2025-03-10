module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",  // 프로젝트의 HTML/JS/TS 파일 경로
  ],
  theme: {
    extend: {
      fontFamily: {
        LineKO: ['Line-KO', 'sans-serif'], 
        LineEN: ['Line-EN', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
