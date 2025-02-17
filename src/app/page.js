'use client';
import styles from "./page.module.css";
import Header from "@/Components/Header";
import CategoryButton from "@/Components/CategoryButton";
import { categories, vehicles, messageWhatsapp } from "@/service/data";
import Search from "@/Components/Search";
import Card from "@/Components/Card";
import { use, useState } from "react";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Whatsapp from "../../public/icons/whatsapp.png";
import Link from "next/link";
import FilterList from "@/Components/FilterList";

export default function Home() {

  const [currentVehicles, setCurrentVehicles] = useState(vehicles);
  const [currentCategory, setCurrentCategory] = useState(null)
  const [filters, setFilters] = useState([]);
  const [clicked, setClicled] = useState(false);

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
      setFilters([]);
    } else {
      setCurrentVehicles(vehicles.filter((vehicle) => { return vehicle.category.toLocaleLowerCase() === category.toLocaleLowerCase() }));
      setCurrentCategory(category);
      setFilters([category + ";"]);
    }
  }

  const textWhatsapp = messageWhatsapp.split(" ").join("%20");
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.categories}>
          {categories.map((category) => (<CategoryButton key={category.id} name={category.name} icon={category.icon} click={filterByCategory} />))}
        </section>
        <section className={styles.search}>
          <Search handleSearchVehicle={handleSearch} focus={setCurrentVehicles} data={vehicles} />
        </section>
        <section className={styles.filters}>
          <FilterList filters={filters} setFilters={setFilters} vehicles={vehicles} setCurrentVehicles={setCurrentVehicles} />
        </section>
        <section className={styles.cards}>
          {
            currentVehicles.length < 1 ?
              <p>Nenhum veículo cadastrado</p> :
              currentVehicles.map((vehicle) => (<Card
                key={vehicle.id}
                model={vehicle.model}
                brand={vehicle.brand}
                picture={vehicle.picture}
                value={vehicle.value}
                category={vehicle.category}
              />))
          }
        </section>
      </main>
      <Footer />
      <div className={styles.whatsapp}>
        <Link href={`https://wa.me/5549988139463?text=${textWhatsapp}`} target="_blank">
          <Image className={styles.whatsapp_icon} src={Whatsapp} alt="Botão do Whatsapp" width={48} height={48} />
        </Link>
      </div>
    </div>
  );
}
