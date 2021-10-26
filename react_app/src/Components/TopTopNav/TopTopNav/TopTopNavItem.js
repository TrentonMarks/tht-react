import React from 'react'; // import React
import { // import React Router
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

export default class TopTopNavItem extends React.Component {

  render() {
    let topTopNav = this.props.topTopNav;
    let loadBasic = this.props.loadBasic;

    return (
      <Router>
        <li className="active-trail sf-depth-1 sf-no-children">
          {
            topTopNav !== null &&
            topTopNav !== undefined &&
            topTopNav.length > 0
            ?
            topTopNav.map(item => <NavLink onClick={() => loadBasic()} {...item} to={item.link.url} exact data-drupal-link-system-path={"node/"+item.link.route_parameters.node} className="sf-depth-1">{item.link.title}</NavLink>)
            :
            null
          }
        </li>
      </Router>
    );
  }

}
