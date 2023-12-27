import queries from "../../../../DummyData/queries.json";
import QueryButtons from "./QueryButtons";

function QueryContent() {
    return (
        <section className="flex flex-col">
            <header className="w-full bg-slate-50 py-4 border-b-2 border-solid border-indigo-50 pl-4 text-lg font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                Queries
            </header>
            <div className="dark:bg-gray-600"  style={{ display: 'flex', justifyContent: 'space-between' }}>
                {queries.map(QueryButtons)}
            </div>
        </section>
    );
}

export default QueryContent;
