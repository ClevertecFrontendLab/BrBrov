import { createIcon, IconProps } from '@chakra-ui/react';

const FryingPanIcon: React.FC<IconProps> = createIcon({
    displayName: 'FryingPanIcon',
    path: (
        <>
            <rect width='24' height='24' fill='url(#fryingpan_icon)' />
            <image
                id='fryingpan_icon'
                width='16'
                height='16'
                preserveAspectRatio='none'
                href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVR4nO3aPa9MURSH8cdLaBSIaIWKQkOjuqFQUOjFTSQKnUIkEoX4BkSLRqIUiU/gpaUVEoVvQMKNCGHLSeaWe27BnLXWOc8vWd1ksvf6zz5rzpwBSZIkSZIkSZIkSZI0aa1TMoB5aJ4AA5i15gkwgFl/otuKXz87BhDMAIIZQDADCGYAwQwgmAEEM4BgBhDMAIIZQDADCGYAwQwgmAEEM4BgBhDMAIIZQDADCFYlgN3AryXv9z9rVFUCODlS8w2g48pUA6jivgHEemkAcbYBnw0gzqFO838AOwPXNRsXOgG8iV7YXNzuBPCIBO6OeG1syeoaCVxK0IgWVGskcDRBI1pA/QH2ksB24GuChrSR6xOJvE7QkDZyPSORewka0kauOySy3lnkK+p739nbWRI51lnkt8WMqGoP8LuztwMksmwQD9+SqlqrMIC3GsTDfUJV1zt7ekpCvUE83ClX9aSzp1skNMVB/KHCAN5qEA+zYRf17KsygDftWDKIL1PPzUoDeNPzzqI3gKvAfvI7CNwAfnb28oDELia4Q20rrjMkNlyG3iVoUltRDQ/m0zuxeFbaJlZfgMMUcQ74PrHmn6KY48DbBM1r/1gvgCMU/j/NeeAx8LHIqdhY/AL6EDgd3UBJkiRJkiRJkiSJ2fgLtf6eqlr3ZxsAAAAASUVORK5CYII='
            />
        </>
    ),
    defaultProps: {
        viewBox: '-4 -4 24 24',
        width: '24px',
        height: '24px',
    },
});

export default FryingPanIcon;
