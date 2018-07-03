import '@material/tabs/mdc-tabs.scss'
import {Link} from 'react-router-dom'

const isActiveStyled = (active) =>
      active ? 'mdc-tab--active' : ''

const Tab = ({to, children}) => (
  <Link className={`mdc-tab`}
	to={to}>{children}</Link>
)

export default Tab
