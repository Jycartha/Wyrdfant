import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/category/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/test/\",\"title\":\"Category test\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category test\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"test\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
