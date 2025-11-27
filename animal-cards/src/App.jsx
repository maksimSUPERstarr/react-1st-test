// src/App.jsx
import { useEffect, useState } from 'react';
import { initialAnimals } from './data/animals';
import { AnimalList } from './components/AnimalList';
import { FilterBar } from './components/FilterBar';
import { AddAnimalForm } from './components/AddAnimalForm';
import './App.css';

const STORAGE_KEY = 'animal-cards-data';

export default function App() {
  const [animals, setAnimals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // читаем из localStorage при первой загрузке
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setAnimals(JSON.parse(saved));
    } else {
      setAnimals(initialAnimals);
    }
  }, []);

  // сохраняем в localStorage при каждом изменении списка
  useEffect(() => {
    if (animals.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(animals));
    }
  }, [animals]);

  const handleToggleFavorite = (id) => {
    setAnimals((prev) =>
      prev.map((animal) =>
        animal.id === id
          ? { ...animal, isFavorite: !animal.isFavorite }
          : animal
      )
    );
  };

  const handleAddAnimal = (newAnimal) => {
    setAnimals((prev) => [
      ...prev,
      {
        ...newAnimal,
        id: Date.now(),
        isFavorite: false,
      },
    ]);
  };

  const filteredAnimals = animals.filter((animal) => {
    const matchesSearch =
      animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.species.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFavorite = showOnlyFavorites ? animal.isFavorite : true;

    return matchesSearch && matchesFavorite;
  });

  return (
    <div className="app">
      <h1 className="app__title">Карточки животных(как на озон)</h1>

      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showOnlyFavorites={showOnlyFavorites}
        onToggleFavorites={setShowOnlyFavorites}
      />

      <AddAnimalForm onAddAnimal={handleAddAnimal} />

      <AnimalList
        animals={filteredAnimals}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
