import Vue from 'vue'

// 共同佈局
import HeadNav from '../components/HeadNav'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

// 前台管理
import Index from '../views/Index.vue'
import About from '../views/About.vue'

import News from '../views/news/News.vue'
import NewsLayout from '../views/news/NewsLayout.vue'
import NewsInfo from '../views/news/NewsInfo.vue'

import Contact from '../views/Contact.vue'

import Properties from '../views/properties/Properties.vue'
import PropertiesLayout from '../views/properties/PropertiesLayout.vue'
import PropertiesInfo from '../views/properties/PropertiesInfo.vue'

import Staff from '../views/Staff.vue'
import Privacy from '../views/Privacy.vue'

// 後台管理
import Backstage from '../views/Backstage.vue'
import BackendHome from '../views/create/BackendHome.vue'
import Emp from '../views/create/Emp.vue'
import Role from '../views/create/Role.vue'
import CaseList from '../views/create/CaseList.vue'
import NewsList from '../views/create/NewsList.vue'
import BulletinList from '../views/create/BulletinList.vue'
import BulletinInfo from '../views/create/BulletinInfo.vue'

import NotFoundComponent from '../views/NotFoundComponent.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFoundComponent
  },
  {
    path: '/privacy',
    components: {
      header: HeadNav,
      main: Privacy,
      footer: Footer
    },
    meta: {
      title: '隱私權條款'
    }
  },
  {
    path: '/',
    components: {
      header: HeadNav,
      main: Index,
      footer: Footer,
      scrollTop: ScrollTop
    },
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/about',
    components: {
      header: HeadNav,
      main: About,
      footer: Footer,
      scrollTop: ScrollTop
    },
    meta: {
      title: '關於我們'
    }
  },
  {
    path: '/news',
    components: {
      header: HeadNav,
      main: News,
      footer: Footer,
      scrollTop: ScrollTop
    },
    children: [
      {
        path: '',
        component: NewsLayout,
        meta: {
          title: '最新公告'
        }
      },
      {
        path: ':id',
        component: NewsInfo,
        meta: {
          title: '最新公告'
        }
      }
    ]
  },
  {
    path: '/contact',
    components: {
      header: HeadNav,
      main: Contact,
      footer: Footer,
      scrollTop: ScrollTop
    },
    meta: {
      title: '聯絡我們'
    }
  },
  {
    path: '/case',
    components: {
      header: HeadNav,
      main: Properties,
      footer: Footer,
      scrollTop: ScrollTop
    },
    children: [
      {
        path: '',
        component: PropertiesLayout,
        meta: {
          title: '工程實績'
        }
      },
      {
        path: ':id',
        component: PropertiesInfo,
        meta: {
          title: '工程實績'
        }
      }
    ]
  },
  {
    path: '/users',
    components: {
      header: HeadNav,
      main: Staff,
      footer: Footer
    },
    meta: {
      title: '員工專區'
    }
  },
  {
    path: '/backstage',
    components: {
      header: HeadNav,
      main: Backstage
    },
    meta: {
      title: '員工專區',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: BackendHome,
        meta: {
          title: '員工首頁'
        }
      },
      {
        path: '/bulletin/:id',
        component: BulletinInfo,
        meta: {
          title: '員工首頁'
        }
      },
      {
        path: '/role',
        component: Role,
        meta: {
          title: '權限管理'
        }
      },
      {
        path: '/emp',
        component: Emp,
        meta: {
          title: '員工列表'
        }
      },
      {
        path: '/caseList',
        component: CaseList,
        meta: {
          title: '工程實績'
        }
      },
      {
        path: '/newsList',
        component: NewsList,
        meta: {
          title: '企業訊息'
        }
      },
      {
        path: '/bulletinList',
        component: BulletinList,
        meta: {
          title: '內部公告'
        }
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('operationType') === 'signIn'
  if (to.meta.title) {
    document.title = to.meta.title
    if (to.meta.requiresAuth) {
      if (isLogin) {
        next()
      } else {
        alert('權限不足，請登入帳號')
        router.push('/users')
      }
    } else {
      next()
    }
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

export default router
