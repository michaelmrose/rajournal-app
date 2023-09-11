import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import ListItem from "../ListItem/ListItem"
import "./style.css"

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Flex, Text, Button, Box } from '@radix-ui/themes';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';



export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>

    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">


<NavigationMenu.Item>
  <Link to="/today">
    <NavigationMenu.Link className="NavigationMenuLink">
      Today
    </NavigationMenu.Link>
  </Link>
</NavigationMenu.Item>



<NavigationMenu.Item>
  <Link to="/history">
    <NavigationMenu.Link className="NavigationMenuLink">
      History
    </NavigationMenu.Link>
  </Link>
</NavigationMenu.Item>

<NavigationMenu.Item>
  <Link to="/notes">
    <NavigationMenu.Link className="NavigationMenuLink">
      Notes
    </NavigationMenu.Link>
  </Link>
</NavigationMenu.Item>


<NavigationMenu.Item>
  <Link to="/graph">
    <NavigationMenu.Link className="NavigationMenuLink">
      Graph
    </NavigationMenu.Link>
  </Link>
</NavigationMenu.Item>

<NavigationMenu.Item onClick={handleLogOut}>
    <NavigationMenu.Link className="NavigationMenuLink">
      Logout
    </NavigationMenu.Link>
</NavigationMenu.Item>


        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>


</>
  );
}