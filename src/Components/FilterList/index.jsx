'use client';
import Image from 'next/image';
import styles from './FilterList.module.css';
import Close from '../../../public/icons/close.png';

export default function FilterList( props ) {

    function clearFilters(){
        props.setFilters([]);
        props.setCurrentVehicles(props.vehicles);
    }

    return(
        <div className={styles.container}>
            <p>Filtro: {props.filters}</p>
            <button onClick={clearFilters}>
                <Image src={Close} alt='close' width={15}/>
            </button>
        </div>
    );
}