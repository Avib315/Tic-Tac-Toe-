import { BackButton } from "../../components/BackButton/backButton";
import { Box } from "../../components/Box/box";
import { CodeDisplay } from "../../components/CodeDisplay/codeDisplay";
import Loading from "../../components/Loading/loading";
import "./createNewGamePage.scss";
export const CreateNewGamePage = ({ }) => {
    return (
        <div className="CreateNewGamePage">
        <BackButton />
<CodeDisplay/>
<Loading/>
        </div>
          
    )
}