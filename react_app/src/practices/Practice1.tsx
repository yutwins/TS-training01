export const Practice1 = () => {
    const calcTotalFee = (num: number) => {
        const total = num * 1.1;
        return console.log(total);
    }
    const onClickPractice1 = () => {
        calcTotalFee(1000);
    }
    return (
        <div>
            <p>練習問題:引数の型指定</p>
            <button onClick={onClickPractice1}>練習問題1を実行</button>
        </div>
    )
}