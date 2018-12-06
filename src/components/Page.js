import React from 'react';

export function NotFound(){
    return <div className="error" style={{
        fontFamily: '微软雅黑',
        color:' #333',
        fontSize: '16px',
        padding: '24px 48px'
    }}>
    <p className="face">:(</p>
    <h1>模板不存在[./tpl/Wap/default/Search/Shop.php]</h1>
    <div className="content">
        <div className="info">
            <div className="title">
                <h3>错误位置</h3>
            </div>
            <div className="text">
                <p>FILE: /mnt/wwwroot/www.iyemao.cc/core/Lib/Core/View.class.php 　LINE: 129</p>
            </div>
        </div>
    </div>
    </div>
}

// export function HelpPage(){
//     return <div>
        
//         </div>
// }