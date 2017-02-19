import React from 'react';
import IconMenu from 'react-toolbox/lib/menu/IconMenu.js';
import MenuItem from 'react-toolbox/lib/menu/MenuItem.js';

const InventoryMoreMenu = () => (
  <IconMenu caption='More' icon='more_vert' position='topLeft' menuRipple>
    <MenuItem caption='Services' />
    <MenuItem caption='Tenants' />
    <MenuItem caption='User/Projects' />
    <MenuItem caption='Projects/Users' />
    <MenuItem caption='Flavors' />
    <MenuItem caption='Metrics' />
  </IconMenu>
);

export default InventoryMoreMenu;
