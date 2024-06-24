import adapter from "@sveltejs/adapter-node";

export default {
  kit: {
    // default options are shown
    adapter: adapter(),
    prerender: {
      handleHttpError: 'warn'
    }
  },
};
