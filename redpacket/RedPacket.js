var ReadPacket = React.createClass({
    getInitialState: function() {
        return {
            animation: false,
            status: 0  // 0: 等待拆开 1: 拆开后
        };
    },
    stopAnimation: function() {
        this.setState({animation: false});
    },
    showResult: function() {
        this.setState({status: 1});
    },
    openRedPacket: function() {
        this.setState({animation: true});
        setTimeout(this.stopAnimation.bind(this), 3000);
        setTimeout(this.showResult.bind(this), 4000);
    },
    render: function() {
        var bonus = 88.88;

        if(this.state.status == 0) {
            return (
                <div className='redpack-container' id='redpack-container'>
                    <div className='redpack'>
                        <div className='topcontent'>
                            <div className='redpack-avatar'>
                                <img src='./assets/avatar.png' alt='头像' width='80' height='80'/>
                                <span id='close'>+</span>
                            </div>
                            <h2 className='white-text'>老罗</h2>
                            <span className='redpack-text'>给你发了一个红包</span>
                            <div className='redpack-description white-text'>恭喜发财 大吉大利</div>
                        </div>

                        <div id='redpack-open' className={this.state.animation ? 'rotate' : ''}
                             onClick={this.openRedPacket.bind(this)}
                        >
                            <span>拆红包</span>
                        </div>
                    </div>
                </div>
            );
        } else if (bonus == 0) {
            // 谢谢参与
            return (
                <div className='redpack-container' id='redpack-container'>
                    <div className='redpack'>
                        <div className='topcontent-open'>
                            <div className='redpack-avatar'>
                                <span id='close'></span>
                            </div>
                            <h1 className='white-text' style={{marginTop: 180}}> 谢谢参与 </h1>
                            <span className='redpack-text'>多多参与的奖励的机会更多哦</span>
                            <div>
                                <a className='white-text' style={{textDecoration: 'underline'}}>
                                    去我的账户查看积分
                                </a>
                            </div>
                        </div>

                        <div id='redpack-opened'>
                            <div className='redpack-avatar'>
                                <img src='./assets/avatar.png' alt='头像' width='80' height='80'/>
                            </div>
                        </div>

                    </div>
                </div>
            );
        } else {
            // 显示奖励金额
            return (
                <div className='redpack-container' id='redpack-container'>
                    <div className='redpack'>
                        <div className='topcontent-open'>
                            <div className='redpack-avatar'>
                                <span id='close'></span>
                            </div>
                            <h1 className='white-text' style={{marginTop: 180}}> {bonus.toFixed(2)} </h1>
                            <span className='redpack-text'>奖励积分已经存入您的账户</span>
                            <div>
                                <a className='white-text' style={{textDecoration: 'underline'}}>
                                    去我的账户查看积分
                                </a>
                            </div>
                        </div>

                        <div id='redpack-opened'>
                            <div className='redpack-avatar'>
                                <img src='./assets/avatar.png' alt='头像' width='80' height='80'/>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }
    }
});