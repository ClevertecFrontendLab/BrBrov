import KitchenCardType from './KitchenCardType';
import KitchenMenuType from './KitchenMenuType';

interface KitchenDataType {
    name: string;
    description: string;
    cards: Array<KitchenCardType>;
    menu: Array<KitchenMenuType>;
}

export default KitchenDataType;
