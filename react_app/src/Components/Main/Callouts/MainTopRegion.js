import React from 'react'; // import React
import CalloutsBlock from "./CalloutsBlock"; // import component

export default class MainTopRegion extends React.Component {

  render() {
    let callouts = this.props.callouts;
    let loadService = this.props.loadService;

    return (
      <div id="main-top">
        <div className="container">
          <div>
            {
              callouts !== null &&
              callouts !== undefined
              ?
              <CalloutsBlock
                callouts={callouts}
                loadService={loadService}
              />
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }

}
