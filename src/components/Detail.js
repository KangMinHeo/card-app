import React from 'react';
import './detail.css';

const Detail = props => {
    // 추후 본인 주제에 맞게 구조분해해서 사용해야 함.
    // props.content 안에 있음 detail값이
    console.log(props)
    return <>
        <iframe src={props.content} height="800px" width="100%" title="kboteampages"></iframe>
    </>
}
export default Detail