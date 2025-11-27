// src/components/AnimalList.jsx
import { AnimalCard } from './AnimalCard';

export function AnimalList({ animals, onToggleFavorite }) {
    if (animals.length === 0) {
        return (
            <p className="animal-list__empty">
                Ничего не найдено. Измени параметры поиска или добавь новое животное.
            </p>
        );
    }

    return (
        <section className="animal-list">
            {animals.map((animal) => (
                <AnimalCard
                    key={animal.id}
                    animal={animal}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </section>
    );
}
