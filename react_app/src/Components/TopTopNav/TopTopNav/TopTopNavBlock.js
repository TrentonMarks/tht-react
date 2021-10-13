import React from 'react'; // import React
import TopTopNavItem from "./TopTopNavItem"; // import component

export default class TopTopNavBlock extends React.Component {
  constructor(){
    super();
    this.state = {
      toggleOn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ toggleOn: !this.state.toggleOn });
  }

  render() {
    let data = this.props.data;
    let className;
    if (this.state.toggleOn) {
      className = 'menu sf-menu sf-top-top-nav sf-style-none sf-accordion sf-expanded'
    } else {
      className = className = 'menu sf-menu sf-top-top-nav sf-style-none sf-accordion sf-expanded display-none';
    }

    return (
      <div id="block-toptopnav" className="contextual-region block-superfish block-toptopnav" onClick={this.handleClick}>
        <div className="sf-accordion-toggle sf-style-none">
          <button id="superfish-top-top-nav-toggle">
            <span>Company Info</span>
          </button>
        </div>

        <ul id="superfish-top-top-nav-accordion" className={className}>
          <li id="top-top-nav-menu-link-contentf5e45d59-7c62-43fc-9cf2-b2f6c0ce448f-accordion" className="active-trail sf-depth-1 sf-no-children">
            <a href="/" className="is-active sf-depth-1">Home</a>
          </li>
          <li id="top-top-nav-menu-link-content0a793629-19b9-42e8-9284-1b99ed113694-accordion" className="sf-depth-1 sf-no-children">
            <a href="/areas-served" className="sf-depth-1">Areas Served</a>
          </li>
          <li id="top-top-nav-menu-link-contentb1c31870-d49a-40ff-abc2-3acfe7d99053-accordion" className="sf-depth-1 sf-no-children">
            <a href="/equipment" className="sf-depth-1">Equipment</a>
          </li>
          <li id="top-top-nav-menu-link-contentf3be7255-7a7a-42d9-98b5-e6bbd9c84a41-accordion" className="sf-depth-1 sf-no-children">
            <a href="/about-us" className="sf-depth-1">About Us</a>
          </li>
          <li id="top-top-nav-menu-link-content2ea01929-3a50-402a-a2e5-c1d04c7a9071-accordion" className="sf-depth-1 sf-no-children">
            <a href="/contact-us" className="sf-depth-1">Contact Us</a>
          </li>
        </ul>

        <ul id="superfish-top-top-nav" className="menu sf-menu sf-top-top-nav sf-horizontal sf-style-none sf-js-enabled sf-shadow">
          {
            data !== null &&
            data !== undefined &&
            data.length > 0
            ?
            data.map(item => <TopTopNavItem {...item} key={item.link.weight}/>)
            :
            null
          }
        </ul>
      </div>
    );
  }

}
