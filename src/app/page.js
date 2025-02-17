'use client';
import styles from "./page.module.css";
import Header from "@/Components/Header";
import CategoryButton from "@/Components/CategoryButton";
import { categories, vehicles } from "@/service/data";
import Search from "@/Components/Search";
import Card from "@/Components/Card";
import { useState } from "react";
import Footer from "@/Components/Footer";


export default function Home() {

  const [currentVehicles, setCurrentVehicles] = useState(vehicles);
  const [currentCategory, setCurrentCategory] = useState(null)

  const handleSearch = (text) => {
    if (text.length >= 3) {
      const word = text.toLocaleLowerCase();
      const vehiclesFiltered = currentVehicles.filter((vehicle) => {
        return vehicle.brand.toLocaleLowerCase().includes(word) || 
        vehicle.model.toLocaleLowerCase().includes(word) ||
        vehicle.category.toLocaleLowerCase().includes(word)
      });
      setCurrentVehicles(vehiclesFiltered);
    } else {
      setCurrentVehicles(vehicles)
    }
  }

  const filterByCategory = (category) => {
    if (category === currentCategory) {
      setCurrentVehicles(vehicles)
      setCurrentCategory(null)
    } else {
      setCurrentVehicles(vehicles.filter((vehicle) => {return vehicle.category.toLocaleLowerCase() === category.toLocaleLowerCase()}));
      setCurrentCategory(category);
    }
  }
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.categories}>
          {categories.map((categorie) => (<CategoryButton  key={categorie.id} name={categorie.name} icon={categorie.icon} click={filterByCategory}/>))}
        </section>
        <section className={styles.search}>
          <Search handleSearchVehicle={handleSearch} focus={setCurrentVehicles} data={vehicles}/>
        </section>
        <section className={styles.cards}>
          {currentVehicles.map((vehicle) => (<Card 
            key={vehicle.id}
            model={vehicle.model}
            brand={vehicle.brand}
            picture={vehicle.picture}
            value={vehicle.value}
            category={vehicle.category}
          />))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
