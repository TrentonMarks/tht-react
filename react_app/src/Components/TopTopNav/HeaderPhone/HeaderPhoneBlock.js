import React from 'react'; // import React

export default class HeaderPhoneBlock extends React.Component {

  render() {
    let headerPhone = this.props.headerPhone;

    return (
      <div id="block-headerphone" className="contextual-region block-superfish block-toptopnav">
        <div
          className="basic__body"
          dangerouslySetInnerHTML={{__html: headerPhone.attributes.body.value}}
        />
      </div>
    );
  }

}
