import React from 'react'; // import React

export default class TestimonialsBlock extends React.Component {

  render() {
    let { data } = this.props;

    return (
      <div id="block-testimonials" className="contextual-region block-block-content block-testimonials">
        <div
          className="basic__body quickedit-field"
          dangerouslySetInnerHTML={{__html: data.attributes.body.value}}
        />
      </div>
    );
  }

}
