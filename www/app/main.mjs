import { router, x } from './modules/jsnode.mjs';
import { xidb } from './modules/xidb.mjs';
import { utils } from './modules/utils.mjs';

const devmode = true;

const app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    this.receivedEvent('deviceready');
  },
  receivedEvent: function(id) {

    if (id === 'deviceready') {
      router.on('/login', function(request, stream) {
        stream.render('login', request.data, function(err) {
          if (err) {
            return stream.renderErr();
          }
        })
      })
      .on('/portal', function(request, stream) {
        stream.render('portal', request.data, function(err) {
          if (err) {
            return stream.renderErr();
          }
        })
      })
      .on('/profile', function(request, stream) {
        if (utils.isAuth(router)) {
          stream.render('profile', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }
      })
      .on('/forum', function(request, stream) {
        if (utils.isAuth(router)) {
          stream.render('forum', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }
      })
      .on('/forum/category', function(request, stream) {
        if (utils.isAuth(router)) {
          stream.render('forum_category', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }
      })
      .on('/forum/tag', function(request, stream) {
        if (utils.isAuth(router)) {
          request.data.type = 'tag';
          stream.render('forum_search', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }
      })
      .on('/forum/issue', function(request, stream) {
        if (utils.isAuth(router)) {
          if (!request.data.data || !request.data.id) {
            return router.rout('/forum')
          }

          stream.render('forum_issue', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }

      })
      .on('/forum/search', function(request, stream) {
        if (utils.isAuth(router)) {
          stream.render('forum_search', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }
      })
      .on('/forum/user', function(request, stream) {
        if (utils.isAuth(router)) {
          request.data.type = 'author';
          stream.render('forum_search', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }
      })
      .on('/news', function(request, stream) {
        if (utils.isAuth(router)) {
          stream.render('news', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }
      })
      .on('/news/post', function(request, stream) {
        if (utils.isAuth(router)) {
          stream.render('news_post', request.data, function(err) {
            if (err) {
              return stream.renderErr();
            }
          })
        }
      })
      .on('/contact', function(request, stream) {
        stream.render('contact', request.data, function(err) {
          if (err) {
            return stream.renderErr();
          }
        })
      })
      .on('/terms', function(request, stream) {
        stream.render('terms', request.data, function(err) {
          if (err) {
            return stream.renderErr();
          }
        })
      })
      .on('/atom', function(request, stream) {
        stream.render('atom', request.data, function(err) {
          if (err) {
            return stream.renderErr();
          }

        })
      })
      .on('/error', function(request, stream) {
        stream.render('error', request.data, function(err) {
          if (err) {
            return console.error(err)
          }
        })
      })
      .init().listen().validate();

    }

  }
};


if(devmode){
  app.onDeviceReady()
} else {
  app.initialize();
}
