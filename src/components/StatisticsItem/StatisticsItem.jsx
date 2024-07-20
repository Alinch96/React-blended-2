import styled from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

export const StatisticsItem = props => {
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ color: '#29a14f', size: 30 }}>
        {props.icon}
      </IconContext.Provider>
      <span className={styled.counter}>{props.total}</span>
      <p className={styled.text}>{props.title}</p>
    </li>
  );
};
