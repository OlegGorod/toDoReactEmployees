import './employees-list-item.css';


const EmployeesListItem = (props) => {

    const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = props;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like'
    }

    return (

        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleIncrease}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={onToggleRise}
                    className="btn-cookie btn-sm ">
                    <i className="fa-solid fa-dollar-sign"></i>
                </button>

                <button type="button"
                    onClick={onDelete}
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem;