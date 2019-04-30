// 由于mutations是处理同步任务，所以产生了actions
// 与mutations不同的是：
//   action提交的是mutation，而不是直接变更状态，
//      也就是说action在异步操作中调用mutation达到变更状态的动作