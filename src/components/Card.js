import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Image } from './styeldComp';

const Card = props =>{
    const { content } = props
    return <Item>
        <Link to={content.path}>
            <Image imagePath={content.imagePath}></Image>
            {/*<Temp color={content.imagePath}></Temp>*/}
        </Link>
        <h1 style={{textAlign: 'center', fontSize: 18}}>{content.title}</h1>
    </Item>
}

export default Card