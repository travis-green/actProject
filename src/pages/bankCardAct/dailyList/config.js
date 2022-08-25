const cardActivity = [
  {
    weekday: 1,
    content: [
      {
        title: '浦发·外卖享最高77元立减优惠',
        content: [
          '活动时间：即日起-2018年6月30日（每天10点起）',
          '活动内容：持卡人于活动时间至美团APP外卖频道或美团外卖APP购买外卖产品并通过浦发信用卡付款，可享随机立减优惠最高77元。每人每月限4次，每日优惠名额限20000个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-1.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '广发·吃喝购最高5折',
        content: [
          '活动时间：2018年3月2日起（各城市商户开始结束日期不一，活动日不一，详见发现精彩APP带“满”字活动商户店铺页码）',
          '活动内容：持卡人登录“发现精彩”APP，点击下方“立即参与”进入商户列表，在带“满”字样的商户使用优惠支付，在指定活动商户单笔消费满指定金额即享指定金额立减。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-2.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '兴业·网购满118元立减18元',
        content: [
          '活动时间：即日起至2018年6月30日（每天9点起）',
          '活动内容：持卡人在淘宝、天猫购物使用支付宝付款并选择兴业银行信用卡进行支付，可享满118元立减18元优惠，每天限量3000个名额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-3.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '广发·无卡付5元首刷礼',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：登录“发现精彩”APP领取优惠资格当月内，首刷广发无卡付（云闪付／支付宝／微信支付／京东支付等）。满5元返5元，三种支付形式优惠不叠加，每卡限一次，每月限额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-4.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '交通·购买火车票立减10元',
        content: [
          '活动时间：2018年4月2日至5月31日',
          '活动内容：持卡人于活动期间在“携程旅行”APP购买火车票，勾选“交通银行信用卡10元优惠券”即享立减10元优惠。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-5.jpg',
        deadline: '1527782399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '浦发·“饿了么”满11元立减10元',
        content: [
          '活动时间：即日起到2018年6月30日（每天9点起）',
          '活动内容：持卡人通过支付宝快捷支付，在“饿了么”APP单笔消费满11元可享受立减10元优惠，每日名额1000名。每位用户最多可享受12次活动优惠，每日限享1次。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-6.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '交通·外卖最高享100元优惠',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在买单吧APP上外卖消费，满40元随机减，最高100元优惠。每日1次，名额有限。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-7.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '浦发·日日优惠 代金券抢购',
        content: [
          '参与商户包括：必胜客、哈根达斯、CoCo、汉堡王、万宁等，详情请关注“浦发银行信用卡”微信公众号查询。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-8.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·半价享汉堡王套餐',
        content: [
          '活动时间：即日起-2018年5月14日（每周一11点起）',
          '活动内容：持卡人于活动时间至小浦美餐平台制定活动专区可以5折价格购买指定三种汉堡王套餐，持卡人可以现金、信用卡积分或现金+信用卡积分的方式支付。每位持卡人每周每种套餐限购买1份，每周每种套餐限量4200份，购完即止。具体活动专区路径为：微信公众号“浦发银行信用卡”-微广场-小浦美食-我要预约；APP“浦大喜奔”-生活-食-我要预约。使用日期截止2018年6月30日。先到先得，抢完为止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-9.jpg',
        deadline: '1526313599000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '兴业·6积分兑换星巴克',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在指定统计时间段内（2017年11月26日至2018年6月25日期间，每月26日至次月25日为一个统计时间段）客户名下卡片累计刷卡消费满6笔，且单笔交易金额满99元，次月持可使用积分消费的信用卡至线下星巴克门店可享首杯6000信用卡积分、次杯6积分兑换星巴克大杯手工调制饮品1杯，以上每档分值每月各限兑1杯。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-10.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '民生·天天民生日（周一咖啡日）',
        content: [
          '活动时间：2017年5月22日至2018年5月20日（每周一）',
          '活动内容：民生信用卡持卡人每自然周消费满3笔且单笔满199元（达标交易类型包含计积分交易、微信交易、支付宝交易），即可于消费达标的次周周一（10:00后）至COSTA指定门店7元领取中杯饮品一杯，每人每活动日所有门店限领取一杯，名额有限，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-11.jpg',
        deadline: '1526831999000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '民生·惠享“小南国”',
        content: [
          '活动时间：即日起至2018年5月17日（每周一、三、五、日7点起）',
          '活动内容：持卡人在活动门店使用民生银行信用卡二维码支付，可享满101元立减10元至100元优惠（最高优惠100元）。每日名额共计500个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/1-12.jpg',
        deadline: '1526572799000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      }
    ]
  },
  {
    weekday: 2,
    content: [
      {
        title: '广发·吃喝购最高5折',
        content: [
          '活动时间：2018年3月2日起（各城市商户开始结束日期不一，活动日不一，详见发现精彩APP带“满”字活动商户店铺页码）',
          '活动内容：持卡人登录“发现精彩”APP，点击下方“立即参与”进入商户列表，在带“满”字样的商户使用优惠支付，在指定活动商户单笔消费满指定金额即享指定金额立减。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-1.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '浦发·外卖享最高77元立减优惠',
        content: [
          '活动时间：即日起-2018年6月30日（每天10点起）',
          '活动内容：持卡人于活动时间至美团APP外卖频道或美团外卖APP购买外卖产品并通过浦发信用卡付款，可享随机立减优惠最高77元。每人每月限4次，每日优惠名额限20000个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-2.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·半价享汉堡王套餐',
        content: [
          '活动时间：即日起-2018年5月14日（每周一11点起）',
          '活动内容：持卡人于活动时间至小浦美餐平台制定活动专区可以5折价格购买指定三种汉堡王套餐，持卡人可以现金、信用卡积分或现金+信用卡积分的方式支付。每位持卡人每周每种套餐限购买1份，每周每种套餐限量4200份，购完即止。具体活动专区路径为：微信公众号“浦发银行信用卡”-微广场-小浦美食-我要预约；APP“浦大喜奔”-生活-食-我要预约。使用日期截止2018年6月30日。先到先得，抢完为止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-3.jpg',
        deadline: '1526313599000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '民生·满62元立减20元',
        content: [
          '活动时间：即日起至2018年7月3日（每周二、六）',
          '活动内容：持卡人在龙腾出行全国指定机场餐厅进行消费并登录“龙腾出行”APP使用Apple Pay／银联在线支付或在门店使用银联扫码支付，享满62元及以上立减20元优惠，活动名额有限，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-4.jpg',
        deadline: '1530633599000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '交通·购买火车票立减10元',
        content: [
          '活动时间：2018年4月2日至5月31日',
          '活动内容：持卡人于活动期间在“携程旅行”APP购买火车票，勾选“交通银行信用卡10元优惠券”即享立减10元优惠'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-5.jpg',
        deadline: '1527782399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '浦发·“饿了么”满11元立减10元',
        content: [
          '活动时间：即日起到2018年6月30日（每天9点起）',
          '活动内容：持卡人通过支付宝快捷支付，在“饿了么”APP单笔消费满11元可享受立减10元优惠，每日名额1000名。每位用户最多可享受12次活动优惠，每日限享1次。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-6.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·日日优惠 代金券抢购',
        content: [
          '参与商户包括：必胜客、哈根达斯、CoCo、汉堡王、万宁等，详情请关注“浦发银行信用卡”微信公众号查询。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-7.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '兴业·网购满118元立减18元',
        content: [
          '活动时间：即日起至2018年6月30日（每天9点起）',
          '活动内容：持卡人在淘宝、天猫购物使用支付宝付款并选择兴业银行信用卡进行支付，可享满118元立减18元优惠，每天限量3000个名额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-8.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '交通·外卖最高享100元优惠',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在买单吧APP上外卖消费，满40元随机减，最高100元优惠。每日1次，名额有限。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-9.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '兴业·6积分兑换星巴克',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在指定统计时间段内（2017年11月26日至2018年6月25日期间，每月26日至次月25日为一个统计时间段）客户名下卡片累计刷卡消费满6笔，且单笔交易金额满99元，次月持可使用积分消费的信用卡至线下星巴克门店可享首杯6000信用卡积分、次杯6积分兑换星巴克大杯手工调制饮品1杯，以上每档分值每月各限兑1杯。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-10.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '广发·无卡付5元首刷礼',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：登录“发现精彩”APP领取优惠资格当月内，首刷广发无卡付（云闪付／支付宝／微信支付／京东支付等）。满5元返5元，三种支付形式优惠不叠加，每卡限一次，每月限额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-11.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '民生·天天民生日（周二甜蜜日） ',
        content: [
          '活动时间：2017年5月22日至2018年5月20日（每周二）',
          '活动内容：民生信用卡持卡人每自然周消费满3笔且单笔满199元（达标交易类型包含计积分交易、微信交易、支付宝交易），即可于消费达标的次周周二至哈根达斯指定门店7元领取指定甜品（单球、脆皮条或小纸杯三选一），每人每活动日所有门店限领取一次，名额有限，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-12.jpg',
        deadline: '1526831999000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '民生·惠享“小南国”',
        content: [
          '活动时间：即日起至2018年5月17日（每周二、四、六7点起）',
          '活动内容：持卡人在活动门店使用民生银行信用卡二维码支付，可享满300元立减40元优惠。每日名额共计500个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/2-13.jpg',
        deadline: '1526572799000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      }
    ]
  },
  {
    weekday: 3,
    content: [
      {
        title: '浦发·半价享汉堡王套餐',
        content: [
          '活动时间：即日起-2018年5月14日（每周一11点起）',
          '活动内容：持卡人于活动时间至小浦美餐平台制定活动专区可以5折价格购买指定三种汉堡王套餐，持卡人可以现金、信用卡积分或现金+信用卡积分的方式支付。每位持卡人每周每种套餐限购买1份，每周每种套餐限量4200份，购完即止。具体活动专区路径为：微信公众号“浦发银行信用卡”-微广场-小浦美食-我要预约；APP“浦大喜奔”-生活-食-我要预约。使用日期截止2018年6月30日。先到先得，抢完为止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-1.jpg',
        deadline: '1526313599000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '广发·吃喝购最高5折',
        content: [
          '活动时间：2018年3月2日起（各城市商户开始结束日期不一，活动日不一，详见发现精彩APP带“满”字活动商户店铺页码）',
          '活动内容：持卡人登录“发现精彩”APP，点击下方“立即参与”进入商户列表，在带“满”字样的商户使用优惠支付，在指定活动商户单笔消费满指定金额即享指定金额立减。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-2.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '浦发·外卖享最高77元立减优惠',
        content: [
          '活动时间：即日起-2018年6月30日（每天10点起）',
          '活动内容：持卡人于活动时间至美团APP外卖频道或美团外卖APP购买外卖产品并通过浦发信用卡付款，可享随机立减优惠最高77元。每人每月限4次，每日优惠名额限20000个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-3.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '广发·无卡付5元首刷礼',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：登录“发现精彩”APP领取优惠资格当月内，首刷广发无卡付（云闪付／支付宝／微信支付／京东支付等）。满5元返5元，三种支付形式优惠不叠加，每卡限一次，每月限额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-4.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '浦发·日日优惠 代金券抢购',
        content: [
          '参与商户包括：必胜客、哈根达斯、CoCo、汉堡王、万宁等，详情请关注“浦发银行信用卡”微信公众号查询。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-5.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '交通·外卖最高享100元优惠',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在买单吧APP上外卖消费，满40元随机减，最高100元优惠。每日1次，名额有限'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-6.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '兴业·网购满118元立减18元',
        content: [
          '活动时间：即日起至2018年6月30日（每天9点起）',
          '活动内容：持卡人在淘宝、天猫购物使用支付宝付款并选择兴业银行信用卡进行支付，可享满118元立减18元优惠，每天限量3000个名额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-7.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '交通·购买火车票立减10元',
        content: [
          '活动时间：2018年4月2日至5月31日',
          '活动内容：持卡人于活动期间在“携程旅行”APP购买火车票，勾选“交通银行信用卡10元优惠券”即享立减10元优惠。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-8.jpg',
        deadline: '1527782399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '兴业·6积分兑换星巴克',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在指定统计时间段内（2017年11月26日至2018年6月25日期间，每月26日至次月25日为一个统计时间段）客户名下卡片累计刷卡消费满6笔，且单笔交易金额满99元，次月持可使用积分消费的信用卡至线下星巴克门店可享首杯6000信用卡积分、次杯6积分兑换星巴克大杯手工调制饮品1杯，以上每档分值每月各限兑1杯。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-9.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '浦发·“饿了么”满11元立减10元',
        content: [
          '活动时间：即日起到2018年6月30日（每天9点起）',
          '活动内容：持卡人通过支付宝快捷支付，在“饿了么”APP单笔消费满11元可享受立减10元优惠，每日名额1000名。每位用户最多可享受12次活动优惠，每日限享1次。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-10.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '民生·天天民生日（周三红包日）',
        content: [
          '活动时间：2017年5月22日至2018年5月20日（每周三）',
          '活动内容：民生信用卡持卡人每自然周消费满3笔且单笔满199元（达标交易类型包含计积分交易、微信交易、支付宝交易），即可于消费达标的次周周三在民生信用卡微信“我的优惠”-“我的特权”7元领取500M手机流量充值兑换码一个，每人每活动日限领取一个,名额有限，先到先得, 每活动日两次领取时间：上午10点和下午15点。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-11.jpg',
        deadline: '1526831999000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '民生·惠享“小南国”',
        content: [
          '活动时间：即日起至2018年5月17日（每周一、三、五、日7点起）',
          '活动内容：持卡人在活动门店使用民生银行信用卡二维码支付，可享满101元立减10元至100元优惠（最高优惠100元）。每日名额共计500个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/3-12.jpg',
        deadline: '1526572799000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      }
    ]
  },
  {
    weekday: 4,
    content: [
      {
        title: '浦发·全家满20元立减10元',
        content: [
          '活动时间：2018年2月8日至6月30日（每周四6点起）',
          '活动内容：本活动限使用浦发银行62开头（包含信用卡及借记卡）使用银联二维码和手机PAY在全家便利店支付单笔消费满20元享受立减10元优惠，满减金额将在用户支付时直接扣减，单笔优惠上限为10元。',
          '每卡每活动日二维码支付及手机PAY支付各限享1次优惠，优惠名额每活动日10000名。（借记卡和信用卡每天各5000名，手机PAY和银联二维码各2500名。优惠先到先得、额满即止）'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-1.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·外卖享最高77元立减优惠',
        content: [
          '活动时间：即日起-2018年6月30日（每天10点起）',
          '活动内容：持卡人于活动时间至美团APP外卖频道或美团外卖APP购买外卖产品并通过浦发信用卡付款，可享随机立减优惠最高77元。每人每月限4次，每日优惠名额限20000个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-2.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '广发·吃喝购最高5折',
        content: [
          '活动时间：2018年3月2日起（各城市商户开始结束日期不一，活动日不一，详见发现精彩APP带“满”字活动商户店铺页码）',
          '活动内容：持卡人登录“发现精彩”APP，点击下方“立即参与”进入商户列表，在带“满”字样的商户使用优惠支付，在指定活动商户单笔消费满指定金额即享指定金额立减。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-3.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '浦发·半价享汉堡王套餐',
        content: [
          '活动时间：即日起-2018年5月14日（每周一11点起）',
          '活动内容：持卡人于活动时间至小浦美餐平台制定活动专区可以5折价格购买指定三种汉堡王套餐，持卡人可以现金、信用卡积分或现金+信用卡积分的方式支付。每位持卡人每周每种套餐限购买1份，每周每种套餐限量4200份，购完即止。具体活动专区路径为：微信公众号“浦发银行信用卡”-微广场-小浦美食-我要预约；APP“浦大喜奔”-生活-食-我要预约。使用日期截止2018年6月30日。先到先得，抢完为止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-4.jpg',
        deadline: '1526313599000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·“饿了么”满11元立减10元',
        content: [
          '活动时间：即日起到2018年6月30日（每天9点起）',
          '活动内容：持卡人通过支付宝快捷支付，在“饿了么”APP单笔消费满11元可享受立减10元优惠，每日名额1000名。每位用户最多可享受12次活动优惠，每日限享1次。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-5.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '兴业·网购满118元立减18元',
        content: [
          '活动时间：即日起至2018年6月30日（每天9点起）',
          '活动内容：持卡人在淘宝、天猫购物使用支付宝付款并选择兴业银行信用卡进行支付，可享满118元立减18元优惠，每天限量3000个名额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-6.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '浦发·日日优惠 代金券抢购',
        content: [
          '参与商户包括：必胜客、哈根达斯、CoCo、汉堡王、万宁等，详情请关注“浦发银行信用卡”微信公众号查询。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-7.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '交通·外卖最高享100元优惠',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在买单吧APP上外卖消费，满40元随机减，最高100元优惠。每日1次，名额有限'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-8.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '兴业·6积分兑换星巴克',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在指定统计时间段内（2017年11月26日至2018年6月25日期间，每月26日至次月25日为一个统计时间段）客户名下卡片累计刷卡消费满6笔，且单笔交易金额满99元，次月持可使用积分消费的信用卡至线下星巴克门店可享首杯6000信用卡积分、次杯6积分兑换星巴克大杯手工调制饮品1杯，以上每档分值每月各限兑1杯。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-9.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '广发·无卡付5元首刷礼',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：登录“发现精彩”APP领取优惠资格当月内，首刷广发无卡付（云闪付／支付宝／微信支付／京东支付等）。满5元返5元，三种支付形式优惠不叠加，每卡限一次，每月限额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-10.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '民生·天天民生日（周四爱乐日）',
        content: [
          '活动时间：2017年5月22日至2018年5月20日（每周四）',
          '活动内容：民生信用卡持卡人每自然周消费满3笔且单笔满199元（达标交易类型包含计积分交易、微信交易、支付宝交易），即可于消费达标的次周周四在民生信用卡微信“我的优惠”-“我的特权”7积分领取QQ音乐付费音乐包兑换码一个，每人每活动日限领取一个，名额有限，先到先得，每活动日两次领取时间：上午10点和下午15点'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-11.jpg',
        deadline: '1526831999000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '民生·惠享“小南国”',
        content: [
          '活动时间：即日起至2018年5月17日（每周二、四、六7点起）',
          '活动内容：持卡人在活动门店使用民生银行信用卡二维码支付，可享满300元立减40元优惠。每日名额共计500个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-12.jpg',
        deadline: '1526572799000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '交通·购买火车票立减10元',
        content: [
          '活动时间：2018年4月2日至5月31日',
          '活动内容：持卡人于活动期间在“携程旅行”APP购买火车票，勾选“交通银行信用卡10元优惠券”即享立减10元优惠'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/4-13.jpg',
        deadline: '1527782399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      }
    ]
  },
  {
    weekday: 5,
    content: [
      {
        title: '广发·购电影票满9元立减8.8元',
        content: [
          '活动时间：2018年3月16日-5月30日，每周五、六、日10点起',
          '活动内容：客户在活动期间内，通过“淘票票”APP、“支付宝”APP-电影票、“手机淘宝”APP-我的淘宝-查看全部工具-“淘票票”专区三个参与渠道，将广发信用卡（含银联标识）绑定支付宝，购买电影票，方可享受每笔订单满9元立减8.8元优惠。同一用户每月限享1次优惠，每次最多可购买2张电影票。每个活动日限1000个优惠名额。优惠名额有限，先到先得，额满即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-1.jpg',
        deadline: '1527695999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '兴业·网购满118元立减18元',
        content: [
          '活动时间：即日起至2018年6月30日（每天9点起）',
          '活动内容：持卡人在淘宝、天猫购物使用支付宝付款并选择兴业银行信用卡进行支付，可享满118元立减18元优惠，每天限量3000个名额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-2.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '浦发·外卖享最高77元立减优惠',
        content: [
          '活动时间：即日起-2018年6月30日（每天10点起）',
          '活动内容：持卡人于活动时间至美团APP外卖频道或美团外卖APP购买外卖产品并通过浦发信用卡付款，可享随机立减优惠最高77元。每人每月限4次，每日优惠名额限20000个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-3.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '广发·单笔满150元立减50元',
        content: [
          '活动时间：2018年4月5日至2018年6月5日（每周五六日），（注：各地活动开始时间不一致，以APP实际上线时间为准）',
          '活动内容：持卡人登录“发现精彩”APP，选择带“满150减50”字样的商户，到活动商户门店消费后使用优惠支付，单笔支付满150元及以上即立减50元。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-4.jpg',
        deadline: '1528214399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '广发·吃喝购最高5折',
        content: [
          '活动时间：2018年3月2日起（各城市商户开始结束日期不一，活动日不一，详见发现精彩APP带“满”字活动商户店铺页码）',
          '活动内容：持卡人登录“发现精彩”APP，点击下方“立即参与”进入商户列表，在带“满”字样的商户使用优惠支付，在指定活动商户单笔消费满指定金额即享指定金额立减。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-17.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '交通·最红星期五活动',
        content: [
          '活动时间：2018年1月1日至2018年6月30日',
          '活动内容：持卡人每周五在指定超市、加油站内刷交通银行信用卡主卡（除boss卡、分期卡、中石油昆仑信用卡外）任一单笔消费满人民币98元且满足活动其他参与条件的，可秒减该笔交易金额的5%，白金卡秒减该笔交易金额的10%。详询官网'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-5.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '浦发·半价享汉堡王套餐',
        content: [
          '活动时间：即日起-2018年5月14日（每周一11点起）',
          '活动内容：持卡人于活动时间至小浦美餐平台制定活动专区可以5折价格购买指定三种汉堡王套餐，持卡人可以现金、信用卡积分或现金+信用卡积分的方式支付。每位持卡人每周每种套餐限购买1份，每周每种套餐限量4200份，购完即止。具体活动专区路径为：微信公众号“浦发银行信用卡”-微广场-小浦美食-我要预约；APP“浦大喜奔”-生活-食-我要预约。使用日期截止2018年6月30日。先到先得，抢完为止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-6.jpg',
        deadline: '1526313599000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·“饿了么”满11元立减10元',
        content: [
          '活动时间：即日起到2018年6月30日（每天9点起）',
          '活动内容：持卡人通过支付宝快捷支付，在“饿了么”APP单笔消费满11元可享受立减10元优惠，每日名额1000名。每位用户最多可享受12次活动优惠，每日限享1次。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-7.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '交通·外卖最高享100元优惠',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在买单吧APP上外卖消费，满40元随机减，最高100元优惠。每日1次，名额有限。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-8.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '浦发·日日优惠 代金券抢购',
        content: [
          '参与商户包括：必胜客、哈根达斯、CoCo、汉堡王、万宁等，详情请关注“浦发银行信用卡”微信公众号查询。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-9.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '交通·MCAKE免费升磅',
        content: [
          '活动时间： 2017年11月24日至2018年5月20日（活动日10点起）',
          '活动内容：持卡人在MCAKE平台的交通银行信用卡专属活动页面，购买任意一款2磅蛋糕，使用交通银行信用卡快捷支付下单并付款，只需支付该款蛋糕1磅的价格（优惠价格以MCAKE平台显示为准）。每周五限前80单，每个节假日限前130单，优惠数量有限，先到先得，抢完为止。',
          '平日活动时间：2017年11月24日-2018年5月20日的每周五。',
          '节假日活动时间：2017年12月23日-25日、12月30日-2018年1月1日、2018年2月12日-14日、3月6日-8日、5月12日、5月13日、5月19日、5月20日'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-10.jpg',
        deadline: '1526831999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '交通·购买火车票立减10元',
        content: [
          '活动时间：2018年4月2日至5月31日',
          '活动内容：持卡人于活动期间在“携程旅行”APP购买火车票，勾选“交通银行信用卡10元优惠券”即享立减10元优惠。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-11.jpg',
        deadline: '1527782399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '兴业·6积分兑换星巴克',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在指定统计时间段内（2017年11月26日至2018年6月25日期间，每月26日至次月25日为一个统计时间段）客户名下卡片累计刷卡消费满6笔，且单笔交易金额满99元，次月持可使用积分消费的信用卡至线下星巴克门店可享首杯6000信用卡积分、次杯6积分兑换星巴克大杯手工调制饮品1杯，以上每档分值每月各限兑1杯。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-12.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '广发·无卡付5元首刷礼',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：登录“发现精彩”APP领取优惠资格当月内，首刷广发无卡付（云闪付／支付宝／微信支付／京东支付等）。满5元返5元，三种支付形式优惠不叠加，每卡限一次，每月限额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-13.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '交通·外卖享满45元立减15元',
        content: [
          '活动时间：即日起至2018年6月30日（每周五9：30起）',
          '活动内容：“买单吧”APP注册且绑定交通银行信用卡的用户，在“买单吧”APP外卖频道点外卖可享受45元立减15元优惠。名额有限，抢完截止。 每周每人限参与1次。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-14.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '民生·天天民生日（周五美食日）',
        content: [
          '活动时间：2017年5月22日至2018年5月20日（每周五）',
          '活动内容：民生信用卡持卡人每自然周消费满3笔且单笔满199元（达标交易类型包含计积分交易、微信交易、支付宝交易），即可于消费达标的次周周五在民生信用卡微信“我的优惠”-“我的特权”7积分领取大众点评满50元减30元美食券兑换码一个，每人每活动日限领取一个，名额有限，先到先得，每活动日两次领取时间：上午10点和下午15点。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-15.jpg',
        deadline: '1526831999000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '民生·惠享“小南国”',
        content: [
          '活动时间：即日起至2018年5月17日（每周一、三、五、日7点起）',
          '活动内容：持卡人在活动门店使用民生银行信用卡二维码支付，可享满101元立减10元至100元优惠（最高优惠100元）。每日名额共计500个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/5-16.jpg',
        deadline: '1526572799000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      }
    ]
  },
  {
    weekday: 6,
    content: [
      {
        title: '浦发·“饿了么”满11元立减10元',
        content: [
          '活动时间：即日起到2018年6月30日（每天9点起）',
          '活动内容：持卡人通过支付宝快捷支付，在“饿了么”APP单笔消费满11元可享受立减10元优惠，每日名额1000名。每位用户最多可享受12次活动优惠，每日限享1次。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-1.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '广发·购电影票满9元立减8.8元',
        content: [
          '活动时间：2018年3月16日-5月30日，每周五、六、日10点起',
          '活动内容：客户在活动期间内，通过“淘票票”APP、“支付宝”APP-电影票、“手机淘宝”APP-我的淘宝-查看全部工具-“淘票票”专区三个参与渠道，将广发信用卡（含银联标识）绑定支付宝，购买电影票，方可享受每笔订单满9元立减8.8元优惠。同一用户每月限享1次优惠，每次最多可购买2张电影票。每个活动日限1000个优惠名额。优惠名额有限，先到先得，额满即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-2.jpg',
        deadline: '1527695999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '民生·满62元立减20元',
        content: [
          '活动时间：即日起至2018年7月3日（每周二、六）',
          '活动内容：持卡人在龙腾出行全国指定机场餐厅进行消费并登录“龙腾出行”APP使用Apple Pay／银联在线支付或在门店使用银联扫码支付，享满62元及以上立减20元优惠，活动名额有限，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-3.jpg',
        deadline: '1530633599000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '浦发·半价享汉堡王套餐',
        content: [
          '活动时间：即日起-2018年5月14日（每周一11点起）',
          '活动内容：持卡人于活动时间至小浦美餐平台制定活动专区可以5折价格购买指定三种汉堡王套餐，持卡人可以现金、信用卡积分或现金+信用卡积分的方式支付。每位持卡人每周每种套餐限购买1份，每周每种套餐限量4200份，购完即止。具体活动专区路径为：微信公众号“浦发银行信用卡”-微广场-小浦美食-我要预约；APP“浦大喜奔”-生活-食-我要预约。使用日期截止2018年6月30日。先到先得，抢完为止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-4.jpg',
        deadline: '1526313599000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·外卖享最高77元立减优惠',
        content: [
          '活动时间：即日起-2018年6月30日（每天10点起）',
          '活动内容：持卡人于活动时间至美团APP外卖频道或美团外卖APP购买外卖产品并通过浦发信用卡付款，可享随机立减优惠最高77元。每人每月限4次，每日优惠名额限20000个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-5.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '广发·单笔满150元立减50元',
        content: [
          '活动时间：2018年4月5日至2018年6月5日（每周五六日），（注：各地活动开始时间不一致，以APP实际上线时间为准）',
          '活动内容：持卡人登录“发现精彩”APP，选择带“满150减50”字样的商户，到活动商户门店消费后使用优惠支付，单笔支付满150元及以上即立减50元。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-6.jpg',
        deadline: '1528214399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '浦发·日日优惠 代金券抢购',
        content: [
          '参与商户包括：必胜客、哈根达斯、CoCo、汉堡王、万宁等，详情请关注“浦发银行信用卡”微信公众号查询。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-7.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '交通·外卖最高享100元优惠',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在买单吧APP上外卖消费，满40元随机减，最高100元优惠。每日1次，名额有限。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-8.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '交通·购买火车票立减10元',
        content: [
          '活动时间：2018年4月2日至5月31日',
          '活动内容：持卡人于活动期间在“携程旅行”APP购买火车票，勾选“交通银行信用卡10元优惠券”即享立减10元优惠。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-9.jpg',
        deadline: '1527782399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '广发·吃喝购最高5折',
        content: [
          '活动时间：2018年3月2日起（各城市商户开始结束日期不一，活动日不一，详见发现精彩APP带“满”字活动商户店铺页码）',
          '活动内容：持卡人登录“发现精彩”APP，点击下方“立即参与”进入商户列表，在带“满”字样的商户使用优惠支付，在指定活动商户单笔消费满指定金额即享指定金额立减。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-10.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '兴业·网购满118元立减18元',
        content: [
          '活动时间：即日起至2018年6月30日（每天9点起）',
          '活动内容：持卡人在淘宝、天猫购物使用支付宝付款并选择兴业银行信用卡进行支付，可享满118元立减18元优惠，每天限量3000个名额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-11.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '兴业·6积分兑换星巴克',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在指定统计时间段内（2017年11月26日至2018年6月25日期间，每月26日至次月25日为一个统计时间段）客户名下卡片累计刷卡消费满6笔，且单笔交易金额满99元，次月持可使用积分消费的信用卡至线下星巴克门店可享首杯6000信用卡积分、次杯6积分兑换星巴克大杯手工调制饮品1杯，以上每档分值每月各限兑1杯。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-12.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '广发·无卡付5元首刷礼',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：登录“发现精彩”APP领取优惠资格当月内，首刷广发无卡付（云闪付／支付宝／微信支付／京东支付等）。满5元返5元，三种支付形式优惠不叠加，每卡限一次，每月限额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-13.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '民生·天天民生日（周六观影日）',
        content: [
          '活动时间：2017年5月22日至2018年5月20日（每周六）',
          '活动内容：民生信用卡持卡人每自然周消费满3笔且单笔满199元（达标交易类型包含计积分交易、微信交易、支付宝交易），即可于消费达标的次周周六在民生信用卡微信“我的优惠”- “我的特权”7积分领取大众点评30元电影券兑换码一个,每人每活动日限领取一个，名额有限，先到先得，每活动日两次领取时间：上午10点和下午15点。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-14.jpg',
        deadline: '1526831999000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '民生·惠享“小南国”',
        content: [
          '活动时间：即日起至2018年5月17日（每周二、四、六7点起）',
          '活动内容：持卡人在活动门店使用民生银行信用卡二维码支付，可享满300元立减40元优惠。每日名额共计500个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/6-15.jpg',
        deadline: '1526572799000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      }
    ]
  },
  {
    weekday: 7,
    content: [
      {
        title: '浦发·“饿了么”满11元立减10元',
        content: [
          '活动时间：即日起到2018年6月30日（每天9点起）',
          '活动内容：持卡人通过支付宝快捷支付，在“饿了么”APP单笔消费满11元可享受立减10元优惠，每日名额1000名。每位用户最多可享受12次活动优惠，每日限享1次。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-1.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·外卖享最高77元立减优惠',
        content: [
          '活动时间：即日起-2018年6月30日（每天10点起）',
          '活动内容：持卡人于活动时间至美团APP外卖频道或美团外卖APP购买外卖产品并通过浦发信用卡付款，可享随机立减优惠最高77元。每人每月限4次，每日优惠名额限20000个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-2.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '兴业·网购满118元立减18元',
        content: [
          '活动时间：即日起至2018年6月30日（每天9点起）',
          '活动内容：持卡人在淘宝、天猫购物使用支付宝付款并选择兴业银行信用卡进行支付，可享满118元立减18元优惠，每天限量3000个名额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-3.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '广发·单笔满150元立减50元',
        content: [
          '活动时间：2018年4月5日至2018年6月5日（每周五六日），（注：各地活动开始时间不一致，以APP实际上线时间为准）',
          '活动内容：持卡人登录“发现精彩”APP，选择带“满150减50”字样的商户，到活动商户门店消费后使用优惠支付，单笔支付满150元及以上即立减50元。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-4.jpg',
        deadline: '1528214399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '浦发·半价享汉堡王套餐',
        content: [
          '活动时间：即日起-2018年5月14日（每周一11点起）',
          '活动内容：持卡人于活动时间至小浦美餐平台制定活动专区可以5折价格购买指定三种汉堡王套餐，持卡人可以现金、信用卡积分或现金+信用卡积分的方式支付。每位持卡人每周每种套餐限购买1份，每周每种套餐限量4200份，购完即止。具体活动专区路径为：微信公众号“浦发银行信用卡”-微广场-小浦美食-我要预约；APP“浦大喜奔”-生活-食-我要预约。使用日期截止2018年6月30日。先到先得，抢完为止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-5.jpg',
        deadline: '1526313599000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '浦发·日日优惠 代金券抢购',
        content: [
          '参与商户包括：必胜客、哈根达斯、CoCo、汉堡王、万宁等，详情请关注“浦发银行信用卡”微信公众号查询。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-6.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=4746ec5ba410bc0fc018cae2ad430da6',
        bankName: '浦发银行'
      },
      {
        title: '交通·外卖最高享100元优惠',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在买单吧APP上外卖消费，满40元随机减，最高100元优惠。每日1次，名额有限。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-7.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '交通·购买火车票立减10元',
        content: [
          '活动时间：2018年4月2日至5月31日',
          '活动内容：持卡人于活动期间在“携程旅行”APP购买火车票，勾选“交通银行信用卡10元优惠券”即享立减10元优惠。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-8.jpg',
        deadline: '1527782399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=5a729d1c55627da6bf6b7da6cc229452',
        bankName: '交通银行'
      },
      {
        title: '广发·吃喝购最高5折',
        content: [
          '活动时间：2018年3月2日起（各城市商户开始结束日期不一，活动日不一，详见发现精彩APP带“满”字活动商户店铺页码）',
          '活动内容：持卡人登录“发现精彩”APP，点击下方“立即参与”进入商户列表，在带“满”字样的商户使用优惠支付，在指定活动商户单笔消费满指定金额即享指定金额立减。每个活动日名额有限，先到先得，用完即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-9.jpg',
        deadline: '9522511999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '兴业·6积分兑换星巴克',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：在指定统计时间段内（2017年11月26日至2018年6月25日期间，每月26日至次月25日为一个统计时间段）客户名下卡片累计刷卡消费满6笔，且单笔交易金额满99元，次月持可使用积分消费的信用卡至线下星巴克门店可享首杯6000信用卡积分、次杯6积分兑换星巴克大杯手工调制饮品1杯，以上每档分值每月各限兑1杯。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-10.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d63570d2b18a1abcf5b533366575ceea',
        bankName: '兴业银行'
      },
      {
        title: '广发·购电影票满9元立减8.8元',
        content: [
          '活动时间：2018年3月16日-5月30日，每周五、六、日10点起',
          '活动内容：客户在活动期间内，通过“淘票票”APP、“支付宝”APP-电影票、“手机淘宝”APP-我的淘宝-查看全部工具-“淘票票”专区三个参与渠道，将广发信用卡（含银联标识）绑定支付宝，购买电影票，方可享受每笔订单满9元立减8.8元优惠。同一用户每月限享1次优惠，每次最多可购买2张电影票。每个活动日限1000个优惠名额。优惠名额有限，先到先得，额满即止。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-11.jpg',
        deadline: '1527695999000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '广发·无卡付5元首刷礼',
        content: [
          '活动时间：即日起至2018年6月30日',
          '活动内容：登录“发现精彩”APP领取优惠资格当月内，首刷广发无卡付（云闪付／支付宝／微信支付／京东支付等）。满5元返5元，三种支付形式优惠不叠加，每卡限一次，每月限额，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-12.jpg',
        deadline: '1530374399000',
        bankLink: 'https://m.qtshe.com/activity/v1?activityMark=d22e838ea4a2f5d47a3fc0a877bee24f',
        bankName: '广发银行'
      },
      {
        title: '民生·天天民生日（周日享购日）',
        content: [
          '活动时间：2017年5月22日至2018年5月20日（每周日）',
          '活动内容：民生信用卡持卡人每自然周消费满3笔且单笔满199元（达标交易类型包含计积分交易、微信交易、支付宝交易），即可于消费达标的次周周日在民生信用卡微信“我的优惠”- “我的特权”7积分领取我买网满百立减优惠券兑换码一个，每人每活动日限领取一个，名额有限，先到先得；每活动日两次领取时间：上午10点和下午15点。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-13.jpg',
        deadline: '1526831999000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      },
      {
        title: '民生·惠享“小南国”',
        content: [
          '活动时间：即日起至2018年5月17日（每周一、三、五、日7点起）',
          '活动内容：持卡人在活动门店使用民生银行信用卡二维码支付，可享满101元立减10元至100元优惠（最高优惠100元）。每日名额共计500个，先到先得。'
        ],
        cardImg: 'https://qiniu-image.qtshe.com/7-14.jpg',
        deadline: '1526572799000',
        bankLink: 'https://creditcard.cmbc.com.cn/wsv2/?enstr=gTvDwUeXMlIUx2VSp8%2faFByfNqikcnTab%2blnZgdHtyP59H49E21RNq9Yh6NzVeQYU0vy%2f0qfKpwqnlLfzxfALOno9ebFW%2f7qKMAbtbFz25IHCkb0Yr6S87NRWyvE2fVPCFMwcZQwtX3QQ0NveddoNlQExzQULim6YsP0qmtMhcc6%2f6OBt%2b%2bhDcq9wxdi4fPCIBLEAIE0L%2b%2bA6thduUum%2b7tH0q%2fbQWZQHDkdaz%2bIcopHxLYa8%2bJJDddvgyJUAnc5CGnf7g0GkOCk7E8a%2fLR%2fn11qsEYJ4hxB8bpeS5RdGfBwvN4oJSCUO%2fHjuMV9G9jBcEOUPMj4GyfjfLZX3b5acg%3d%3d',
        bankName: '民生银行'
      }
    ]
  }
]

export default cardActivity
