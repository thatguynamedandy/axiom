import React, { Component } from 'react';
import {
  DataPoints,
  DataPoint,
} from '@brandwatch/axiom-charts';
import {
  Tooltip,
  TooltipContent,
  TooltipContext,
  TooltipSource,
  TooltipTarget,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <Tooltip isVisible position="top">
            <TooltipTarget>
              <DataPoints size="2rem">
                <DataPoint color="giant-leap" />
                <DataPoint color="critical-mass" />
                <DataPoint color="new-horizon" />
              </DataPoints>
            </TooltipTarget>

            <TooltipSource theme="night" width="auto">
              <TooltipContext>
                <TooltipContent>Tooltip content</TooltipContent>
              </TooltipContext>
            </TooltipSource>
          </Tooltip>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tooltip/Tooltip'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tooltip/TooltipContent'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tooltip/TooltipSource'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tooltip/TooltipContext'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tooltip/TooltipTarget'),
        ] } />
      </DocumentationContent>
    );
  }
}
