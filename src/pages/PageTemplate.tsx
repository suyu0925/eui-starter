import { ReactElement } from 'react'
import {
  EuiText,
  EuiPageTemplate,
  EuiPageTemplateProps,
  EuiPageHeaderProps,
  EuiPageSidebarProps,
} from '@elastic/eui'

type PageTempalteProps = {
  button?: ReactElement
  content?: ReactElement
  sidebar?: ReactElement;
  header?: EuiPageHeaderProps
  panelled?: EuiPageTemplateProps['panelled']
  restrictWidth?: EuiPageTemplateProps['restrictWidth']
  bottomBorder?: EuiPageTemplateProps['bottomBorder']
  // For fullscreen only
  sidebarSticky?: EuiPageSidebarProps['sticky']
  offset?: EuiPageTemplateProps['offset']
  grow?: EuiPageTemplateProps['grow']
}

const PageTempalte = ({
  button,
  content,
  sidebar,
  header,
  panelled,
  restrictWidth,
  bottomBorder,
  sidebarSticky,
  offset,
  grow,
}: PageTempalteProps) => {
  return (
    <EuiPageTemplate
      panelled={panelled}
      restrictWidth={restrictWidth}
      bottomBorder={bottomBorder}
      offset={offset}
      grow={grow}
    >
      {sidebar && (
        <EuiPageTemplate.Sidebar sticky={sidebarSticky}>
          {sidebar}
        </EuiPageTemplate.Sidebar>
      )}
      {header && (
        <EuiPageTemplate.Header {...header} rightSideItems={[button]} />
      )}
      <EuiPageTemplate.Section
        grow={false}
        bottomBorder={bottomBorder}
      >
        <EuiText textAlign="center">
          <strong>
            Stack EuiPageTemplate sections and headers to create your custom
            content order.
          </strong>
        </EuiText>
      </EuiPageTemplate.Section>
      <EuiPageTemplate.Section>{content}</EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}

export default PageTempalte
