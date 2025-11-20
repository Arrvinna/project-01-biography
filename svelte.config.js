import vercelAdapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercelAdapter({
      runtime: 'nodejs20.x'
    })
  }
};
