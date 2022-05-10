import dayjs from "dayjs";
import EventLabel from "./EventLabel";

const Day = ({day, rowIdx, events}) => {
    const event = events.filter(event => {
        return event.date === day.format('YYYY-MM-DD');
    });
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-myGreen text-white font-bold rounded-full w-7"
            : "";
    };
    const grayOutOverMonth = () => {
        return day.format('MM') != ("0" + (new Date().getMonth() + 1)).slice(-2)
            ? "text-gray-400"
            : "";
    };
    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm mt-1">
                        {day.format("ddd").toUpperCase()}
                    </p>
                )}
                <p
                    className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()} ${grayOutOverMonth()}`}
                >
                    {day.format("DD")}
                </p>
            </header>
            {event.map(event => {
                return <EventLabel key={event.date} event={event} />
            })}


        </div>
    );
};

export default Day;