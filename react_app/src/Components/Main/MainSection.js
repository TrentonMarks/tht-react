import React from 'react'; // import React
import MainTopRegion from "./Callouts/MainTopRegion"; // import component
import BasicPageRegion from "./BasicPage/BasicPageRegion"; // import component
import SidebarRegion from "./Sidebar/SidebarRegion"; // import component

export default class MainSection extends React.Component {

  render() {
    let callouts = this.props.callouts;
    let basic = this.props.basic;
    let service = this.props.service;
    let sidebar = this.props.sidebar;
    let webform = this.props.webform;
    let isHomePage = this.props.isHomePage;
    let isContactUsPage = this.props.isContactUsPage;

    return (
      <div id="main">
        <div className="container">
          <MainTopRegion
            callouts={callouts}
          />
          <div id="content-wrapper">
            <BasicPageRegion
              basic={basic}
              service={service}
              isHomePage={isHomePage}
              isContactUsPage={isContactUsPage}
            />
            {isContactUsPage
              ?
              null
              :
              <SidebarRegion
                sidebar={sidebar}
                webform={webform}
              />
            }
          </div>
        </div>
      </div>
    );
  }

}
