// 主页页面的页面路径
// 关联功能：打开的页面只有一个的时候右上角自动显示返回首页按钮，下面这个数组是排除显示返回首页的页面。
// 主页使用场景：小程序分享出去的页面，用户点击开是分享页面，很多情况下是没有返回首页按钮的
export const mainPagePath = [
	'pages/index/index',
	'pages/me/me',
	'pages/feeds/feeds',
	'pages/store/store'
]

//返回首页的地址
export const homePath = '/pages/index/index'