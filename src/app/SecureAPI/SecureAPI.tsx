import * as React from 'react';
import {
  PageSection,
  Title,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants
} from '@patternfly/react-core';

const SecureAPI: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">This is where you would secure your API</Title>
    <TextContent>
      <TextList component={TextListVariants.ol}>
        <TextListItem>
          Click on the API that you just created.
        </TextListItem>
        <TextListItem>
          Click "Integration"
        </TextListItem>
        <TextListItem>
          Click on the "Edit Integration settings" to edit the API settings for the gateway.
        </TextListItem>
        <TextListItem>
          Under "Authentication deployment" options, select OpenID Connect.
        </TextListItem>
        <TextListItem>
          Click "Update Service"
        </TextListItem>
        <TextListItem>
          Back on the integration page, click on the edit APIcase configuration.
        </TextListItem>
        <TextListItem>
          Click on the Authentication settings link
        </TextListItem>
        <TextListItem>
          In the OpenID Connector Issuer field, type in the client credentials with the URL of your RHSSO instance <a>https://3scale-admin:CLIENT_SECRET@sso-sso.openshift-app-host/auth/realms/user-username</a>
        </TextListItem>
        <TextListItem>
          Click on "Update Staging Environment"
        </TextListItem>
        <TextListItem>
          Click the "Back to Integration and Configuration link"
        </TextListItem>
        <TextListItem>
          Click "Promote to Production"
        </TextListItem>
      </TextList>
    </TextContent>
  </PageSection>
)

export { SecureAPI };
