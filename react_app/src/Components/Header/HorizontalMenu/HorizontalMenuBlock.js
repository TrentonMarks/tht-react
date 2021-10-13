import React from 'react'; // import React
import HorizontalMenuItem from "./HorizontalMenuItem"; // import component

export default class HorizontalMenuBlock extends React.Component {

  render() {
    let data = this.props.data;

    return (
      <div id="block-horizontalmenu" className="contextual-region block-responsive-menu block-horizontalmenu">
        <nav className="responsive-menu-block-wrapper">
          <ul id="horizontal-menu" className="horizontal-menu sf-js-enabled sf-shadow sf-menu">
            {
              data !== null &&
              data !== undefined &&
              data.length > 0
              ?
              data.map(item => <HorizontalMenuItem {...item} key={item.link.weight}/>)
              :
              null
            }
          </ul>
        </nav>
      </div>
    );
  }

}
