import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/writings/index.html.vue"
const data = JSON.parse("{\"path\":\"/writings/\",\"title\":\"Placeholder\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1761083352000,\"contributors\":[{\"name\":\"Jycartha\",\"username\":\"Jycartha\",\"email\":\"jycartha@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Jycartha\"}],\"changelog\":[{\"hash\":\"00d3d159e7c75c7a4324f3f8916a4c0fd8321274\",\"time\":1761083352000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"Lots of updates\"}]},\"filePathRelative\":\"writings/README.md\",\"excerpt\":\"\\n<p>This is where the list of recent chapters and writings will go :)</p>\\n\"}")
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
