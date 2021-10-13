import React from 'react'; // import React

export default class HeaderPhoneBlock extends React.Component {

  render() {
    let { data } = this.props;

    return (
      <div id="block-headerphone" className="contextual-region block-superfish block-toptopnav">
        <div
          className="basic__body"
          dangerouslySetInnerHTML={{__html: data.attributes.body.value}}
        />
      </div>
    );
  }

}
