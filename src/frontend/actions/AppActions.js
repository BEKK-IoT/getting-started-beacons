const AppDispatcher = require('../dispatchers/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
    getArticle(id) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.GET_ARTICLE, id
        });
    }
};

module.exports = AppActions;