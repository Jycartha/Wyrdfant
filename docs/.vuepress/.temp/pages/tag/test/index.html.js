import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/tag/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/test/\",\"title\":\"Tag test\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag test\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"test\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
