import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/posts/article8.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article8.html\",\"title\":\"Article 8\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-08T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag C\",\"tag D\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1761026154000,\"contributors\":[{\"name\":\"Jycartha\",\"username\":\"Jycartha\",\"email\":\"jycartha@gmail.com\",\"commits\":3,\"url\":\"https://github.com/Jycartha\"}],\"changelog\":[{\"hash\":\"85b8085641e05396eda7a8d14c74a6dc36e72213\",\"time\":1761026154000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"Npnm\"},{\"hash\":\"80b328242e509e747ca573964460bf74e91134db\",\"time\":1761026127000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"use pnpm\"},{\"hash\":\"96868c69d70914b247c6ffb44834629a6db43ed9\",\"time\":1761022226000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"init\"}]},\"filePathRelative\":\"posts/article8.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
