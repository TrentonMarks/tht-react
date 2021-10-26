import React from 'react'; // import React
import HorizontalMenuItem from "./HorizontalMenuItem"; // import component

export default class HorizontalMenuBlock extends React.Component {

  render() {
    let mainMenu = this.props.mainMenu;
    let loadService = this.props.loadService;

    return (
      <div id="block-horizontalmenu" className="contextual-region block-responsive-menu block-horizontalmenu">
        <nav className="responsive-menu-block-wrapper">
          <ul id="horizontal-menu" className="horizontal-menu sf-js-enabled sf-shadow sf-menu">
            {
              mainMenu !== null &&
              mainMenu !== undefined &&
              mainMenu.length > 0
              ?
              <HorizontalMenuItem mainMenu={mainMenu} loadService={loadService} />
              :
              null
            }
          </ul>
        </nav>
      </div>
    );
  }

}
