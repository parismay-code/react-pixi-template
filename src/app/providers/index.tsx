import { withSuspense } from "@/shared/lib/react";
import { FullPageError } from "@/widgets/full-page-error";
import { Loader } from "@/widgets/loader";
import { withErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from './query-client-provider';
import { BrowserRouter } from './router-provider';

function Providers() {
		return (
				<QueryClientProvider>
						<BrowserRouter/>
				</QueryClientProvider>
		);
}

const SuspenseProvider = withSuspense(Providers, { fallback: <Loader size="full"/> });

export const Provider = withErrorBoundary(SuspenseProvider, {
		fallbackRender: ({ error }) => <FullPageError error={ error }/>,
});