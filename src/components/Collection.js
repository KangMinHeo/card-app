import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Items, Menu } from './styeldComp';
import Card from './Card';
import Detail from './Detail';
import { contents } from '../utilities/contents';
import HistoryPage from './History';
import './Collection.css';
import ScrollToTop from './ScrollTop';

/*
    Route 하나 당 경로 한개
    스위치 안에 Route가 여러개가 있을 것이고, 
    홈 / 상세 페이지s 그룹을 나눠야한다.

    홈을 제외하면 여러개일수도 있기에 그 수에 맞춰서 상세 페이지를 제공해야 한다.
    그래서 map을 사용한다.
    홈은 따로 만들어서 구분을 지어준다.

    홈일때는 카드 여러개를 보여주고,
    세부 정보를 본다면 디테일을 보여주게 된다.
*/

const Collection = props => {
    return <div className="backImg">
        <ScrollToTop />
        <Menu>
            <h2 style={{ color: "white" }}>국내 야구 팀 정보</h2>
        </Menu>
        <div style={{ textAlign: 'center', marginTop: "20px", marginBottom: "30px" }}>
            <Link to="/" style={{ width: 100 }} />
            <Route path="/" component={HistoryPage} />
        </div>
        <Switch>
            {contents.map((content, idx) => {
                return <Route path={content.path} key={idx}>
                    <Detail content={content.detail} />
                </Route>
            })}
            <Route path="/">
                <Items>
                    {contents.map((content, idx) => {
                        return <Card content={content} key={idx} />
                    })}
                </Items>
            </Route>
        </Switch>
    </div>
}

export default Collection