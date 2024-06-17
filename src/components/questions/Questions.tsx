import { QuestionsItem } from "./QuestionsItem"
import { QuestionsTitle } from "./QuestionsTitle"


export const Questions = () => {
    return (
        <div className="container">
            <QuestionsTitle/>
             <QuestionsItem/>
        </div>
    )
}