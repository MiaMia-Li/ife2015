// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return(arr instanceof Array);
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return(fn instanceof Function);
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var result,oClass=isClass(src);
    if(oClass=="Object"){
    	result={};
    }else if (oClass==="Array") {
    	result=[];
    }else{
    	return src;
    }
    for(key in src){
    	var copy=src[key];
    	if(isClass(copy)=="Object"){
    		result[key]=arguments.callee(copy);
    	}else if(isClass(copy)=="Array"){
    		result[key]=arguments.callee(copy);
    	}else{
    		result[key]=src[key];
    	}
    }
    return result;
}
function isClass(o){
	if(o===null) return "Null";
	if(o===undefined) return "Undefined";
	return Object.prototype.toString.call(o).slice(8,-1);
}

// 测试用例：ar
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var temp=[];
    for(var i=0;i<arr.length;i++){
    	var j=0;
    	while(arr[i]!=arr[j]){
    		if(j<i){
    			j++;
    		}
    	}if(j=i){
    		temp.push(arr[j]);
    	}
    }
    return temp;
}  

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function trim(str){
    var regex=/^\s*/;
    var regex2=/\s*$/;
    return str.replace(regex,'').replace(regex2,'');
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i= 0;i<arr.length;i++){
        fn(i,arr[i]);
    }
}
function fn(idx,item){
    item=idx+1;
}


// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var j=0;
    for(var i in obj){
        j++;
    }
    return j;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
    return (/\w+@\w+.com/).test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    return (/\d{11}/).test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function hasClass(element,sClass){
	return element.className.match(new RegExp("(^|\s)"+sClass+"(\s|$)"));
}
function addClass(element, newClassName) {
	if(!hasClass(element,newClassName)){
        element.className+=""+newClassName;
	} 

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    if(hasClass(element,oldClassName)){
    	var reg=new RegExp("(^|\s)"+oldClassName+"(\s|$)");
    	element.className=element.className.replace(reg,"");
    }
}
// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode==siblingNode.parentNode
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var position={};
    position.x=element.getBoundingClientRect().left+Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
    position.y=element.getBoundingClientRect().top+Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    }
}

// 实现一个简单的Query
function $$(selector,root){
    var element=[],allChildren;
    root=root|document;
    switch(selector.charAt(0)){
        case"#":
            element.push(root.getElementById(selector.substring(1)));
            break;
        case".":
            if(root.getElementsByClassName){
                element.push.apply(elements,root.getElementsByClassName(selector.substring(1)));
            }else{
                var classReg=new RegExp("\\b"+selector.substring(1)+"\\b");
                allChildren=root.getElementsByTagName("*");
                for(var i=0;i<allChildren.length;i++){
                    if(classReg.test(allChildren[i].className)){
                        elements.push(allChildren[i]);
                    }
                }
            }
            break;
        case"[":
        if(selector.indexOf("=")==-1){
            allChildren=root.getElementsByTagName("*");
            for(var i=0;i<allChildren.length;i++){
                if(allChildren[i].getAttribute(selector.slice(1,-1))!=null){
                    elements.push(allChildren[i]);
                }
            }
        }else{
            var index=selector.indexOf("=");
            allChildren=root.getElementsByTagName("*");
            for(var i=0;i<allChildren.length;i++){
                if(allChildren[i].getAttribute(selector.slice(1,index))==selector.slice(index+1,-1)){
                    elements.push(allChildren[i]);
                }
            }
        }
    }
    return elements;
}
function Q(selector){
    if(selector.indexOf("")!=-1){
        var selectorArr=selector.split(/\s+/);
        var arr=$$(selectorArr[0]);
        for(var i=0;i<arr.length;i++){
            if($$(selectorArr[1],$$(selectorArr[0])[i])[0]){
                return $$(selectorArr[1],$$(selectorArr[0])[i])[0];
            }
        }
    }else{
        return $$(selector)[0];
    }
}

// 可以通过id获取DOM对象，通过#标示，例如
//$("#adom");  返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
//$("a");  返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
//$(".classa"); 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
//$("[data-log]"); 返回第一个包含属性data-log的对象

//$("[data-time=2015]"); 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
//$("#adom .classa"); 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象
