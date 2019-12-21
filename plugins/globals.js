import Vue from 'vue';
import vueMarkdown from 'vue-markdown';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import DateFilter from '@/common/date.filter';

Vue.use(Element, { locale });
Vue.component('vue-markdown', vueMarkdown);
Vue.filter('date', DateFilter);
