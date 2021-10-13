import React from 'react'; // import React

export default class FooterBlock extends React.Component {

  render() {
    let { data } = this.props;
    
    return (
      <div id="block-footer" className="contextual-region block-block-content block-footer">
        <div
          className="basic__body"
          dangerouslySetInnerHTML={{__html: data.attributes.body.value}}
        />
      </div>
    );
  }

}
