import * as React from 'react';
import { 
  PageSection,
  Title,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants
} from '@patternfly/react-core';

const CreateAPI: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">This is where you would create your API</Title>
    <TextContent>
      <TextList component={TextListVariants.ol}>
        <TextListItem>
          Click "New API"
        </TextListItem>
        <TextListItem>
          Create an API using form
        </TextListItem>
      </TextList>
    </TextContent>
  </PageSection>
)

export { CreateAPI };
