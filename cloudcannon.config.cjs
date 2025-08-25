module.exports = {
  paths: {
    collections: 'content',
    data: 'data',
    static: 'public',
    uploads: 'public/uploads',
  },
  collections_config: {
    data: {
      path: 'data',
      disable_add: true,
      disable_add_folder: true,
    },
    pages: {
      path: 'content/pages',
      url: '/[slug]',
      output: true,
      icon: 'wysiwyg',
      _enabled_editors: ['visual'],
      schemas: {
        page: {
          name: 'New Page',
          path: 'schemas/page.md',
        },
      },
    },
  },
  _inputs: {
    tag: {
      type: 'select',
      options: {
        values: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
    },
    title_suffix: {
      comment:
        'Added at the end of the title and highlighted in a different color',
    },
    page_description: {
      comment: 'Defaults to the description set in the Site SEO data file',
    },
    favicon_icon: {
      type: 'image',
      comment: 'For the shortcut icon meta tag',
    },
    faivcon_image: {
      type: 'image',
      comment: 'For the icon meta tag',
    },
    background_image: {
      type: 'image',
    },
    background_image_mobile: {
      type: 'image',
    },
    text_top: {
      type: 'markdown'
    },
    text_bottom: {
      type: 'markdown'
    },
    featured_image: {
      comment: 'Defaults to the image set in the Site SEO data file',
    },
    open_graph_type: {
      comment: "Defaults to the type 'website'",
    },
    no_index: {
      type: 'checkbox',
      comment:
        'When selected this removes the page from your sitemap and adds the noindex robots meta tag',
    },
    content: {
      type: 'markdown',
    },
  },
};
