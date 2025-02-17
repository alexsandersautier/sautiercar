'use client';
import Image from 'next/image';
import styles from './Search.module.css';
import Icon from '../../../public/icons/search.png';

export default function Search( props ) {

    return(
        <div className={styles.container}>
            <Image src={Icon} width={30} height={30} alt='search icon'/>
            <input
                type='text'
                onChange={(event) => props.handleSearchVehicle(event.target.value)}
                placeholder='Pesquise um veículo ou categoria'
                onFocus={() => props.focus(props.data)}
            />
        </div>
    );
}