import React from 'react'; // import React
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
    let data = this.props;
    let hoverClass = this.state.isHovered ? "menu sub-nav sf-show" : "menu sub-nav sf-hidden";

    return (
      <li className="menu-item menu-item--expanded" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <a href={data.link.url} data-drupal-link-system-path={"node/"+data.link.route_parameters.node} className="is-active sf-with-ul">
          {data.link.title}
          <span className="sf-sub-indicator"> »</span>
        </a>
        <ul className={hoverClass}>
          {
            data.subtree !== null &&
            data.subtree !== undefined &&
            data.subtree.length > 0
            ?
              data.subtree.map(item => <HorizontalSubmenuItem {...item} key={item.link.weight}/>)
            :
              null
          }
        </ul>
      </li>
    );
  }

}
