'use client';
import Image from 'next/image';
import styles from './CategoryButton.module.css';
import { useState } from 'react';
import Close from '../../../public/icons/close.png';

export default function CategoryButton(props) {


    const handleClick = (category) => {
        props.click(category);
    }
    return(
        <button className={styles.container} onClick={() => handleClick(props.name)}>
            <Image src={props.icon} alt={props.name} width={30} height={30}/>
            {props.name}
        </button>
    );
}