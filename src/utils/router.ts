import { routeTree } from '@/routeTree.gen';
import { queryClient } from '@/utils/query';
import { createRouter } from '@tanstack/react-router';

export const router = createRouter({
	routeTree,
	context: { queryClient, session: null },
	defaultPreload: 'intent',
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
});
