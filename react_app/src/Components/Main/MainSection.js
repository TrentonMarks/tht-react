import React from 'react'; // import React
import MainTopRegion from "./Callouts/MainTopRegion"; // import component
import BasicPageRegion from "./BasicPage/BasicPageRegion"; // import component
import SidebarRegion from "./Sidebar/SidebarRegion"; // import component

export default class MainSection extends React.Component {

  render() {
    let callouts = this.props.callouts;
    let basic = this.props.basic;
    let service = this.props.service;
    let loadService = this.props.loadService;
    let sidebar = this.props.sidebar;
    let webform = this.props.webform;
    let isHomePage = this.props.isHomePage;
    let isContactUsPage = this.props.isContactUsPage;

    return (
      <div id="main">
        <div className="container">
          {/* If data exists for Callouts */
            isHomePage
            ?
            /* Render Main Top region */
            <MainTopRegion
              callouts={callouts}
              loadService={loadService}
            />
            :
            null
          }
          <div id="content-wrapper">
            <BasicPageRegion
              basic={basic}
              service={service}
              isHomePage={isHomePage}
              isContactUsPage={isContactUsPage}
              loadService={loadService}
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
