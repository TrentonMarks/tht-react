import React from 'react'; // import React
import { // import React Router
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

export default class HeaderLogoBlock extends React.Component {

  render() {
    let loadService = this.props.loadService;

    return (
      <Router>
        <div id="block-th-base2-branding" className="contextual-region block-system block-th-base2-branding">
          <NavLink onClick={()=>{loadService()}} to={'/'} exact title="Home" rel="home" className="site-logo">
            <img src="https://tht-react.trentmarks.dev/files/images/th-logo.png" alt="Home"></img>
          </NavLink>
        </div>
      </Router>
    );
  }

}
