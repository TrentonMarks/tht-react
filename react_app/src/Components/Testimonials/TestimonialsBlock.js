import React from 'react'; // import React
import { withRouter } from 'react-router-dom';

class TestimonialsBlock extends React.Component {

  render() {
    let testimonials = this.props.testimonials;
    let loadService = this.props.loadService;

    let updateRoute = (event) => {
      event.preventDefault();
      let targetLink = event.target.closest('a');
      this.props.history.push(targetLink.getAttribute('href'));
      loadService();
    }

    return (
      <div id="block-testimonials" className="contextual-region block-block-content block-testimonials">
        <div
          onClick={(event)=>{updateRoute(event)}}
          className="basic__body quickedit-field"
          dangerouslySetInnerHTML={{__html: testimonials.attributes.body.value}}
        />
      </div>
    );
  }

}

export default withRouter(TestimonialsBlock);
