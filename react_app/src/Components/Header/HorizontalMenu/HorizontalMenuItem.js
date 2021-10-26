import React from 'react'; // import React
import { // import React Router
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import HorizontalSubmenuItem from "./HorizontalSubmenuItem"; // import component

export default class HorizontalMenuItem extends React.Component {
  constructor(){
    super();
    this.state = {
      isHover: false
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(){
    this.setState({ isHovered: !this.state.isHovered });
  }
  render() {
    let mainMenu = this.props.mainMenu;
    let loadService = this.props.loadService;
    let hoverClass = this.state.isHovered ? "menu sub-nav sf-show" : "menu sub-nav sf-hidden";

    return (
      <Router>
        <li className="menu-item menu-item--expanded" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          {
            mainMenu !== null &&
            mainMenu !== undefined &&
            mainMenu.length > 0
            ?
            mainMenu.map(item => <NavLink onClick={() => loadService()} {...item} to={item.link.url} exact data-drupal-link-system-path={"node/"+item.link.route_parameters.node} className="is-active sf-with-ul">{item.link.title}<span className="sf-sub-indicator"> »</span></NavLink>)
            :
            null
          }
          <ul className={hoverClass}>
            {
              mainMenu.subtree !== null &&
              mainMenu.subtree !== undefined &&
              mainMenu.subtree.length > 0
              ?
                mainMenu.subtree.map(item => <HorizontalSubmenuItem {...item} key={item.link.weight}/>)
              :
                null
            }
          </ul>
        </li>
      </Router>
    );
  }

}
