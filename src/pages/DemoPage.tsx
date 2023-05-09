/** @jsxImportSource @emotion/react */
import { EuiIcon, EuiCode, EuiText, useEuiTheme, EuiPageHeaderProps, EuiButton, EuiPageTemplateProps } from '@elastic/eui'
import { css } from '@emotion/react'
import PageTempalte from './PageTemplate'
import SiteNav from '../components/SiteNav'

const DemoPage = () => {
  const restrictWidth: EuiPageTemplateProps['restrictWidth'] = true
  const { euiTheme } = useEuiTheme()
  const button = (
    <EuiButton fill>
      Button
    </EuiButton>
  )
  const pageHeaderProps: EuiPageHeaderProps = {
    iconType: 'logoElastic',
    pageTitle: 'Page title',
    rightSideItems: [button],
    description: <>{`Restricting the width to ${restrictWidth}.`}</>,
    tabs: [
      { label: 'Tab 1', isSelected: true },
      {
        label: 'Tab 2',
      },
    ]
  }
  return (
    <PageTempalte
      content={<EuiText>
        <p>
          <EuiIcon
            type="stopFilled"
            size="xxl"
            css={{ color: euiTheme.colors.primary }} />{' '}
          This primary color will adjust based on the light or dark theme value
        </p>

        <p
          css={css`
          background: ${euiTheme.colors.lightShade};
          padding: calc(${euiTheme.size.base} * 2);
        `}
        >
          The padding of this box is created using <EuiCode>calc()</EuiCode>{' '}
          because EUI&apos;s theme sizes are string pixel values that are
          calculated off the theme&apos;s <EuiCode>base</EuiCode>
        </p>
      </EuiText>}
      sidebar={<SiteNav />}
      button={button}
      header={pageHeaderProps}
      bottomBorder="extended"
      sidebarSticky
      restrictWidth={restrictWidth}
    />
  )
}

export default DemoPage
