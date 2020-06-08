var fs = require('fs');
var readline = require('readline');

/*
* 按行读取文件内容
* 返回：字符串数组
* 参数：fReadName:文件名路径
*      callback:回调函数
* */
function readFileToArr(fReadName,callback){
    var fRead = fs.createReadStream(fReadName);
    var objReadline = readline.createInterface({
        input:fRead
    });
    var arr = new Array();
    objReadline.on('line',function (line) {
        arr.push(line);
        //console.log('line:'+ line);
    });
    objReadline.on('close',function () {
       // console.log(arr);
        callback(arr);
    });
}





readFileToArr('./docs/directory/by-tag/two-pointers.md', function (data) {
  // console.log(data)
  handleData(data)
  console.log(obj)
})


let obj = [];

function handleData(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim()
    if(arr[i].length === 0) continue;
    if(/^\- \[/.test(arr[i])) {
      let tmp = arr[i].split('(');
      let res = [];
      res[0] = tmp[0].slice(3);
      res[1] = tmp[2].slice(6, tmp[2].length-4);  
      obj.push({
        title: res[0],
        path: res[1],
        sidebarDepth: 0
      })  
    }
  }
}


module.exports = {
  readFileToArr
}
