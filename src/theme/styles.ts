export default {
  global: (props: any) => ({
    'html, body': {
      // fontSize: '14px',
      // fontSize: 'sm',
      color: props.colorMode === 'dark' ? 'white' : '#1B1C1E',
      lineHeight: 'tall',
    },
  }),
}
