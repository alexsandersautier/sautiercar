import Image from 'next/image';
import styles from './Card.module.css';

export default function Card(props){
    return(
        <div className={styles.card}>
            <Image className={styles.img} src={props.picture} alt={props.model}/>
            <h3>{props.brand} - {props.model}</h3>
            <p><span>{props.category}</span></p>
            <p>{props.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </div>
    );
}