import React from 'react'; // import React

export default class HorizontalSubmenuItem2 extends React.Component {

  render() {
    let data = this.props;

    return (
      <li className="menu-item">
        <a href={data.link.url} data-drupal-link-system-path={"node/"+data.link.route_parameters.node}>{data.link.title}</a>
      </li>
    );
  }

}
