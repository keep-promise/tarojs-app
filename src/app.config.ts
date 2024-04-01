export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subpackages: [
    {
      root: "subPage",
      pages: [
        "pkgA/cat/index",
        "pkgA/dog/index"
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
