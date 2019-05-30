const path = require('path');
const fs = require('fs');

module.exports = {
  title: 'H.Z的学习笔记',
  description: '前端学习笔记',
  base: '/relearningFE/',
  head: [
  ],
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '前端',
        link: '/fe/home'
      },
      {
        text: 'Flutter',
        link: '/flutter/home'
      },
      {
        text: 'node',
        link: '/node/home'
      },
      {
        text: '更多',
        items: [
          { text: '个人网站', link: 'http://blog.closeeyes.cn/' },
          { text: 'github', link: 'https://github.com/hz199/__' }
        ]
      }
    ],
    sidebar: {
      '/fe/': [
        'home',
        {
          title: "JavaScript",
          collapsable: true,
          children: genSidebarConfig("fe/JavaScript", true)
        },
        {
          title: "HTML",
          collapsable: true,
          children: genSidebarConfig("fe/HTML", true)
        },
        {
          title: "Vue",
          collapsable: true,
          children: genSidebarConfig("fe/Vue", true)
        }
      ],
      '/flutter/': [
        'home',
      ],
      '/node/': [
        // 'home',
        {
          title: "Koa",
          collapsable: true,
          children: genSidebarConfig("node/koa", true)
        }
      ]
    }
  }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}
