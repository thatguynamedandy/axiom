import {
  Heading,
  Italic,
  Link,
  List,
  ListItem,
  Paragraph,
  Small,
  Strike,
  Strong,
  Underline,
  Weak,
} from 'axiom/react';

export default {
  id: 'typography',
  path: 'typography',
  group: 'components',
  components: [
    { Component: Heading },
    { Component: Italic },
    { Component: Link },
    { Component: List },
    { Component: ListItem },
    { Component: Paragraph },
    { Component: Small },
    { Component: Strike },
    { Component: Strong },
    { Component: Underline },
    { Component: Weak },
  ],
  imports: {
    sass: ['components/typography'],
  },
  examples: () => [{
    title: 'Sizing',
    snippetLocation: true,
    snippetContent: true,
    children: [
      ...Heading.__ax_propTypes.level.oneOf.map((level) => {
        return {
          Component: Heading,
          children: `h${level}. Lorem ipsum...`,
          demoContent: true,
          props: {
            level: level,
          },
        };
      }), {
        Component: Paragraph,
        children: 'p. Lorem ipsum...',
        demoContent: true,
      }, {
        Component: Paragraph,
        children: [{
          Component: Small,
          children: 'small. Lorem ipsum...',
        }],
      },
    ],
  }, {
    title: 'Weights',
    children: [{
      title: 'Strong',
      snippetLocation: true,
      snippetContent: true,
      children: [
        ...Heading.__ax_propTypes.level.oneOf.map((level) => {
          return {
            Component: Heading,
            props: {
              level: level,
            },
            children: [{
              Component: Strong,
              children: `h${level}. Lorem ipsum...`,
              demoContent: true,
            }],
          };
        }), {
          Component: Paragraph,
          children: [{
            Component: Strong,
            children: 'p. Lorem ipsum...',
            demoContent: true,
          }],
        }, {
          Component: Paragraph,
          children: [{
            Component: Small,
            children: [{
              Component: Strong,
              children: 'small. Lorem ipsum...',
              demoContent: true,
            }],
          }],
        },
      ],
    }, {
      title: 'Weak',
      snippetLocation: true,
      snippetContent: true,
      children: [
        ...Heading.__ax_propTypes.level.oneOf.map((level) => {
          return {
            Component: Heading,
            props: {
              level: level,
            },
            children: [{
              Component: Weak,
              children: `h${level}. Lorem ipsum...`,
              demoContent: true,
            }],
          };
        }), {
          Component: Paragraph,
          children: [{
            Component: Weak,
            children: 'p. Lorem ipsum...',
            demoContent: true,
          }],
        }, {
          Component: Paragraph,
          children: [{
            Component: Small,
            children: [{
              Component: Weak,
              children: 'small. Lorem ipsum...',
              demoContent: true,
            }],
          }],
        },
      ],
    }],
  }, {
    title: 'Decoration modifiers',
    snippetLocation: true,
    children: [{
      Component: Paragraph,
      snippetContent: true,
      children: [{
        Component: Italic,
        children: 'This text is Italicized',
        demoContent: true,
      }],
    }, {
      Component: Paragraph,
      snippetContent: true,
      children: [{
        Component: Underline,
        children: 'This text is Underlined',
        demoContent: true,
      }],
    }, {
      Component: Paragraph,
      snippetContent: true,
      children: [{
        Component: Strike,
        children: 'This text is Strike Through',
        demoContent: true,
      }],
    }],
  }, {
    title: 'Alignment modifiers',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Paragraph,
      demoContent: true,
      children: 'This text is left aligned',
      props: {
        textLeft: true,
      },
    }, {
      Component: Paragraph,
      demoContent: true,
      children: 'This text is center aligned',
      props: {
        textCenter: true,
      },
    }, {
      Component: Paragraph,
      demoContent: true,
      children: 'This text is right aligned',
      props: {
        textRight: true,
      },
    }],
  }, {
    title: 'Case modifiers',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Paragraph,
      demoContent: true,
      children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.',
      props: {
        textCase: 'upper',
      },
    }, {
      Component: Paragraph,
      demoContent: true,
      children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.',
      props: {
        textCase: 'capital',
      },
    }, {
      Component: Paragraph,
      demoContent: true,
      children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.',
      props: {
        textCase: 'lower',
      },
    }],
  }, {
    title: 'Links',
    snippetLocation: true,
    children: [{
      Component: Heading,
      props: {
        level: 3,
      },
      children: [
        'Lorem ipsum dolor sit amet, ',
        {
          Component: Link,
          children: 'consectetur',
        },
        ' adipiscing elit. Donec tempus ut felis vitae hendrerit.',
      ],
    }, {
      Component: Paragraph,
      snippetContent: true,
      children: [
        'Lorem ipsum dolor sit amet, ',
        {
          Component: Link,
          demoContent: true,
          children: 'consectetur',
        },
        ' adipiscing elit. Donec tempus ut felis vitae hendrerit.',
      ],
    }],
  }, {
    title: 'Lists',
    children: [{
      title: 'Ordered List',
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: List,
        props: {
          ordered: true,
        },
        children: [{
          Component: ListItem,
          demoContent: true,
          children: 'Lorem ipsum dolor sit amet',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Consectetur adipiscing elit',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Integer molestie lorem at massa',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Facilisis in pretium nisl aliquet',
        }],
      }],
    }, {
      title: 'Unordered List',
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: List,
        props: {
          ordered: false,
        },
        children: [{
          Component: ListItem,
          demoContent: true,
          children: 'Lorem ipsum dolor sit amet',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Consectetur adipiscing elit',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Integer molestie lorem at massa',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Facilisis in pretium nisl aliquet',
        }],
      }],
    }, {
      title: 'Inline List',
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: List,
        props: {
          inline: true,
        },
        children: [{
          Component: ListItem,
          demoContent: true,
          children: 'Lorem ipsum dolor sit amet',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Consectetur adipiscing elit',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Integer molestie lorem at massa',
        }, {
          Component: ListItem,
          demoContent: true,
          children: 'Facilisis in pretium nisl aliquet',
        }],
      }],
    }],
  }],
};