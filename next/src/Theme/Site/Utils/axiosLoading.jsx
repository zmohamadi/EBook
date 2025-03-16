export const axiosLoading = ({assetsPath=""}) => {
    alert(88);
    return <>
        <div id="loader" className="preloader-wrapper-4">
            <img src={`${assetsPath}/pixio/images/loading.gif`} alt="" />
        </div>
    </>
}