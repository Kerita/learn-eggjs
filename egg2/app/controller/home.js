/**
 * Created by Kerita on 2017/8/7.
 */

module.exports = app => {
  class HomeController extends app.Controller {
    * index () {
      this.ctx.body = 'hello world'
    }
  }
  return HomeController
};