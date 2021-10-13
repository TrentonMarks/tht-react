import React from 'react'; // import React
import SidebarBlock from "./SidebarBlock"; // import component

export default class SidebarRegion extends React.Component {

  render() {
    let sidebar = this.props.sidebar;
    let webform = this.props.webform;

    return (
      <aside id="sidebar-second" className="column second">
        <div>
          {
            sidebar !== null &&
            sidebar !== undefined &&
            webform !== null &&
            webform !== undefined
            ?
            <SidebarBlock
              sidebar={sidebar}
              webform={webform}
            />
            :
            null
          }
        </div>
      </aside>
    );
  }

}
