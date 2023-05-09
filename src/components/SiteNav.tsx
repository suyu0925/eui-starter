import { EuiImage, useIsWithinBreakpoints } from '@elastic/eui'
import sideNavSvg from '../images/side_nav.svg'
import singleSvg from '../images/single.svg'

const SiteNav = () => {
  const isMobileSize = useIsWithinBreakpoints(['xs', 's'])

  return (
    <EuiImage
      size={isMobileSize ? 'original' : 'fullWidth'}
      alt="Fake side nav list"
      url={isMobileSize ? singleSvg : sideNavSvg}
    />
  )
}

export default SiteNav
