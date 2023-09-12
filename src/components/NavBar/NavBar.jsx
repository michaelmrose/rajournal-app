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

<NavigationMenu.Item className="brandItem">
    <NavigationMenu.Link className="NavigationMenuLink">
      <Text weight="bold">RAJ</Text>
    </NavigationMenu.Link>
</NavigationMenu.Item>

<NavigationMenu.Item className="navItem">
  <Link to="/today">
    <NavigationMenu.Link className="NavigationMenuLink">
      <Text weight="bold">Today</Text>
    </NavigationMenu.Link>
  </Link>
</NavigationMenu.Item>



<NavigationMenu.Item className="navItem ">
  <Link to="/history">
    <NavigationMenu.Link className="NavigationMenuLink">
      <Text weight="bold">History</Text>
    </NavigationMenu.Link>
  </Link>
</NavigationMenu.Item>
{/* <NavigationMenu.Item className="navItem">
  <Link to="/notes">
    <NavigationMenu.Link className="NavigationMenuLink">
      <Text weight="bold">Notes</Text>
    </NavigationMenu.Link>
  </Link>
</NavigationMenu.Item> */}


<NavigationMenu.Item className="navItem">
  <Link to="/graph">
    <NavigationMenu.Link className="NavigationMenuLink">
      <Text weight="bold">Graph</Text>
    </NavigationMenu.Link>
  </Link>
</NavigationMenu.Item>

<NavigationMenu.Item onClick={handleLogOut} className="logoutMenu">
    <NavigationMenu.Link className="NavigationMenuLink">
      <Text weight="bold">Logout</Text>
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