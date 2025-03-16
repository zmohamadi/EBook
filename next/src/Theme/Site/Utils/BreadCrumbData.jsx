const getBrItems = (local) => {
    let items={
        'fa': [ `/${local}`, 'home' ],
        'products': [ `/${local}/products`, 'products' ],
        'blog': [ `/${local}/blog`, 'blogs' ],
        'about': [ `/${local}/about`, 'about_us' ],
    }
    return items;
}

export { getBrItems };