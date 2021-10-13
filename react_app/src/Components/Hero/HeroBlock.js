import React from 'react'; // import React

export default class HeroBlock extends React.Component {

  render() {
    let { data } = this.props;
    
    return (
      <div id="block-hero" className="contextual-region block-block-content block-hero">
        <div
          className="basic__body"
          dangerouslySetInnerHTML={{__html: data.attributes.body.value}}
        />
      </div>
    );
  }

}
