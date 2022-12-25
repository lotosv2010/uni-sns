const http = uni.$u.http
// 获取广告轮播图
export const getAdvert = data => http.get('/advertisingspace/advertising', data)
// 获取动态列表
export const getFeeds = params => http.get('/feeds', params)
// 获取指定 id 动态详情
export const getFeedInfo = params => http.get('/feeds/' + params.id)
// 获取指定 ID 动态 评论详情
export const getFeedComments = params => http.get('/feeds/' + params.id + '/comments')
// 删除指定 ID 的动态
export const deleteFeed = params => http.delete('/feeds/' + params.id + '/currency')
// 点赞动态
export const likeThisFeed = params => http.post('/feeds/' + params.id + '/like')
// 取消点赞动态
export const unlikeThisFeed = params => http.delete('/feeds/' + params.id + '/unlike')
// 发布一条动态
export const postOneFeed = params => http.post('/feeds', params)
// 评论一条动态
export const commentOneFeed = params => http.post('/feeds/' + params.id + '/comments', {
	body: params.body
})

// 获取资讯列表信息
export const getNews = params => http.get('/news', params)
// 获取指定 id 资讯详情
export const getNewInfo = params => http.get('/news/' + params.id)
// 获取指定 ID 资讯 评论详情
export const getNewComments = params => http.get('/news/' + params.id + '/comments')
// 点赞资
export const likeThisNew = params => http.post('/news/' + params.id + '/likes')
// 取消点赞资讯
export const unlikeThisNew = params => http.delete('/news/' + params.id + '/likes')
// 评论一条资讯
export const commentOneInfo = params => http.post('/news/' + params.id + '/comments', {
	body: params.body
})

// 用户相关 API
// 查找用户信息
export const findUser = params => http.get('/users/' + params.name)
// 获取注册验证码
export const getRegisterCode = params => http.post('/verifycodes/register', params)
// 获取手机号码登录验证码
export const getLoginCode = params => http.post('/verifycodes', params)
// 注册
export const userRegister = params => http.post('/users', params)
// 登陆
export const userLogin = params => http.post('/auth/login', params)
// 退出
export const userLogout = () => http.post('/auth/logout')
// 获取当前登录用户相关通知消息
export const getUserMsg = () => http.get('/user/counts')

// 文件上传操作
export const uploadFile = async file => {
	let rfile = file
	// #ifdef MP-WEIXIN
	rfile = uni.getFileSystemManager().readFileSync(file.path)
	// #endif

	// 将文件写入后台系统系统
	let ufile = await uni.uploadFile({
		url: http.config.baseURL + '/files',
		header: {
			Authorization: "Bearer " + uni.getStorageSync("token"),
		},
		name: 'file',
		file: rfile,
		filePath: file.path
	});
	return JSON.parse(ufile[1].data)
}
