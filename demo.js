function wo(arg){
	arg.onmousedown=function(e){
		var ev=e||window.event
		var wid=ev.clientX-arg.offsetLeft
		var hei=ev.clientY-arg.offsetTop
		console.log(wid)
			document.onmousemove=function(e){
				var ec=e||window.event
				console.log(ec.clientX,ec.clientY)
				arg.style.top=ec.clientY-hei+"px"
				arg.style.left=ec.clientX-wid+"px"
			}
	}
	arg.onmouseup=function(e){
		console.log("aa")
			document.onmousemove=null
		}

}
