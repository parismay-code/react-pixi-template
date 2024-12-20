import { env } from '@/shared/lib/env';

export function baseUrl(path: string) {
		const url = env('VITE_SERVER_NAME', 'localhost');
		const port = env('VITE_BACKEND_PORT', '9000');
		const method = port === '443' ? 'https' : 'http';

		return `${ method }://${ url }:${ port }/api${ path }`;
}

export type { UnexpectedErrorDto } from './types';