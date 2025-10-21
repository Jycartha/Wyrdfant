import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"images/12prongBackground.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"footer\":\"Website currently WIP.\"},\"headers\":[],\"git\":{\"updatedTime\":1761029185000,\"contributors\":[{\"name\":\"Jycartha\",\"username\":\"Jycartha\",\"email\":\"jycartha@gmail.com\",\"commits\":4,\"url\":\"https://github.com/Jycartha\"}],\"changelog\":[{\"hash\":\"767e111c4c285daf74740a34af4e5269ee77112b\",\"time\":1761029185000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"Home page and fixes\"},{\"hash\":\"85b8085641e05396eda7a8d14c74a6dc36e72213\",\"time\":1761026154000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"Npnm\"},{\"hash\":\"80b328242e509e747ca573964460bf74e91134db\",\"time\":1761026127000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"use pnpm\"},{\"hash\":\"96868c69d70914b247c6ffb44834629a6db43ed9\",\"time\":1761022226000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
