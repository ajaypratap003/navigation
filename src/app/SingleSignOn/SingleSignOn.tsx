import * as React from 'react';
import { CubesIcon } from '@patternfly/react-icons';
import {
  PageSection,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants
} from '@patternfly/react-core';

export interface ISupportProps {
  sampleProp?: string;
}

const SingleSignOn: React.FunctionComponent<ISupportProps> = () => (
    <PageSection>
      <TextContent>
        <TextList component={TextListVariants.ol}>
          <TextListItem>
            Select "Clients"
          </TextListItem>
          <TextListItem>
            A 3scale-admin client and service account was already created for you.
          </TextListItem>
          <TextListItem>
            Click on the 3scale-admin link to view.
          </TextListItem>
          <TextListItem>
            Click on the "Credentials" tab.
          </TextListItem>
          <TextListItem>
            Take note of the service account secret. Could we store this secret and pass it through to 3scale.
          </TextListItem>
          <TextListItem>
            Add a user to Realm by clicking on the "Add user" button. (Do we need to add a user ?)
          </TextListItem>
          <TextListItem>
            Type a username (what does this username have to match?)
          </TextListItem>
          <TextListItem>
            Click save
          </TextListItem>
          <TextListItem>
            Click on credentials tab to reset the password.
          </TextListItem>
        </TextList>
      </TextContent>
    </PageSection>
  )

export { SingleSignOn };
