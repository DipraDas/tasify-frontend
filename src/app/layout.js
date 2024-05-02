'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <AntdRegistry>
              {children}
            </AntdRegistry>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
