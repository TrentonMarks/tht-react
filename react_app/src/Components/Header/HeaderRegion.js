import React from 'react'; // import React
import ResponsiveMenuIconBlock from "./ResponsiveMenuIcon/ResponsiveMenuIconBlock"; // import component
import HeaderLogoBlock from "./HeaderLogo/HeaderLogoBlock"; // import component
import HorizontalMenuBlock from "./HorizontalMenu/HorizontalMenuBlock"; // import component

export default class HeaderRegion extends React.Component {

  render() {
    let mainMenu = this.props.mainMenu;
    let service = this.props.service;
    let loadService = this.props.loadService;
    let updateService = this.props.updateService;

    return (
      <header id="header">
        <div className="container">
          <div id="header-region">
            <div>
              <ResponsiveMenuIconBlock />
              <HeaderLogoBlock />
            </div>
          </div>
          <nav id="service-menu" className="menu">
            <div className="container">
              <div>
                {
                  mainMenu !== null &&
                  mainMenu !== undefined
                  ?
                  <HorizontalMenuBlock
                    mainMenu={mainMenu}
                    service={service}
                    loadService={loadService}
                    updateService={updateService}
                  />
                  :
                  null
                }
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }

}
