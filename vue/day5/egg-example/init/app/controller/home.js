'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async home() {
    const { ctx } = this;
    ctx.body = 'Hello world';
  }

  async abc() {
    const { ctx } = this;
    ctx.body = 'yao';
  }
}

module.exports = HomeController;
