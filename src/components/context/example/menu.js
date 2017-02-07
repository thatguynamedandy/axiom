import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ContextMenu, ContextMenuItem, Grid, GridCell } from 'bw-axiom';

export default class ContextMenuExample extends Component {
  render() {
    return (
      <Example name="Menu">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <ContextMenu position="bottom">
                <ContextMenuItem>
                  Nam dignissim bibendum
                </ContextMenuItem>

                <ContextMenuItem>
                  Nam dignissim bibendum
                </ContextMenuItem>

                <ContextMenuItem>
                  Nam dignissim bibendum
                </ContextMenuItem>
              </ContextMenu>
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <ContextMenu position="right">
                <ContextMenuItem>
                  Nam dignissim bibendum
                </ContextMenuItem>

                <ContextMenuItem>
                  Nam dignissim bibendum
                </ContextMenuItem>

                <ContextMenuItem>
                  Nam dignissim bibendum
                </ContextMenuItem>
              </ContextMenu>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
