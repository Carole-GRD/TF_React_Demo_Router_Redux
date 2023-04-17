import App from "../App";
import AboutPage from "../pages/about/about.page";
import NotFoundPage from "../pages/errors/not-found.page";
import HomePage from "../pages/home/home.page";
import ProductCreatePage from "../pages/product/pages/product-create.page";
import ProductDetailPage from "../pages/product/pages/product-detail.page";
import ProductListPage from "../pages/product/pages/product-list.page";
import ProductPage from "../pages/product/product.page";
import WeatherPage from "../pages/weather/weather.page";

export const route = [
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            },
            {
                path: 'product',
                element: <ProductPage />,
                children: [
                    {
                        index: true,
                        element: <ProductListPage />
                    },
                    {
                        path: ':productId',
                        element: <ProductDetailPage />
                    },
                    {
                        path: 'create',
                        element: <ProductCreatePage />
                    }
                ]
            },
            {
                path: 'weather',
                element: <WeatherPage />
            }
            
        ]
    }
]
