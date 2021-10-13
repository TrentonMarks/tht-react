import React from 'react'; // import React
import TestimonialsBlock from "./TestimonialsBlock"; // import component

export default class TestimonialsRegion extends React.Component {

  render() {
    let testimonials = this.props.testimonials;

    return (
      <div id="testimonials" className="testimonials">
        <div className="container">
          <div id="testimonials-region">
            {
              testimonials !== null &&
              testimonials !== undefined
              ?
              <TestimonialsBlock data={testimonials} />
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }

}
