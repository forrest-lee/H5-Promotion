'use strict';

var ReadPacket = React.createClass({
    displayName: 'ReadPacket',

    getInitialState: function getInitialState() {
        return {
            animation: false,
            status: 0 // 0: 等待拆开 1: 拆开后
        };
    },
    stopAnimation: function stopAnimation() {
        this.setState({ animation: false });
    },
    showResult: function showResult() {
        this.setState({ status: 1 });
    },
    openRedPacket: function openRedPacket() {
        this.setState({ animation: true });
        setTimeout(this.stopAnimation.bind(this), 3000);
        setTimeout(this.showResult.bind(this), 4000);
    },
    render: function render() {
        var bonus = 88.88;

        if (this.state.status == 0) {
            return React.createElement(
                'div',
                { className: 'redpack-container', id: 'redpack-container' },
                React.createElement(
                    'div',
                    { className: 'redpack' },
                    React.createElement(
                        'div',
                        { className: 'topcontent' },
                        React.createElement(
                            'div',
                            { className: 'redpack-avatar' },
                            React.createElement('img', { src: './assets/avatar.png', alt: '头像', width: '80', height: '80' }),
                            React.createElement(
                                'span',
                                { id: 'close' },
                                '+'
                            )
                        ),
                        React.createElement(
                            'h2',
                            { className: 'white-text' },
                            '老罗'
                        ),
                        React.createElement(
                            'span',
                            { className: 'redpack-text' },
                            '给你发了一个红包'
                        ),
                        React.createElement(
                            'div',
                            { className: 'redpack-description white-text' },
                            '恭喜发财 大吉大利'
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'redpack-open', className: this.state.animation ? 'rotate' : '',
                            onClick: this.openRedPacket.bind(this)
                        },
                        React.createElement(
                            'span',
                            null,
                            '拆红包'
                        )
                    )
                )
            );
        } else if (bonus == 0) {
            // 谢谢参与
            return React.createElement(
                'div',
                { className: 'redpack-container', id: 'redpack-container' },
                React.createElement(
                    'div',
                    { className: 'redpack' },
                    React.createElement(
                        'div',
                        { className: 'topcontent-open' },
                        React.createElement(
                            'div',
                            { className: 'redpack-avatar' },
                            React.createElement('span', { id: 'close' })
                        ),
                        React.createElement(
                            'h1',
                            { className: 'white-text', style: { marginTop: 180 } },
                            ' 谢谢参与 '
                        ),
                        React.createElement(
                            'span',
                            { className: 'redpack-text' },
                            '多多参与的奖励的机会更多哦'
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'a',
                                { className: 'white-text', style: { textDecoration: 'underline' } },
                                '去我的账户查看积分'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'redpack-opened' },
                        React.createElement(
                            'div',
                            { className: 'redpack-avatar' },
                            React.createElement('img', { src: './assets/avatar.png', alt: '头像', width: '80', height: '80' })
                        )
                    )
                )
            );
        } else {
            // 显示奖励金额
            return React.createElement(
                'div',
                { className: 'redpack-container', id: 'redpack-container' },
                React.createElement(
                    'div',
                    { className: 'redpack' },
                    React.createElement(
                        'div',
                        { className: 'topcontent-open' },
                        React.createElement(
                            'div',
                            { className: 'redpack-avatar' },
                            React.createElement('span', { id: 'close' })
                        ),
                        React.createElement(
                            'h1',
                            { className: 'white-text', style: { marginTop: 180 } },
                            ' ',
                            bonus.toFixed(2),
                            ' '
                        ),
                        React.createElement(
                            'span',
                            { className: 'redpack-text' },
                            '奖励积分已经存入您的账户'
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'a',
                                { className: 'white-text', style: { textDecoration: 'underline' } },
                                '去我的账户查看积分'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'redpack-opened' },
                        React.createElement(
                            'div',
                            { className: 'redpack-avatar' },
                            React.createElement('img', { src: './assets/avatar.png', alt: '头像', width: '80', height: '80' })
                        )
                    )
                )
            );
        }
    }
});