import  { FC } from "react";

type Props = {
    color: string;
    fontSize: string;
};

// FC=Functional Component
export const Text: FC<Props> = (props) => {
    const { color, fontSize} = props;
    return <p style={{color, fontSize}}>テキストです</p>;
};