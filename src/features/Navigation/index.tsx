import TopHeader from "./Header";
import Ui from "./Ui";

export default ({ buttonProps }: { buttonProps: any }) => (

    <>
        <TopHeader />
        <Ui cartBtn={buttonProps} />
    </>
)
