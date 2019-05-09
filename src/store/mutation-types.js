// 如果程序很小，不建议使用mutation-types，
// 它的作用是让代码合作者可以清晰对整个app包含的mutation一目了然

export const loginUserName='loginUserName'; //当前登录的用户
export const setTimer='setTimer'; //记录当前页面document.title启动的定时器，方便打开其他页面是关掉
export const setBackRoutePath='setBackRoutePath'; //记住要返回的上一个页面的路径