// src/components/AnimalCard.jsx
export function AnimalCard({ animal, onToggleFavorite }) {
    const { id, name, species, description, imageUrl, isFavorite } = animal;

    const handleFavoriteClick = () => {
        onToggleFavorite(id);
    };

    return (
        <article className="animal-card">
            <img src={imageUrl} alt={name} className="animal-card__image" />
            <div className="animal-card__content">
                <h2 className="animal-card__title">{name}</h2>
                <p className="animal-card__species">{species}</p>
                <p className="animal-card__description">{description}</p>
            </div>
            <button
                type="button"
                className={
                    'animal-card__favorite-btn' +
                    (isFavorite ? ' animal-card__favorite-btn--active' : '')
                }
                onClick={handleFavoriteClick}
            >
                {isFavorite ? 'Убрать из избранного' : 'В избранное'}
            </button>
        </article>
    );
}
