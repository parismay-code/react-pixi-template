import { queryClient } from "@/shared/lib/react-query";
import { QueryClientProvider as TsqQueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";

export function QueryClientProvider({ children }: PropsWithChildren) {
		return <TsqQueryClientProvider client={ queryClient }>
				{ children }
				<ReactQueryDevtools initialIsOpen={ false }/>
		</TsqQueryClientProvider>
}