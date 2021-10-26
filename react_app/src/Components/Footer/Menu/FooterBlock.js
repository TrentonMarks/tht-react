import React from 'react'; // import React
import { withRouter } from 'react-router-dom';

class FooterBlock extends React.Component {

  render() {
    let footer = this.props.footer;
    let loadService = this.props.loadService;

    let updateRoute = (event) => {
      event.preventDefault();
      let targetLink = event.target.closest('a');
      this.props.history.push(targetLink.getAttribute('href'));
      loadService();
    }

    return (
      <div id="block-footer" className="contextual-region block-block-content block-footer">
        <div
          onClick={(event)=>{updateRoute(event)}}
          className="basic__body"
          dangerouslySetInnerHTML={{__html: footer.attributes.body.value}}
        />
      </div>
    );
  }

}

export default withRouter(FooterBlock);
