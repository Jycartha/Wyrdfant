import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/chapters/index.html.vue"
const data = JSON.parse("{\"path\":\"/chapters/\",\"title\":\"Placeholder\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"chapters/README.md\",\"excerpt\":\"\\n<p>This is where the list of recent chapters and writings will go :)</p>\\n\"}")
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
