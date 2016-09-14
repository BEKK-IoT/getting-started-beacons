const assign = require('object-assign');
const AppConstants = require('../constants/AppConstants');
const AppDispatcher = require('../dispatchers/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const MarkdownResource = require('../resources/MarkdownResource');

const CHANGE_EVENT = 'CHANGE';

let _article = {};

function getArticle(id) {
    MarkdownResource.getArticle(id)
        .then(articleFromBackend(id))
        .catch(errorOnArticle);
}

function articleFromBackend(id) {
    return (res) => {
        _article[id] = res;
        AppStore.emitChange();
    }
}

function errorOnArticle(err) {
    console.error('No article', err);
}

const AppStore = assign(new EventEmitter(), {
    getArticle(id) {
        return _article[id];
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherIndex: AppDispatcher.register(payload => {
        let action = payload.action;
        if (action.actionType === AppConstants.GET_ARTICLE) {
            getArticle(action.id);
        }
    })
});

module.exports = AppStore;