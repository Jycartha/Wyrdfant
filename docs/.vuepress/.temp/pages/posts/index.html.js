import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"Skibidi\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Bap mmm dada\",\"slug\":\"bap-mmm-dada\",\"link\":\"#bap-mmm-dada\",\"children\":[{\"level\":3,\"title\":\"dos\",\"slug\":\"dos\",\"link\":\"#dos\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"posts/README.md\",\"excerpt\":\"\\n\\n<h2>Bap mmm dada</h2>\\n<p>teehee</p>\\n<h3>dos</h3>\\n\"}")
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
