import comp from "/home/devinr/Documents/Wyrdfant/docs/.vuepress/.temp/pages/encyclopedia/index.html.vue"
const data = JSON.parse("{\"path\":\"/encyclopedia/\",\"title\":\"The Aliffrüme Archive\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1761083352000,\"contributors\":[{\"name\":\"Jycartha\",\"username\":\"Jycartha\",\"email\":\"jycartha@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Jycartha\"}],\"changelog\":[{\"hash\":\"00d3d159e7c75c7a4324f3f8916a4c0fd8321274\",\"time\":1761083352000,\"email\":\"jycartha@gmail.com\",\"author\":\"Jycartha\",\"message\":\"Lots of updates\"}]},\"filePathRelative\":\"encyclopedia/README.md\",\"excerpt\":\"\\n<p><img src=\\\"/images/Aliffrume.png\\\" alt=\\\"Aliffrüme Map Banner\\\"></p>\\n<hr>\\n<p>This repository is used as a master trove for all files related to the Aliffrüme project, including:</p>\\n<ul>\\n<li>Character Dossiers</li>\\n<li>Design Documents</li>\\n<li>Narrative Outlines</li>\\n<li>Encyclopedia Entries</li>\\n</ul>\"}")
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
