// @ts-check
// vscode会在后台通过ts对我们的js文件进行检验

// 有点忘了defineProperty的api，右键转到定义查看其参数类型
// 在js中，完全无视readonly属性，不会报任何问题，出了这个问题难以定位这个问题
// 在ts中，会在ide中直接报错，提供有精确的参数提示
// 与一般的js ide提示的不同在于，这是精确提示，提示的参数名都是合法的，而非模糊匹配已写过的字符串
Object.defineProperty(window, 'helloTypeScript', {
    value: 'v1.0.0',
    readonly: false
});

// 在没有告诉ts任何类型信息的时候，就能通过类型推断找到两处错误
function shipWeight() {
    return parseInt(document.getElementById('weight').textContent);
}
/**
 * 通过jsDoc为变量添加类型
 * @param {(string | string[])} emailAddr 
 */
function sendUpdates(emailAddr){
    function sendEmail(addr){
        if(shipWeight > 100) {
            console.log("WARNING: Oversize package");
        }
    }

    if(emailAddr.length) {
        // 可以推断一个变量在程序的特定位置的类型
        emailAddr.forEach((item, index) => {
            sendEmail(item.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}