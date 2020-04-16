export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9818ef82590a941eecd2de',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog1-studio-597wce3i',
                  apiId: '44568597-3357-4361-abf9-a04e9b2f7a5a'
                },
                {
                  buildHookId: '5e9818ef2be8496b44dd3f9b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog1-web-r6kvzs5u',
                  apiId: '6244b62c-4244-4b7a-b077-21c220476f6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jennyg3011/sanity-gatsby-blog1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog1-web-r6kvzs5u.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
