import SubMenuItemType from './SubMenuType';

interface MenuItemType extends SubMenuItemType {
    submenu: Array<SubMenuItemType>;
}

export default MenuItemType;
