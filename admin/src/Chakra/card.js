
const Card = {
    // The styles all Cards have in common
    baseStyle: {
        maxW: "1xs",
        borderWidth: "1px",
        borderRadiues: "lg",
        overflow: "hidden"
    },
    // Two variants: rounded and smooth
    variants: {
        rounded: {
            boxShadow: 'xl',
        },
        smooth: {
            boxShadow: 'md',
        },
    },
    // The default variant value
    defaultProps: {
        variant: 'smooth',
    },
}

export default Card;