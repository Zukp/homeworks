import ExpenseFooter from "./ExpenseFooter";
import ExpenseCenter from "./ExpenseCenter";
import ExpenseSection from "./ExpeseSection";
import ExpensePhoto from './ExpensePhoto';
import ExpenseEnd from './ExpenseEnd'
import './ExpesneAll.css';
function ExpenseAll (){
    return (
        <div className="cont-all">
            <ExpenseFooter />
            <ExpenseCenter />
            <ExpenseSection />
            <ExpensePhoto />
            <ExpenseEnd />
            
        </div>
    )
}
export default ExpenseAll