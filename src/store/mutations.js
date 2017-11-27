	// 同步处理
	export default {
		changeNum(state,SearchInfo) {
			state.num = SearchInfo.f.split('|')[0]
			
		},
		getInfo_title(state,GetInfo){
			state.Music_Info=GetInfo
		},
		getInfo_author(state,getInfo_author){
			state.getInfo_author=getInfo_author
		},
		getInfo_Images(state,getInfo_Images){
			state.getInfo_Images=getInfo_Images.f.split('|')[4]
		},
		
		
	}