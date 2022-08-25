/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
  {
    path: '/greatWall/index',
    meta: {
      auth: false,
      title: '长城守护砖员'
    },
    component: resolve => require(['./pages/greatWall/'], resolve)
  },
  {
    path: '/greatWall/question',
    meta: {
      auth: false,
      title: '长城守护砖员'
    },
    component: resolve => require(['./pages/greatWall/question'], resolve)
  },
  {
    path: '/greatWall/result',
    meta: {
      auth: false,
      title: '长城守护砖员'
    },
    component: resolve => require(['./pages/greatWall/result'], resolve)
  },
  {
    path: '/redBook',
    meta: {
      auth: false,
      title: '一站式灵活用工兼职服务平台'
    },
    component: resolve => require(['./pages/redBook/'], resolve)
  },
  {
    path: '/openMiniApp',
    meta: {
      auth: false,
      title: '青团社，专业的兼职招聘平台'
    },
    component: resolve => require(['./pages/openMiniApp/'], resolve)
  },
  {
    path: '/business/old/newer/unLogin',
    meta: {
      auth: false,
      title: '青团社，专业的兼职招聘平台'
    },
    component: resolve => require(['./pages/buness_older_newer/unLogin/'], resolve)
  },
  {
    path: '/qtsSms',
    meta: {
      auth: false,
      title: '报名成功通知'
    },
    component: resolve => require(['./pages/qtsSms/'], resolve)
  },
  {
    path: '/201907/zh',
    meta: {
      auth: false,
      title: '招商银行送青豆'
    },
    component: resolve => require(['./pages/zh201907/index'], resolve)
  },
  {
    path: '/couponIndex',
    meta: {
      auth: false,
      title: '兑换加薪券'
    },
    component: resolve => require(['./pages/couponRaise/index/'], resolve)
  },
  {
    path: '/couponSecond',
    meta: {
      auth: false,
      title: '兑换加薪券'
    },
    component: resolve => require(['./pages/couponRaise/second/'], resolve)
  },
  {
    path: '/app/login',
    meta: {
      auth: false,
      title: '青团社，专业的兼职招聘平台'
    },
    component: resolve => require(['./pages/buness_older_newer/login/'], resolve)
  },
  {
    path: '/business/old/newer/login',
    meta: {
      auth: false,
      title: '青团社，专业的兼职招聘平台'
    },
    component: resolve => require(['./pages/buness_older_newer/login/'], resolve)
  },
  {
    path: '/business/old/newer/unAuthorized',
    meta: {
      auth: false,
      title: '青团社，专业的兼职招聘平台'
    },
    component: resolve => require(['./pages/buness_older_newer/unAuthorized/'], resolve)
  },
  // {
  //   path: '/business/old/beNewer/home',
  //   meta: {
  //     auth: false,
  //     title: '青团社，专业的兼职招聘平台'
  //   },
  //   component: resolve => require(['./pages/buness_older_newer/olderBeNewerHome/'], resolve)
  // },
  {
    path: '/business/old/beNewer/share',
    meta: {
      auth: false,
      title: '青团社，专业的兼职招聘平台'
    },
    component: resolve => require(['./pages/buness_older_newer/olderBeNewerShare/'], resolve)
  },
  {
    path: '/index',
    meta: {
      auth: false,
      title: '活动首页'
    },
    component: resolve => require(['./pages/index/'], resolve)
  },
  {
    path: '/alipayNewAct', // 老虎机活动，留作复用
    meta: {
      auth: false,
      title: '报名抽大奖，4月福利抢先放 '
    },
    component: resolve => require(['./pages/alipayNewAct/'], resolve)
  },
  {
    path: '/cardDetail/:cardId', // 青团宝信用卡推广活动
    meta: {
      auth: false,
      title: '信用卡详情'
    },
    component: resolve => require(['./pages/bankCardAct/cardDetail/index'], resolve)
  },
  {
    path: '/cardInstructions', // 青团宝信用卡推广活动
    meta: {
      auth: false,
      title: '小课堂'
    },
    component: resolve => require(['./pages/bankCardAct/cardInstructions/index'], resolve)
  },
  {
    path: '/grassCluster',
    meta: {
      auth: false,
      title: '种草团'
    },
    component: resolve => require(['./pages/grass_cluster/'], resolve)
  },
  {
    path: '/grassCluster',
    meta: {
      auth: false,
      title: '四六级大促'
    },
    component: resolve => require(['./pages/grass_cluster/'], resolve)
  },
  {
    path: '/smalltopic/smallindex',
    meta: {
      auth: false,
      title: '你好，2020!'
    },
    component: resolve => require(['./pages/smalltopic/smallindex/'], resolve)
  },
  {
    path: '/smalltopic/smallsecond', // 2018小话题活动，@橘子，喵喵
    meta: {
      auth: false,
      title: '你好，2020!'
    },
    component: resolve => require(['./pages/smalltopic/smallsecond/'], resolve)
  },
  {
    path: '/smalltopic/smallthird',
    meta: {
      auth: false,
      title: '你好，2020!'
    },
    component: resolve => require(['./pages/smalltopic/smallthird/'], resolve)
  },
  {
    path: '/merryChrismas',
    meta: {
      auth: false,
      title: '圣诞节戏精狂欢趴'
    },
    component: resolve => require(['./pages/merryChrismas/'], resolve)
  },
  {
    path: '/elevatorPoster',
    meta: {
      auth: false,
      title: '招大学生兼职，就上青团社'
    },
    component: resolve => require(['./pages/elevator_poster/'], resolve)
  },
  {
    path: '/brandAds', // B端小任务 @金龙
    meta: {
      auth: false,
      title: '品牌曝光，用户引流，小任务上线了'
    },
    component: resolve => require(['./pages/brand_ads/'], resolve)
  },
  {
    path: '/volunteerV3', // 谢马玲
    meta: {
      auth: false,
      title: '义工精选'
    },
    component: resolve => require(['./pages/volunteerV3/'], resolve)
  },
  {
    path: '/luckyWheel', // app 4.9.6版本首屏嵌入，勿删
    meta: {
      auth: false,
      title: '幸运转盘'
    },
    component: resolve => require(['./pages/luckyWheel'], resolve)
  },
  {
    path: '/GeelyPractice', // 吉利合作活动，长期有效，勿删
    meta: {
      auth: false,
      title: '吉利实习活动'
    },
    component: resolve => require(['./pages/GeelyPractice'], resolve)
  },
  {
    path: '/presentsForNew',
    meta: {
      auth: false,
      title: '立享一年免费使用名额'
    },
    component: resolve => require(['./pages/presentsForNew'], resolve)
  },
  {
    path: '/neteaseCloudRead',
    meta: {
      auth: false,
      title: '海量免费小说、图书，免费畅读'
    },
    component: resolve => require(['./pages/neteaseCloudMusic'], resolve)
  },
  {
    path: '/tz',
    meta: {
      auth: false,
      title: '团长项目'
    },
    component: resolve => require(['./pages/tz'], resolve),
    children: [
      {
        path: '',
        meta: {
          auth: false,
          title: '团长主页'
        },
        component: resolve => require(['./pages/tz/main'], resolve)
      },
      {
        path: 'promotion',
        meta: {
          auth: false,
          title: '推广页'
        },
        component: resolve => require(['./pages/tz/promotion'], resolve)
      },
      {
        path: 'recruit',
        meta: {
          auth: false,
          title: '团长招募页'
        },
        component: resolve => require(['./pages/tz/recruit'], resolve)
      }
    ]
  },
  {
    path: '/universal/channel/:id',
    meta: {
      auth: false,
      title: '青团社'
    },
    component: resolve => require(['./pages/universal'], resolve)
  },
  {
    path: '/qingtuantuishou',
    meta: {
      auth: false,
      title: '最强推手大赛'
    },
    component: resolve => require(['./pages/qingtuantuishou'], resolve)
  },
  {
    path: '/myqingtuan',
    meta: {
      auth: false,
      title: '我的订单'
    },
    component: resolve => require(['./pages/myqingtuan'], resolve)
  },
  {
    path: '/completeInfo',
    meta: {
      auth: false,
      title: '完善信息'
    },
    component: resolve => require(['./pages/completeInfo'], resolve)
  },
  {
    path: '/read',
    meta: {
      auth: false,
      title: '百度阅读 Flag诊所'
    },
    component: resolve => require(['./pages/baiduRead'], resolve),
    children: [
      {
        path: '',
        meta: {
          auth: false,
          title: '百度阅读 Flag诊所'
        },
        component: resolve => require(['./pages/baiduRead/home'], resolve)
      },
      {
        path: 'question',
        meta: {
          auth: false,
          title: '百度阅读 Flag诊所'
        },
        component: resolve => require(['./pages/baiduRead/question'], resolve)
      },
      {
        path: 'share',
        meta: {
          auth: false,
          title: '百度阅读 Flag诊所'
        },
        component: resolve => require(['./pages/baiduRead/share'], resolve)
      }
    ]
  },
  {
    path: '/gmo',
    meta: {
      auth: false,
      title: 'GMO问卷调查'
    },
    component: resolve => require(['./pages/gmo'], resolve)
  },
  {
    path: '/gmoLink',
    meta: {
      auth: false,
      title: 'GMO问卷调查'
    },
    component: resolve => require(['./pages/gmo/gmoLink'], resolve)
  },
  {
    path: '/direcruit',
    meta: {
      auth: false,
      title: '青团直聘现金红包'
    },
    component: resolve => require(['./pages/direcruit'], resolve)
  },
  {
    path: '/scoreActivity/home',
    meta: {
      auth: false,
      title: '青豆狂欢节'
    },
    component: resolve => require(['./pages/scoreActivity/home'], resolve)
  },
  {
    path: '/scoreActivity/address',
    meta: {
      auth: false,
      title: '填写收货地址'
    },
    component: resolve => require(['./pages/scoreActivity/address'], resolve)
  },
  {
    path: '/slhSurvey',
    meta: {
      auth: false,
      title: '青团小调研'
    },
    component: resolve => require(['./pages/survey/index'], resolve)
  },
  {
    path: '/invite',
    meta: {
      auth: false,
      title: '有钱一起赚'
    },
    component: resolve => require(['./pages/invite/index'], resolve)
  },
  {
    path: '/jiaxingJob',
    meta: {
      auth: false,
      title: '嘉兴万家企业百万岗位网络招聘节'
    },
    component: resolve => require(['./pages/jiaxingJob'], resolve)
  },
  {
    path: '/scoreActivity/reward',
    meta: {
      auth: false,
      title: '我的奖品'
    },
    component: resolve => require(['./pages/scoreActivity/reward'], resolve)
  },
  {
    path: '/schoolSeason/partJob',
    meta: {
      auth: false,
      title: '开学季线上兼职'
    },
    component: resolve => require(['./pages/schoolSeason/partJob'], resolve)
  },
  {
    path: '/schoolSeason/welfare',
    meta: {
      auth: false,
      title: '开学季线上公益'
    },
    component: resolve => require(['./pages/schoolSeason/welfare'], resolve)
  },
  {
    path: '/newPersonWelfare/home',
    meta: {
      auth: false,
      title: '新手限时福利'
    },
    component: resolve => require(['./pages/newPersonWelfare/home'], resolve)
  },
  {
    path: '/RpoNewPersonWelfare/home',
    meta: {
      auth: false,
      title: '小任务新人福利'
    },
    component: resolve => require(['./pages/RponewPersonWelfare/home'], resolve)
  },
  {
    path: '/smallDownload/downloadapk',
    meta: {
      auth: false,
      title: '前往赚钱'
    },
    component: resolve => require(['./pages/smallDownload/downloadapk'], resolve)
  },
  {
    path: '/smallDownload/downqtsApp',
    meta: {
      auth: false,
      title: '前往赚钱'
    },
    component: resolve => require(['./pages/smallDownload/downqtsApp'], resolve)
  },
  {
    path: '/debang/home',
    meta: {
      auth: false,
      title: '旧衣回收挑战赛'
    },
    component: resolve => require(['./pages/debang/home'], resolve)
  },
  {
    path: '/debang/area',
    meta: {
      auth: false,
      scrollToTop: true,
      title: '旧衣回收挑战赛'
    },
    component: resolve => require(['./pages/debang/area'], resolve)
  },
  {
    path: '/debang/detail/:schoolId',
    meta: {
      auth: false,
      scrollToTop: true,
      title: '旧衣回收挑战赛'
    },
    component: resolve => require(['./pages/debang/detail'], resolve)
  },
  {
    path: '/debang/certificate',
    meta: {
      auth: false,
      scrollToTop: true,
      title: '旧衣回收挑战赛'
    },
    component: resolve => require(['./pages/debang/certificate'], resolve)
  },
  {
    path: '/smallTaskAct/activityInvite',
    meta: {
      auth: false,
      title: '小任务新人邀请'
    },
    component: resolve => require(['./pages/smallTaskAct/activityInvite'], resolve)
  },
  {
    path: '/smallTaskAct/rewardDetail',
    meta: {
      auth: false,
      title: '奖励明细'
    },
    component: resolve => require(['./pages/smallTaskAct/activityInvite/rewardDetail'], resolve)
  },
  {
    path: '/smallTaskAct/inviteDetail',
    meta: {
      auth: false,
      title: '邀请明细'
    },
    component: resolve => require(['./pages/smallTaskAct/activityInvite/inviteDetail'], resolve)
  },
  {
    path: '/smallTaskAct/invalid',
    meta: {
      auth: false,
      title: '已失效'
    },
    component: resolve => require(['./pages/smallTaskAct/activityInvite/invalid'], resolve)
  },
  {
    path: '/smallTaskAct/download',
    meta: {
      auth: false,
      title: '下载赚钱团'
    },
    component: resolve => require(['./pages/smallTaskAct/activityInvite/downLoadApk'], resolve)
  },
  {
    path: '/smallTaskAct/accountSurplus',
    meta: {
      auth: false,
      title: '账户余额'
    },
    component: resolve => require(['./pages/smallTaskAct/activityInvite/accountSurplus'], resolve)
  },
  {
    path: '/smallTaskAct/rules',
    meta: {
      auth: false,
      title: '账户余额'
    },
    component: resolve => require(['./pages/smallTaskAct/activityInvite/rules'], resolve)
  },
  {
    path: '/landing',
    meta: {
      auth: false,
      title: '宅家赚钱'
    },
    component: resolve => require(['./pages/landing/index'], resolve)
  },
  {
    path: '/configurationDownload/downloadapk',
    meta: {
      auth: false,
      title: '做兼职，零花不用愁'
    },
    component: resolve => require(['./pages/acmDownload/downloadapk'], resolve)
  },
  {
    path: '/activitySchoolDays/schoolDays',
    meta: {
      auth: false,
      title: '开学季，百团大战'
    },
    component: resolve => require(['./pages/schoolDays'], resolve)
  },
  {
    path: '*',
    redirect: '/greatWall/index'
  }
]
