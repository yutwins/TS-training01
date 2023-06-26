
/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

//array 配列　どっちでもいい
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple　配列の中身の型を指定できる
let tuple: [number, string] = [0, "A"];

// any　なんでもいい なるべく使わない
let any1: any = false;

// void　何も返さない
const funcA = (): void => {
    const test = "TEST";
}

// null　何もない
let null1: null = null;

// undefined　未定義
let undefined1: undefined = undefined;

// object　オブジェクト型
let obj1: object = {};
let obj2: { id: number, name: string } = { id: 0, name: "AAA" };