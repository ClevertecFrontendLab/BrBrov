import { createIcon, IconProps } from '@chakra-ui/react';

const BurgerIcon: React.FC<IconProps> = createIcon({
    displayName: 'BurgerIcon',
    path: <path d='M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z' fill='black' />,
    defaultProps: {
        viewBox: '0 0 16 12',
        width: '16px',
        height: '12px',
    },
});

export default BurgerIcon;
