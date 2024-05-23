const switchButton = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 'bold', // Normally, it is "semibold"
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  // 3. We can add a new visual variant
  variants: {
    'lg-switch': (props: any) => ({
      color: '#fff',
      bg: 'red',
      colorScheme: 'red',
    }),
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
    // 4. We can override existing variants
    // solid: (props: any) => ({
    //     bg: props.colorMode === 'dark' ? 'brand.primary.300' : 'brand.primary.500',
    // }),
  },
}

export default switchButton
