function filter(e, target) {
    if (e.classname != null && e.classname.includes("user_name") && e.innerText == target) {
        return true;
    }
    var replies;
	if (e.children == null || e.children.length == 0)
		return false;
    
    var i = 0;
    allnames = e.querySelectorAll(".user_name");
    for (i=0;i<allnames.length;i++) {
        if (allnames[i].innerText == target)
            return true;
    }
    return false;
}


function filterAll(target) { 
    var arr = document.querySelectorAll("div.clarifying_discussion.clearFix[data-pats=followup]");
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != null && !filter(arr[i], target))
            arr[i].style.display="none";
    }
}

// function resetAll() {
//     arr = document.querySelectorAll("div.clarifying_discussion.clearFix[data-pats=followup]");
//     for (i = 0; i < arr.length; i++) {
//         arr[i].style.display="block";
//     }
// }

// filterAll("Eric");