import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import LevelToggle from "./quartz/components/LevelToggle"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: LevelToggle,
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.ConditionalRender({
      component: LevelToggle,
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
  folderClickBehavior: "link",
  folderDefaultState: "collapsed",
}),
  ],
  right: [
    Component.DesktopOnly(Component.ProfileImage(undefined)),
    Component.DesktopOnly(Component.Graph({ 
    localGraph: {
      depth: 3,           // How many hops from current page (default is 1)
      showTags: false,     // Include tag nodes
      linkDistance: 30,   // Distance between nodes
      fontSize: 0.8,      // Label font size
      opacityScale: 1,    // Opacity of distant nodes
      repelForce: 0.5,    // How much nodes push apart
      centerForce: 0.3,   // How strongly nodes pull to center
      scale: 1.1,         // Initial zoom level
    },
    globalGraph: {
      linkDistance: 10,
      fontSize: 0.6,
      opacityScale: 1,
      repelForce: 0.6,
      centerForce: 1.0,
      scale: 1.1,
      showTags: false,
    },
     })),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.ConditionalRender({
      component: LevelToggle,
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
  folderClickBehavior: "link",
  folderDefaultState: "open",
}),
  ],
  right: [],
}
