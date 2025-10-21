import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/posts/testPost.html.vue"
const data = JSON.parse("{\"path\":\"/posts/testPost.html\",\"title\":\"Test\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-10-21T00:00:00.000Z\",\"category\":[\"test\"],\"tag\":[\"tes\"],\"excerpt\":\"This should show instead!\"},\"headers\":[],\"git\":{\"updatedTime\":1761083352000,\"contributors\":[{\"name\":\"Jycartha\",\"username\":\"Jycartha\",\"email\":\"jycartha@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Jycartha\"}],\"changelog\":[{\"hash\":\"00d3d159e7c75c7a4324f3f8916a4c0fd8321274\",\"time\":1761083352000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"Lots of updates\"}]},\"filePathRelative\":\"posts/testPost.md\"}")
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
