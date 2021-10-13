import React from 'react'; // import React
import BasicPageBlock from "./BasicPageBlock"; // import component

export default class BasicPageRegion extends React.Component {

  render() {
    let basic = this.props.basic;
    let service = this.props.service;
    let isHomePage = this.props.isHomePage;
    let isContactUsPage = this.props.isContactUsPage;

    return (
      <section id="content">
        <div id="content-area">
          {
            basic !== null &&
            basic !== undefined &&
            service !== null &&
            service !== undefined
            ?
            <BasicPageBlock
              basic={basic}
              service={service}
              isHomePage={isHomePage}
              isContactUsPage={isContactUsPage}
            />
            :
            null
          }
        </div>
      </section>
    );
  }

}
