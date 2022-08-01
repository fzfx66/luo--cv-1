//substring取0→n
//word = word.replace(/\n/g,'<br>')          //正则表达式，将所有\n都转换
//用setinterval取代settimeout，持续执行.但是老手用递归的settimeout,但是老手用递归的settimeout
//#div1::after{}    css创建伪元素，相当于<span>,只可创建一层。

let html = document.querySelector('#html');  //qS通过css选择器找到这个元素
let style = document.querySelector('#style');

let n = 0;
let word_add = ''
let word = `
/* 你好，我叫罗贤康，
* 这里展现一下我的前端功底
* 现在创建一个div。
**/

#div1{
    width:200px;
    height:200px; 
}

/* 道生一，一生二
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 抱阴负阳，阴阳相生
**/
#div1::before{
            width:100px;
            height:100px;
            top:0;
            left:50%;
            transform: translateX(-50%);
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, 
            rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
        }
#div1::after{ 
            width:100px;
            height:100px;
            bottom:0;
            left:50%;
            transform: translateX(-50%);
            border-radius: 50%;
            background: black;
            background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
        }
`;

let step = () => {
    setTimeout(() => {
        //是回车不照搬，不是回车照搬
        if (word[n] === '\n') {
            word_add += '<br>'
        } else if (word[n] === '') {
            word_add += '&nbsp;'
        } else {
            word_add += word[n]
        }
        html.innerHTML = word_add
        style.innerHTML = word.substring(0, n)
        /*滚动到底部*/
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        n += 1
        if (n < word.length) {
            step()
        }
    }, 10)
}

step()

