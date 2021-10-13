import React from 'react'; // import React
import FooterBlock from "./Menu/FooterBlock"; // import component
import CopyrightBlock from "./Copyright/CopyrightBlock"; // import component

export default class FooterRegion extends React.Component {

  render() {
    let footer = this.props.footer;
    let copyright = this.props.copyright;

    return (
      <footer id="footer">
        <div className="container">
          <div id="footer-region">
            <div>
              {
                footer !== null &&
                footer !== undefined
                ?
                <FooterBlock data={footer} />
                :
                null
              }
              {
                copyright !== null &&
                copyright !== undefined
                ?
                <CopyrightBlock data={copyright} />
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
