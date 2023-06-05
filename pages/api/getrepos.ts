// import siteMetadata from '@/data/siteMetadata'
import { NextApiRequest, NextApiResponse } from 'next'
// import { Repo } from 'types/Repo'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  // const res = await fetch(siteMetadata.githubRepos)
  // const data = await res.json()
  // const repos: Repo[] = data.items

  response.setHeader('Cache-Control', 's-maxage=86400')
  response.status(200).json([
    {
      id: 359735105,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNTk3MzUxMDU=',
      name: 'PWA_Weather',
      full_name: 'ViniciusLagoGehrke/PWA_Weather',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/PWA_Weather',
      description:
        'Progressive Web Weather App using React and Open Weather Map API',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/PWA_Weather/deployments',
      created_at: '2021-04-20T08:09:00Z',
      updated_at: '2021-10-31T23:36:41Z',
      pushed_at: '2021-10-31T23:36:38Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/PWA_Weather.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/PWA_Weather.git',
      clone_url: 'https://github.com/ViniciusLagoGehrke/PWA_Weather.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/PWA_Weather',
      homepage: 'https://pwa-weather-viniciuslagogehrke.vercel.app/',
      size: 3927,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['api-rest', 'pwa', 'react'],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 614792962,
      node_id: 'R_kgDOJKT_Ag',
      name: 'Quasar-project',
      full_name: 'ViniciusLagoGehrke/Quasar-project',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/Quasar-project',
      description: 'Todo webapp created with Vue3, Vite and Quasar',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Quasar-project/deployments',
      created_at: '2023-03-16T10:31:51Z',
      updated_at: '2023-03-21T17:53:57Z',
      pushed_at: '2023-03-16T12:20:09Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/Quasar-project.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/Quasar-project.git',
      clone_url: 'https://github.com/ViniciusLagoGehrke/Quasar-project.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/Quasar-project',
      homepage: '',
      size: 445,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['quasar-framework', 'vite', 'vue3'],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
      score: 1,
    },
    {
      id: 308473422,
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDg0NzM0MjI=',
      name: 'Authenticated-To-Do',
      full_name: 'ViniciusLagoGehrke/Authenticated-To-Do',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/Authenticated-To-Do',
      description:
        'An authenticated Todo app that uses Next.js, Airtable, Tailwind CSS, and Auth0.',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Authenticated-To-Do/deployments',
      created_at: '2020-10-29T23:24:10Z',
      updated_at: '2021-10-31T23:41:36Z',
      pushed_at: '2021-10-31T23:41:34Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/Authenticated-To-Do.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/Authenticated-To-Do.git',
      clone_url:
        'https://github.com/ViniciusLagoGehrke/Authenticated-To-Do.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/Authenticated-To-Do',
      homepage: '',
      size: 273,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['airtable', 'auth0', 'nextjs', 'reactjs', 'tailwindcss'],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 346773835,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNDY3NzM4MzU=',
      name: 'SyncCalendar',
      full_name: 'ViniciusLagoGehrke/SyncCalendar',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/SyncCalendar',
      description:
        "A web app that allows a user to see all their collaborators' calendars with their names, task list and associated time zone.",
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/SyncCalendar/deployments',
      created_at: '2021-03-11T16:54:48Z',
      updated_at: '2023-03-21T17:54:47Z',
      pushed_at: '2021-10-31T23:39:29Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/SyncCalendar.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/SyncCalendar.git',
      clone_url: 'https://github.com/ViniciusLagoGehrke/SyncCalendar.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/SyncCalendar',
      homepage: 'https://sync-calendar.vercel.app/',
      size: 28858,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'api-rest',
        'crud-application',
        'material-ui',
        'nextjs',
        'react',
      ],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
      score: 1,
    },
    {
      id: 647455759,
      node_id: 'R_kgDOJpdkDw',
      name: 'Game-Dashboard',
      full_name: 'ViniciusLagoGehrke/Game-Dashboard',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/Game-Dashboard',
      description:
        'Dashboard using React 18, Material-UI, Nivo Charts, FullCalendar, Formik and Yup',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Game-Dashboard/deployments',
      created_at: '2023-05-30T20:28:40Z',
      updated_at: '2023-05-31T07:04:17Z',
      pushed_at: '2023-05-31T07:06:29Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/Game-Dashboard.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/Game-Dashboard.git',
      clone_url: 'https://github.com/ViniciusLagoGehrke/Game-Dashboard.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/Game-Dashboard',
      homepage: 'https://game-dashboard-nine.vercel.app',
      size: 367,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'dashboard',
        'formik-yup',
        'fullcalendar',
        'material-ui',
        'nivo-charts',
        'reactjs',
      ],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'development',
      score: 1,
    },
    {
      id: 303710416,
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDM3MTA0MTY=',
      name: 'H.app.y-Web',
      full_name: 'ViniciusLagoGehrke/H.app.y-Web',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/H.app.y-Web',
      description:
        'Web App that displays nearby orphanages with open time and date. User can add info as well.',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/H.app.y-Web/deployments',
      created_at: '2020-10-13T13:21:20Z',
      updated_at: '2021-11-01T22:47:38Z',
      pushed_at: '2021-11-01T22:47:35Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/H.app.y-Web.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/H.app.y-Web.git',
      clone_url: 'https://github.com/ViniciusLagoGehrke/H.app.y-Web.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/H.app.y-Web',
      homepage: 'https://relaxed-elion-8d944c.netlify.app/app',
      size: 20924,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['express', 'nodejs', 'react', 'reactjs', 'typescript'],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 616247681,
      node_id: 'R_kgDOJLsxgQ',
      name: 'smart-hotel',
      full_name: 'ViniciusLagoGehrke/smart-hotel',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/smart-hotel',
      description:
        'Room occupancy optimization tool with React 18 and TypeScript.',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/smart-hotel/deployments',
      created_at: '2023-03-20T02:02:55Z',
      updated_at: '2023-03-31T15:33:34Z',
      pushed_at: '2023-03-31T15:34:06Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/smart-hotel.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/smart-hotel.git',
      clone_url: 'https://github.com/ViniciusLagoGehrke/smart-hotel.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/smart-hotel',
      homepage: 'https://smart-hotel-sand.vercel.app/',
      size: 107,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['react', 'tailwindcss', 'typescript', 'vitejs'],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
      score: 1,
    },
    {
      id: 607657644,
      node_id: 'R_kgDOJDgerA',
      name: 'Hand-Controlled-Page',
      full_name: 'ViniciusLagoGehrke/Hand-Controlled-Page',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/Hand-Controlled-Page',
      description:
        'Video stream page controlled by hand gestures using TensorFlow and Javascript native tools.',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/Hand-Controlled-Page/deployments',
      created_at: '2023-02-28T12:24:55Z',
      updated_at: '2023-03-21T17:56:09Z',
      pushed_at: '2023-03-13T21:26:17Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/Hand-Controlled-Page.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/Hand-Controlled-Page.git',
      clone_url:
        'https://github.com/ViniciusLagoGehrke/Hand-Controlled-Page.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/Hand-Controlled-Page',
      homepage:
        'https://viniciuslagogehrke.github.io/HandControlledWebPage/classes/class04/pages/titles/',
      size: 162633,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'iterators',
        'javascript',
        'n-tier-architecture',
        'tensorflowjs',
        'webworkers',
      ],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
      score: 1,
    },
    {
      id: 395006835,
      node_id: 'MDEwOlJlcG9zaXRvcnkzOTUwMDY4MzU=',
      name: 'React_MemoryGame',
      full_name: 'ViniciusLagoGehrke/React_MemoryGame',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/React_MemoryGame',
      description:
        'Memory Game using React and Typescript and tested with Jest',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/React_MemoryGame/deployments',
      created_at: '2021-08-11T13:54:40Z',
      updated_at: '2021-10-31T23:43:05Z',
      pushed_at: '2023-02-17T21:22:34Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/React_MemoryGame.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/React_MemoryGame.git',
      clone_url: 'https://github.com/ViniciusLagoGehrke/React_MemoryGame.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/React_MemoryGame',
      homepage: 'https://react-memory-game-seven.vercel.app/',
      size: 1029,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['jest', 'reactjs', 'typescript'],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
      score: 1,
    },
    {
      id: 625157352,
      node_id: 'R_kgDOJUMk6A',
      name: 'bike_E-commerce',
      full_name: 'ViniciusLagoGehrke/bike_E-commerce',
      private: false,
      owner: {
        login: 'ViniciusLagoGehrke',
        id: 46430040,
        node_id: 'MDQ6VXNlcjQ2NDMwMDQw',
        avatar_url: 'https://avatars.githubusercontent.com/u/46430040?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ViniciusLagoGehrke',
        html_url: 'https://github.com/ViniciusLagoGehrke',
        followers_url:
          'https://api.github.com/users/ViniciusLagoGehrke/followers',
        following_url:
          'https://api.github.com/users/ViniciusLagoGehrke/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ViniciusLagoGehrke/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ViniciusLagoGehrke/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ViniciusLagoGehrke/subscriptions',
        organizations_url:
          'https://api.github.com/users/ViniciusLagoGehrke/orgs',
        repos_url: 'https://api.github.com/users/ViniciusLagoGehrke/repos',
        events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ViniciusLagoGehrke/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/ViniciusLagoGehrke/bike_E-commerce',
      description: 'E-commerce for bikes and components',
      fork: false,
      url: 'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce',
      forks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/forks',
      keys_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/teams',
      hooks_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/hooks',
      issue_events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/events',
      assignees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/tags',
      blobs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/languages',
      stargazers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/stargazers',
      contributors_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/contributors',
      subscribers_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/subscribers',
      subscription_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/subscription',
      commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/merges',
      archive_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/downloads',
      issues_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/labels{/name}',
      releases_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/ViniciusLagoGehrke/bike_E-commerce/deployments',
      created_at: '2023-04-08T08:35:21Z',
      updated_at: '2023-04-11T21:31:52Z',
      pushed_at: '2023-04-12T09:29:25Z',
      git_url: 'git://github.com/ViniciusLagoGehrke/bike_E-commerce.git',
      ssh_url: 'git@github.com:ViniciusLagoGehrke/bike_E-commerce.git',
      clone_url: 'https://github.com/ViniciusLagoGehrke/bike_E-commerce.git',
      svn_url: 'https://github.com/ViniciusLagoGehrke/bike_E-commerce',
      homepage: 'https://bike-e-commerce.vercel.app/',
      size: 192,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'reactjs',
        'state-management',
        'typescript',
        'usecontext',
        'usereducer-hook',
      ],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
      score: 1,
    },
  ])
}
