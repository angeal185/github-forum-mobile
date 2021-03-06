import { routes } from './routes.mjs';

// defaults
const repo = 'angeal185/github-forum-issues',
news_repo = 'angeal185/github-forum-news',
report_repo = 'angeal185/github-forum-report',
report_repo_issue = '1',
news_id = 142029577,
origin = 'https://angeal185.github.io/github-forum',
code_base = 'https://github.com/angeal185/github-forum',
github_api = 'https://api.github.com',
api = origin +'/api',
issues_feed = origin +'/atom/issues.atom',
news_feed = origin +'/atom/news.atom';
//

const xdata = Object.assign({
  default:{
    version: '1.0.0', // don't delete me
    title: 'github forum',
    logo: './app/img/logo.png',
    origin: origin,
    params: true,
    error: '/error',
    base_path: '/portal',
    delete_meta: false,
    webmanifest: './app/manifest.webmanifest',
    base_script_name: 'main',
    csp: "default-src 'self';img-src *;object-src 'none';frame-src 'none';block-all-mixed-content;upgrade-insecure-requests;connect-src https://angeal185.github.io "+ github_api,
    meta: [{
      name: 'viewport',
      content: 'initial-scale=1, width=device-width, viewport-fit=cover'
    },{
      name: 'msapplication-tap-highlight',
      content: 'no'
    },{
      name: 'format-detection',
      content: 'telephone=no'
    }],
    styles:[{
      href: './app/css/bootstrap.min.css',
      rel: 'stylesheet'
    },{
      href: './app/css/main.min.css',
      rel: 'stylesheet'
    }],
    js_head:[],
    js_body:[],
    strip_unsafe: ['eval'],
    storage: {
      max_age: 9999999999,
      prefix: 'rt'
    },
    stream: {
      download: {
        type: 'text/plain',
        charset: 'utf-8'
      },
      json: {
        method: 'GET',
        headers: {
          'Sec-Fetch-Dest': 'object',
          'Sec-Fetch-mode': 'cors',
          'Sec-Fetch-Site': 'cross-site'
        }
      },
      fetch: {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.squirrel-girl-preview',
          'Content-Type': 'application/json',
          'Sec-Fetch-Dest': 'object',
          'Sec-Fetch-mode': 'cors',
          'Sec-Fetch-Site': 'cross-site'
        }
      },
      post: {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json ',
          'Content-Type': 'application/json',
          'Sec-Fetch-Dest': 'object',
          'Sec-Fetch-mode': 'cors',
          'Sec-Fetch-Site': 'cross-site'
        }
      },
      react: {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.squirrel-girl-preview',
          'Content-Type': 'application/json',
          'Sec-Fetch-Dest': 'object',
          'Sec-Fetch-mode': 'cors',
          'Sec-Fetch-Site': 'cross-site'
        }
      }
    },
    idb: {
      version: 1,
      title: "db",
      objects: ["cache"],
      cache_maxage: 60000
    }
  },
  app: {
    api: api,
    search: github_api +'/search/',
    forum_id: 142029577,
    user_logo: './app/img/user.png',
    user_data: github_api +'/user',
    users_data: github_api +'/users/',
    code_base: code_base,
    new_token_base: 'https://github.com/settings/tokens/new',
    issues_feed: issues_feed,
    news_feed: news_feed,
    comment_per_page: 100,
    forum: {
      latest_issues_max: 3,
      max_tags: 3,
      max_tag_length: 16,
      max_issue_length: 500,
      max_issue_title_length: 32,
      max_comment_length: 500,
      issues_per_page: 100, // don't change me yet
      base_url: github_api +'/'+ repo +'/repos/issues',
      categories: ['cat1', 'cat2', 'cat3'],
      tag_cloud: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
      tag_cloud_len: 20,
      cat_search: github_api +'/search/issues?q=[cat:{{category}}]in:title+repo:'+ repo +'+type:issue+state:open&page={{page}}',
      search: github_api +'/search/issues?q={{search}}in:title+repo:'+ repo +'+type:issue+state:open&page={{page}}',
      cat_issue: github_api +'/repos/'+ repo +'/issues/{{issue}}/comments?page={{page}}',
      latest: github_api +'/repos/'+ repo +'/issues?sort=created&state=open&per_page=30',
      popular: github_api +'/repos/'+ repo +'/issues?sort=comments&state=open&per_page=30',
      create_issue: github_api +'/repos/'+ repo +'/issues',
      create_comment: github_api +'/repos/'+ repo +'/issues/{{issue}}/comments',
      create_report: github_api +'/repos/'+ report_repo +'/issues/'+ report_repo_issue +'/comments',
      user_issues: github_api +'/search/issues?q=[catin:title+repo:'+ repo +'+type:issue+state:open+{{type}}:{{user}}',
    },
    news: {
      base_url: github_api +'/'+ news_repo +'/repos/issues',
      news_issue: github_api +'/repos/'+ news_repo +'/issues/{{issue}}/comments',
      issues: github_api +'/search/issues?q=+repo:'+ news_repo +'+type:issue+state:open+label:news&page={{page}}'
    }
  }
}, routes)

export { xdata }
