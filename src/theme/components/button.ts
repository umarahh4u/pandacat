const button = {
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
    'lg-brand': (props: any) => ({
      h: { base: '2rem', md: '3.5rem' },
      w: { base: '8rem', md: '13.25rem' },
      fontSize: { base: '.875rem', md: '1.25rem' },
      fontWeight: { base: 'normal', md: 'semibold' },
      color: '#fff',
      borderRadius: { base: '7px', md: '10px' },
      bg: props.colorMode === 'light' ? 'primary' : 'primaryDark',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        bg: 'brand.primary.600',
      },
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

export default button
