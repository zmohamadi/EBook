import Logo from "@/Theme/Public/Logo"

const Loading = ({assetsPath=""}) => {
    return <>
        <div id="loader" className="preloader-wrapper-4">
            <img src={`${assetsPath}/pixio/images/loading.gif`} alt="" />
        </div>
    </>
}

export default Loading