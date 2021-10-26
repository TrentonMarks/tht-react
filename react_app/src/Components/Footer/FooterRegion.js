import React from 'react'; // import React
import FooterBlock from "./Menu/FooterBlock"; // import component
import CopyrightBlock from "./Copyright/CopyrightBlock"; // import component

export default class FooterRegion extends React.Component {

  render() {
    let footer = this.props.footer;
    let copyright = this.props.copyright;
    let loadService = this.props.loadService;

    return (
      <footer id="footer">
        <div className="container">
          <div id="footer-region">
            <div>
              {
                footer !== null &&
                footer !== undefined
                ?
                <FooterBlock footer={footer} loadService={loadService} />
                :
                null
              }
              {
                copyright !== null &&
                copyright !== undefined
                ?
                <CopyrightBlock copyright={copyright} />
                :
                null
              }
            </div>
          </div>
        </div>
      </footer>
    );
  }

}
