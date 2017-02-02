import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ContextMenu, ContextMenuItem, Grid, GridCell, Icon } from 'bw-axiom';

export default class ContextMenuExample extends Component {
  render() {
    return (
      <Example name="Menu">
        <Snippet>
          <ContextMenu position="bottom">
            <ContextMenuItem>
              <Grid snippetReplace={ true } vAlign="middle">
                <GridCell shrink={ true }>
                  <Icon name="twitter" />
                </GridCell>

                <GridCell>
                  Nam dignissim bibendum
                </GridCell>
              </Grid>
            </ContextMenuItem>

            <ContextMenuItem>
              <Grid snippetReplace={ true } vAlign="middle">
                <GridCell shrink={ true }>
                  <Icon name="twitter" />
                </GridCell>

                <GridCell>
                  Nam dignissim bibendum
                </GridCell>
              </Grid>
            </ContextMenuItem>

            <ContextMenuItem>
              <Grid snippetReplace={ true } vAlign="middle">
                <GridCell shrink={ true }>
                  <Icon name="twitter" />
                </GridCell>

                <GridCell>
                  Nam dignissim bibendum
                </GridCell>
              </Grid>
            </ContextMenuItem>
          </ContextMenu>
        </Snippet>
      </Example>
    );
  }
}
