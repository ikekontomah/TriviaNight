String.prototype.hashCode=function(){
	var hash =0,ele , characterToUse,charLen ;
	if(this.length===0){
		return hash ;
	}
	for (ele=0,charLen=this.length;ele<charLen;ele++){
		characterToUse =this.charCodeAt(ele) ;
		hash=((hash<<10)-hash)+characterToUse ;
	}
	return hash ;
};