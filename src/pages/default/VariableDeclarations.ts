/**
 * 变量声明
 * author: kxx
 * description: why to use let of const instance of var
 */

// 1.多次声明同一个变量并不会报错,这些问题可能在代码审查时漏掉，引发无穷的麻烦
// 2.作用域的问题引发代码执行问题


// let or const
/* 所有变量除了你计划去修改的都应该使用const。 基本原则就是如果一个变量不需要对它写入，
那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值。
使用 const也可以让我们更容易的推测数据的流动。*/

/* 解构 */
let array:number[] = [1, 2, 3]
let [one, two, three] = array; 
console.log(one, two, three);

// 语法创建剩余变量
let [first, ...rest] = [1, 2, 3, 4];
console.log(first, rest);


let o = {
    oa: "foo",
    ob: 12,
    oc: "bar"
};
let { oa: prop1, ob: prop2 } = o; // 属性重命名
console.log(prop1, prop2);

let newObject = {
    na: 'cs',
    nb: 10,
    nc: 1
}
let {na, ...res} = newObject;
console.log(na, res);

// 默认值可以让你在属性为 undefined 时使用缺省值：
export const keepWholeObject = (wholeObject: { a: string, b?: number }) => {
    let { a, b = 1001 } = wholeObject;
    console.log(a, b);
}


/* 展开 */
// 数组展开
let arr1 = [1, 2];
let arr2 = [3, 4];
export let arrTotal = [0, ...arr1, ...arr2, 5];

// 对象展开---对象展开会丢失其方法
let defaultObject = {
    cs1: '1',
    cs2: 1,
    cs3: '12'
}
export let search = {...defaultObject, cs1: '222',};


export default {}