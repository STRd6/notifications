(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.0",
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "notifications\n=============\n\nNotifications widget\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "A component to handle displaying two streams of messages: notices and errors.\n\n    Notifications = ->\n\nObservable arrays containing our notices and error streams.\n\n      notices = Observable([])\n      errors = Observable([])\n\nAn error handler capable of displaying many common errors. Still needs work.\n\n      classicError: (request, error, message) ->\n        notices []\n\n        if request.responseJSON\n          message = JSON.stringify(request.responseJSON, null, 2)\n        else\n          message ?= request\n\n        errors [message]\n\nClear all previous errors and notices and display the message as a notice.\n\n      notify: (message) ->\n        notices [message]\n        errors []\n\nAppend a message to the notices.\n\n      push: (message) ->\n        notices.push message\n\n      errors: errors\n      notices: notices\n\n      template: require('./template')\n\n    module.exports = Notifications\n",
      "type": "blob"
    },
    "template.haml.md": {
      "path": "template.haml.md",
      "mode": "100644",
      "content": "A simple console to display notification streams.\n\n    .console-wrap\n      %pre.errors\n        - each @errors, (error) ->\n          = error\n      %pre.notices\n        - each @notices, (notice) ->\n          = notice\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nentryPoint: \"main\"\nremoteDependencies: [\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var Notifications;\n\n  Notifications = function() {\n    var errors, notices;\n    notices = Observable([]);\n    errors = Observable([]);\n    return {\n      classicError: function(request, error, message) {\n        notices([]);\n        if (request.responseJSON) {\n          message = JSON.stringify(request.responseJSON, null, 2);\n        } else {\n          if (message == null) {\n            message = request;\n          }\n        }\n        return errors([message]);\n      },\n      notify: function(message) {\n        notices([message]);\n        return errors([]);\n      },\n      push: function(message) {\n        return notices.push(message);\n      },\n      errors: errors,\n      notices: notices,\n      template: require('./template')\n    };\n  };\n\n  module.exports = Notifications;\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "template": {
      "path": "template",
      "content": "module.exports = Function(\"return \" + HAMLjr.compile(\"\\n\\n.console-wrap\\n  %pre.errors\\n    - each @errors, (error) ->\\n      = error\\n  %pre.notices\\n    - each @notices, (notice) ->\\n      = notice\\n\", {compiler: CoffeeScript}))()",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"entryPoint\":\"main\",\"remoteDependencies\":[\"http://strd6.github.io/require/v0.2.2.js\"]};",
      "type": "blob"
    }
  },
  "entryPoint": "main",
  "dependencies": {},
  "remoteDependencies": [
    "http://strd6.github.io/require/v0.2.2.js"
  ],
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "repository": {
    "id": 12908956,
    "name": "notifications",
    "full_name": "STRd6/notifications",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://0.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/notifications",
    "description": "Notifications widget",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/notifications",
    "forks_url": "https://api.github.com/repos/STRd6/notifications/forks",
    "keys_url": "https://api.github.com/repos/STRd6/notifications/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/notifications/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/notifications/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/notifications/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/notifications/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/notifications/events",
    "assignees_url": "https://api.github.com/repos/STRd6/notifications/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/notifications/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/notifications/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/notifications/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/notifications/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/notifications/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/notifications/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/notifications/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/notifications/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/notifications/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/notifications/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/notifications/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/notifications/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/notifications/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/notifications/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/notifications/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/notifications/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/notifications/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/notifications/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/notifications/merges",
    "archive_url": "https://api.github.com/repos/STRd6/notifications/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/notifications/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/notifications/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/notifications/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/notifications/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/notifications/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/notifications/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/notifications/releases{/id}",
    "created_at": "2013-09-17T23:04:30Z",
    "updated_at": "2013-10-03T23:50:14Z",
    "pushed_at": "2013-10-03T23:50:14Z",
    "git_url": "git://github.com/STRd6/notifications.git",
    "ssh_url": "git@github.com:STRd6/notifications.git",
    "clone_url": "https://github.com/STRd6/notifications.git",
    "svn_url": "https://github.com/STRd6/notifications",
    "homepage": null,
    "size": 564,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "master_branch": "master",
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "branch": "v0.1.0",
    "defaultBranch": "master"
  }
});