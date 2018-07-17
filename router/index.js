import Vue from 'vue';
import Router from 'vue-router';
import Dialog from '../samples/Dialog/dialog';
import Dialogtagdirective from '../samples/Dialog/tag-directive';
import DialogDynamic from '../samples/Dialog/dynamic-rendering';
import TemplateBinding from '../samples/Dialog/template-binding';
import TemplateSupport from '../samples/Dialog/dialog-template';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Dialog/:name',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/tag-directive/:name',
      name: 'tag-directive',
      component: Dialogtagdirective
    },
    {
      path: '/dynamic-rendering/:name',
      name: 'dynamic-rendering',
      component: DialogDynamic
    },
    {
      path: '/template-binding/:name',
      name: 'template-binding',
      component: TemplateBinding
    },
    {
      path: '/dialog-template/:name',
      name: 'dialog-template',
      component: TemplateSupport
    }
  ]
})