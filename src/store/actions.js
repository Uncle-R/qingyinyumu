// 异步处理

/*
		Action 类似于 mutation，不同在于：
			Action 提交的是 mutation，而不是直接变更状态。
			Action 可以包含任意异步操作。
	*/
export default {
	// context 承接上下文
	changeNum(context,SearchInfo) {
		
			context.commit("changeNum",SearchInfo); // 触发了mutations
	
	},
	getInfo_title(context,GetInfo){
		context.commit("getInfo_title",GetInfo)
	},
	getInfo_author(context,getInfo_author){
		context.commit("getInfo_author",getInfo_author)
	},
	getInfo_Images(context,getInfo_Images){
		context.commit("getInfo_Images",getInfo_Images)
	}
	
	
	
}