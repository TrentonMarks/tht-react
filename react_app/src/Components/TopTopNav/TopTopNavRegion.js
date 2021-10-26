import React from 'react'; // import React
import TopTopNavBlock from "./TopTopNav/TopTopNavBlock"; // import component
import HeaderPhoneBlock from "./HeaderPhone/HeaderPhoneBlock"; // import component

export default class TopTopNavRegion extends React.Component {

  render() {
    let topTopNav = this.props.topTopNav;
    let headerPhone = this.props.headerPhone;
    let loadBasic = this.props.loadBasic;

    return (
      <nav id="top-top-nav" className="menu">
        <div className="container">
          <div>
          {
            topTopNav !== null &&
            topTopNav !== undefined
            ?
            <TopTopNavBlock
              topTopNav={topTopNav}
              loadBasic={loadBasic}
            />
            :
            null
          }
          {
            headerPhone !== null &&
            headerPhone !== undefined
            ?
            <HeaderPhoneBlock headerPhone={headerPhone} />
            :
            null
          }
          </div>
        </div>
      </nav>
    );
  }

}
