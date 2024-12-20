import { pathKeys } from '@/shared/lib/react-router';
import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { HomePage } from './ui';

export const homePageRoute: RouteObject = {
		path: pathKeys.home(),
		element: createElement(HomePage),
};