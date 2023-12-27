import Sidebar from "../Sidebar";
import TableContent from "./Tables/TableContent";
import HistoryContent from "./History/HistoryContent";
// import QueryContent from "./Queries/QueryContent"

function RightSidebar() {
    return (
        <Sidebar className="flex flex-col h-full" isRightSideBar={true}>
            {/* <QueryContent /> */}
            <TableContent />
            <HistoryContent />
        </Sidebar>
    );
}

export default RightSidebar;
