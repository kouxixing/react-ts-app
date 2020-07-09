/**
 * 接口
 * author: kxx
 * description: the port 
 */

interface params {
    name?: string, // 可选参数
    id: string,
    sum: number
}
 
/**
 * 测试请求接口
 * @param params 封装请求参数
 */
export const testMyPort = (params: params) => {
    console.log(params)
}

/**
 * 只读属性设置
 */
interface Point {
    readonly x: number;
    readonly y: number;
    [propName: string]: any;
}

let p1:Point = { x: 10, y: 20, color: '1111', colour: '1111' };

export default {}