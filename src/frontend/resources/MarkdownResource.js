import Q from 'q';
import request from 'superagent';
import Remarkable from 'remarkable';
import hljs from 'highlight.js';

const md = new Remarkable({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }
 
    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}
 
    return ''; // use external default escaping 
  }
});

function handleResponse(deferred) {
    return (err, res) => err ? deferred.reject(err) : deferred.resolve(md.render(res.text));
}

module.exports = {
    getArticle(id) {
        const deferred = Q.defer();
        request
            .get(`dist/${id}.md`)
            .end(handleResponse(deferred));
        return deferred.promise;
    }
};

