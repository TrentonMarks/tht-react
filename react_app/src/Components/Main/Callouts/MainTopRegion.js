import React from 'react'; // import React
import CalloutsBlock from "./CalloutsBlock"; // import component

export default class MainTopRegion extends React.Component {

  render() {
    let callouts = this.props.callouts;

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
