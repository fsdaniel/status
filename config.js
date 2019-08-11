module.exports = {
  "title": "PalaceWorld status",
  "name": "palaceworld_status",
  "description": "Status of services provided by palaceworld",
  "defaultLocale": "en",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "file": "en.json"
    }
  ],
  content: {
    frontMatterFormat: 'yaml',
    systems: [
      'gamebots',
      'petbots',
      'members.palaceworld.net',
      'www.palaceworld.net',
      'api.palaceworld.net',
      'proprooms v2'
    ]
  },
  theme: {
    scheduled: {
      position: 'aboveGlobalStatus'
    }
  },
  head: {
    link: [
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3e4e88' }
    ]
  }
}