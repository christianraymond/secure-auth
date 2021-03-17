import React, { Component } from 'react';
import classnames from 'classnames'

export default class FlashMessage extends Component {
    render() {
        const { id, type, text } = this.props.message
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}>
                { text}
            </div>
        )
    }
}
