import { homePageRoute } from '@/pages/home';
import { GenericError } from '@/shared/lib/fetch';
import { pathKeys } from '@/shared/lib/react-router';
import { createBrowserRouter, redirect, RouterProvider, useRouteError } from 'react-router-dom';

function BubbleError() {
		const error = useRouteError() as GenericError<any>;

		if (error) {
				throw error;
		}

		return null;
}

const router = createBrowserRouter([
		{
				errorElement: <BubbleError/>,
				children: [
						homePageRoute,
						{
								loader: async () => redirect(pathKeys.home()),
								path: '*',
						},
				],
		},
]);

export function BrowserRouter() {
		return <RouterProvider router={ router }/>;
}