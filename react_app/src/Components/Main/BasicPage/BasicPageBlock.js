import React from 'react'; // import React
import ContactUsPageBlock from "./ContactUsPageBlock"; // import component


export default class BasicPageBlock extends React.Component {

  render() {
    let basic = this.props.basic;
    let service = this.props.service;
    let isContactUsPage = this.props.isContactUsPage;
    let pageBody, pageTitle, currentPath;
    for (let i = 0; i < basic.length; i++) {
      if (basic[i].attributes.path.alias === window.location.pathname) {
        pageTitle = basic[i].attributes.title;
        pageBody = basic[i].attributes.body.value;
        currentPath = basic[i].attributes.path.alias;
      } else if (window.location.pathname === '/') {
        pageTitle = basic[0].attributes.title;
        pageBody = basic[0].attributes.body.value;
        currentPath = basic[0].attributes.path.alias;
      } else {
        for (let i = 0; i < service.length; i++) {
          if (service[i].attributes.path.alias === window.location.pathname) {
            pageTitle = service[i].attributes.title;
            pageBody = service[i].attributes.body.value;
            currentPath = service[i].attributes.path.alias;
          }
        }
      }
    }

    return (
      <div>
      {isContactUsPage
        ?
        <ContactUsPageBlock />
        :
        <div>
          <div id="block-th-base2-page-title" className="block-system block-th-base2-content">
            <h1>
              <span property="schema:name" dangerouslySetInnerHTML={{__html: pageTitle}} ></span>
            </h1>
          </div>
          <div id="block-th-base2-content" className="block-system block-th-base2-content">
            <article data-history-node-id="8" className="contextual-region node" about={currentPath} typeof="schema:WebPage">
              <div className="content">
                <div property="schema:text" className="page__body">
                  <div dangerouslySetInnerHTML={{__html: pageBody}} />
                </div>
              </div>
            </article>
          </div>
        </div>
      }

      </div>
    );
  }

}
