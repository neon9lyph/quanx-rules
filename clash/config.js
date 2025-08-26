// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query", // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query", // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com",
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers,
  },
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400,
};
// 规则集配置
const ruleProviders = {
  AdBlock: {
    ...ruleProviderCommon,
    "format": "text",
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/Cats-Team/AdRules/main/adrules_domainset.txt",
    "path": "./ruleset/AdBlock.yaml",
  },
  AI: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://gist.githubusercontent.com/ddgksf2013/cb4121e8b5c5d865cc949cb8120320c4/raw/Ai.yaml",
    "path": "./ruleset/ai.yaml",
  },
  Emby: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ddgksf2013/Filter/master/Emby.yaml",
    "path": "./ruleset/Emby.yaml",
  },
  BiliBili: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBili/BiliBili.yaml",
    "path": "./ruleset/BiliBili.yaml",
  },
  Bahamut: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Bahamut/Bahamut.yaml",
    "path": "./ruleset/Bahamut.yaml",
  },
  GlobalMedia: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GlobalMedia/GlobalMedia_Classical.yaml",
    "path": "./ruleset/GlobalMedia.yaml",
  },
  Apple: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple_Classical.yaml",
    "path": "./ruleset/Apple.yaml",
  },
  Github: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GitHub/GitHub.yaml",
    "path": "./ruleset/GitHub.yaml",
  },
  Microsoft: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml",
    "path": "./ruleset/Microsoft.yaml",
  },
  Google: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml",
    "path": "./ruleset/Google.yaml",
  },
  Telegram: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml",
    "path": "./ruleset/Telegram.yaml",
  },
  Twitter: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.yaml",
    "path": "./ruleset/Twitter.yaml",
  },
  Game: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Game/Game.yaml",
    "path": "./ruleset/Game.yaml",
  },
  ProxyLite: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ProxyLite/ProxyLite.yaml",
    "path": "./ruleset/ProxyLite.yaml",
  },
  Direct: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Direct/Direct.yaml",
    "path": "./ruleset/Direct.yaml",
  },
  Lan: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan.yaml",
    "path": "./ruleset/Lan.yaml",
  },
  Download: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Download/Download.yaml",
    "path": "./ruleset/Download.yaml",
  },
  ChinaIP: {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/soffchen/GeoIP2-CN/release/clash-rule-provider.yml",
    "path": "./ruleset/ChinaIP.yaml",
  },
};
// 规则
const rules = [
  // 自定义规则
  "DOMAIN-KEYWORD,tsintergy,DIRECT",
  "RULE-SET,AdBlock,广告过滤",
  "RULE-SET,AI,AI",
  "RULE-SET,Emby,Emby服务",
  "RULE-SET,BiliBili,哔哩哔哩",
  "RULE-SET,Bahamut,哔哩哔哩",
  "RULE-SET,GlobalMedia,国际媒体",
  "RULE-SET,Apple,苹果服务",
  "RULE-SET,Github,全球加速",
  "RULE-SET,Microsoft,全球加速",
  "RULE-SET,Google,谷歌服务",
  "RULE-SET,Telegram,电报消息",
  "RULE-SET,Twitter,推特服务",
  "RULE-SET,Game,游戏平台",
  "RULE-SET,ProxyLite,全球加速",
  "RULE-SET,ChinaIP,全局直连",
  "RULE-SET,Direct,DIRECT",
  "RULE-SET,Lan,DIRECT",
  "RULE-SET,Download,DIRECT",

  "MATCH,漏网之鱼",
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false,
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object"
      ? Object.keys(config["proxy-providers"]).length
      : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  const commonProxies = [
    "节点选择",
    "DIRECT",
    "自动选择",
    "香港节点",
    "日本节点",
    "台湾节点",
    "美国节点",
    "狮城节点",
  ];
  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      "name": "节点选择",
      "type": "select",
      "proxies": ["自动选择"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
    },
    {
      "name": "自动选择",
      "type": "url-test",
      "tolerance": 100,
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg",
    },
    {
      "name": "全球加速",
      "type": "select",
      "proxies": commonProxies,
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Global.png",
    },
    {
      "name": "苹果服务",
      "type": "select",
      "proxies": [
        "DIRECT",
        "节点选择",
        "自动选择",
        "香港节点",
        "日本节点",
        "台湾节点",
        "美国节点",
        "狮城节点",
      ],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg",
    },
    {
      "name": "哔哩哔哩",
      "type": "select",
      "proxies": ["DIRECT", "香港节点", "台湾节点"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/bilibili.png",
    },
    {
      "name": "Emby服务",
      "type": "select",
      "proxies": commonProxies,
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Emby.png",
    },
    {
      "name": "AI",
      "type": "select",
      "proxies": [
        "节点选择",
        "香港节点",
        "日本节点",
        "台湾节点",
        "美国节点",
        "狮城节点",
      ],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/OpenAI.png",
    },
    {
      "name": "国际媒体",
      "type": "select",
      "proxies": commonProxies,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg",
    },
    {
      "name": "谷歌服务",
      "type": "select",
      "proxies": commonProxies,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg",
    },

    {
      "name": "电报消息",
      "type": "select",
      "proxies": commonProxies,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg",
    },

    {
      "name": "推特服务",
      "type": "select",
      "proxies": commonProxies,
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Twitter.png",
    },
    {
      "name": "游戏平台",
      "type": "select",
      "proxies": commonProxies,
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/GAME.png",
    },
    {
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg",
    },
    {
      "name": "全局直连",
      "type": "select",
      "proxies": commonProxies,
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg",
    },
    {
      "name": "香港节点",
      "type": "url-test",
      "include-all": true,
      "filter": "港|HK|(?i)Hong",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png",
    },
    {
      "name": "日本节点",
      "type": "url-test",
      "include-all": true,
      "filter": "日|东京|JP|(?i)Japan",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png",
    },
    {
      "name": "台湾节点",
      "type": "url-test",
      "include-all": true,
      "filter": "台|湾|TW|(?i)Taiwan",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png",
    },
    {
      "name": "美国节点",
      "type": "url-test",
      "include-all": true,
      "filter": "美|US|(?i)States|American",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png",
    },
    {
      "name": "狮城节点",
      "type": "url-test",
      "include-all": true,
      "filter": "新加|坡|SG|(?i)Singapore",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png",
    },
    {
      "name": "漏网之鱼",
      "type": "select",
      "proxies": commonProxies,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg",
    },
  ].map((item) => {
    return {
      ...groupBaseOption,
      ...item,
    };
  });

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}
