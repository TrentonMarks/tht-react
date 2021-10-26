import React from 'react'; // import React
import { withRouter } from 'react-router-dom';

class CalloutsBlock extends React.Component {

  render() {
    let callouts = this.props.callouts;
    let loadService = this.props.loadService;

    let updateRoute = (event) => {
      event.preventDefault();
      let targetLink = event.target.closest('a');
      this.props.history.push(targetLink.getAttribute('href'));
      loadService();
    }

    return (
      <div id="block-flex-callout" className="contextual-region block-block-content block-flex-callout">
        <div
          onClick={(event)=>{updateRoute(event)}}
          className="basic__body"
          dangerouslySetInnerHTML={{__html: callouts.attributes.body.value}}
        />
      </div>
    );
  }

}

export default withRouter(CalloutsBlock);
