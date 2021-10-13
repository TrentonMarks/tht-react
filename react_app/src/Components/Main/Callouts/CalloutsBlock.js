import React from 'react'; // import React

export default class CalloutsBlock extends React.Component {

  render() {
    let data = this.props.callouts;
    
    return (
      <div id="block-flex-callout" className="contextual-region block-block-content block-flex-callout">
      <div
        className="basic__body"
        dangerouslySetInnerHTML={{__html: data.attributes.body.value}}
      />
      </div>
    );
  }

}
