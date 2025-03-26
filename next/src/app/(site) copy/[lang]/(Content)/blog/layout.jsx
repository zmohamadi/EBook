import { BlogProvider } from '@/Theme/Site/ShopTools/Context/BlogContext';

const layou = ({children}) => {
    return <BlogProvider>
        {children}
    </BlogProvider>
}

export default layou;