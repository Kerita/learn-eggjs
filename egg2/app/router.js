/**
 * Created by Kerita on 2017/8/7.
 */

module.exports = app => {
  app.get('/', app.controller.home.index)
  app.get('/news', app.controller.news.list)
}