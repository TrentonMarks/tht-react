import React from 'react'; // import React
import ResponsiveMenuIconBlock from "./ResponsiveMenuIcon/ResponsiveMenuIconBlock"; // import component
import HeaderLogoBlock from "./HeaderLogo/HeaderLogoBlock"; // import component
import HorizontalMenuBlock from "./HorizontalMenu/HorizontalMenuBlock"; // import component

export default class HeaderRegion extends React.Component {

  render() {
    let mainMenu = this.props.mainMenu;
    let loadService = this.props.loadService;

    return (
      <header id="header">
        <div className="container">
          <div id="header-region">
            <div>
              <ResponsiveMenuIconBlock />
              <HeaderLogoBlock
                loadService={loadService}
              />
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
                    loadService={loadService}
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
