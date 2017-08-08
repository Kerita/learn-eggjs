/**
 * Created by Kerita on 2017/8/7.
 */
exports.keys = 'test';


exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

exports.middleware = ['gzip']

exports.gzip = {
  threshold: 1024
}