import React from 'react'; // import React
import TestimonialsBlock from "./TestimonialsBlock"; // import component

export default class TestimonialsRegion extends React.Component {

  render() {
    let testimonials = this.props.testimonials;
    let loadService = this.props.loadService;

    return (
      <div id="testimonials" className="testimonials">
        <div className="container">
          <div id="testimonials-region">
            {
              testimonials !== null &&
              testimonials !== undefined
              ?
              <TestimonialsBlock testimonials={testimonials} loadService={loadService} />
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }

}
