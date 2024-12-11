import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании NoName</h1>
            <h2>Общее число сотрудников: {employees} </h2>
            <h2>Премию получат: {increased} </h2>
        </div>
    )
}

export default AppInfo;