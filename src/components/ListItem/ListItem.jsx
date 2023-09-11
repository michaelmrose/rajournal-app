import React from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li className={classNames('ListItem', className)}>
    <NavigationMenu.Link asChild>
      <Link className="ListItemLink" {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </Link>
    </NavigationMenu.Link>
  </li>
));

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListItem;