/**
 * Created by Kerita on 2017/8/7.
 */
module.exports = app => {
  class NewsController extends app.Controller {
    * list () {
      console.log('env -',this.ctx.app.config.env)
      const ctx = this.ctx
      const page = ctx.query.page || 1
      const newsList = yield ctx.service.news.list(page)
      yield this.ctx.render('news/list.tpl', {list: newsList});
    }
  }
  return NewsController;
};








