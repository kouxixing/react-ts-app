/**
 * 基础类型
 * author: kxx
 * description: to know more knowledge of typescript
 */
export const isDone : boolean = true;
export const isNumber : number = 10;
export const isString : string = '测试字符串';

// 数组
export const isNumberArray : number[] = [1]; // 普通数组
export const isStringArray : string[] = ['1'];  // 字符串数组
//TODO 需要了解字符串或者复杂数组的声明方式
export const x : string[] | number[] = ['1', '2']; // 纯数字数组或者字符串数组
export const defaultArray : any[] = [1, '1']; // 混合数组

// 枚举
enum Object {prop1, prop2, prop3};
export const p1 : Object = Object.prop1;

// void
export const voidFunction = ():void => {
    console.log("this is a void function");
}

// never
export const errorFunction = (message: string) => {
    throw new Error(message);
}

// 类型断言  -- 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构
let someValue : any = 'this is a string';
export const strLength : number = (someValue as string).length;



export default {

}