export default {
  root: "client",
  define: {
    __REACT_DEVTOOLS_GLOBAL_HOOK__: { isDisabled: true },
  },
  server: {
    open: true,
  },
  test: {
    environment: "happy-dom",
    watch: false,
  },
};
