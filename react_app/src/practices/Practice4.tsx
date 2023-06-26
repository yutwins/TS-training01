export const Practice4 = () => {
    const calcTotalFee = (num) => {
        const total = num * 1.1;
        return console.log(total);
    }
    const onClickPractice1 = () => {
        calcTotalFee(1000);
    }
    return (
        <div>
            <p>練習問題:設定ファイルを触ってみる</p>
            <button onClick={onClickPractice1}>練習問題4を実行</button>
        </div>
    )
}