import React from 'react';

const ListGroup = (props) => {

    const { items, textPropety, valueProperty, selectedItem, onItemSelect } = props;

    return (
    <ul className="list-group">
        { items.map(item => 
        (<li
             onClick={() => onItemSelect(item)} 
             key={item[valueProperty]} 
             className={item === selectedItem ? "list-group-item active" : "list-group-item"}>
             {item[textPropety]}
             </li>))}
    </ul>
    );
};

ListGroup.defaultProps = { 
    textPropety: 'name',
    valueProperty: '_id'
 }

export default ListGroup;