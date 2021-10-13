import React from 'react'; // import React
import HorizontalSubmenuItem2 from "./HorizontalSubmenuItem2"; // import component

export default class HorizontalSubmenuItem extends React.Component {
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
    let data = this.props;
    let hoverClass = this.state.isHovered ? "menu sub-nav sf-show" : "menu sub-nav sf-hidden";
    let containsMenu = data.has_children ? "menu-item menu-item--expanded" : "menu-item";

    return (
      <li className={containsMenu} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <a href={data.link.url} data-drupal-link-system-path={"node/"+data.link.route_parameters.node}>
          {data.link.title}
          {
            data.has_children
            ?
              <span className="sf-sub-indicator"> »</span>
            :
              null
          }
        </a>
        {
          data.has_children
          ?
          <ul className={hoverClass}>
            {data.subtree.map(item => <HorizontalSubmenuItem2 {...item} key={item.link.weight}/>)}
          </ul>
          :
          null
        }
      </li>
    );
  }

}
