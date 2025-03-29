import { ProductProvider } from '@/Theme/Site/ShopTools/Context/ProductContext';

const layou = ({children}) => {
    return <ProductProvider>
        {children}
    </ProductProvider>
}

export default layou;