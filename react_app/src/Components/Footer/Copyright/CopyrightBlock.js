import React from 'react'; // import React

export default class CopyrightBlock extends React.Component {

  render() {
    let { data } = this.props;

    return (
      <div id="block-copyright--2" className="contextual-region block-block-content block-copyright--2">
        {
          <div
          className="basic__body"
          dangerouslySetInnerHTML={{__html: data.attributes.body.value}}
          />
        }
      </div>
    );
  }

}
