import SubMenuItemType from './SubMenuType';

interface MenuItemType extends Pick<SubMenuItemType, 'name'> {
    submenu: Array<SubMenuItemType>;
    icon: React.FC;
}

export default MenuItemType;
