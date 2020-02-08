export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e3e171ca6328f6eecab398f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rujto4k9',
                  apiId: '8a664fa4-e4c6-4c69-a255-09c880ce38fc'
                },
                {
                  buildHookId: '5e3e171cf1d67675b6a2bd60',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5j74y6wu',
                  apiId: 'acbc6a8d-34ff-4752-8f90-e6e6d4e4e096'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyweiss1982/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5j74y6wu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
