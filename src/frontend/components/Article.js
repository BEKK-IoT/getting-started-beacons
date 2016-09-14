const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/MarkdownStore');
const React = require('react');

function getState(id) {
    return {
        article: AppStore.getArticle(id)
    };
}

const App = React.createClass({
    getInitialState() {
        return getState(this.props.article);
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
        AppActions.getArticle(this.props.article);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.article}}></div>
        )
    },
    _onChange() {
        this.setState(getState(this.props.article));
    }
});

module.exports = App;