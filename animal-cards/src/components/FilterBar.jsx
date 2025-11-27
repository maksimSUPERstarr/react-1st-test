// src/components/FilterBar.jsx
export function FilterBar({
    searchQuery,
    onSearchChange,
    showOnlyFavorites,
    onToggleFavorites,
}) {
    const handleSearchChange = (event) => {
        onSearchChange(event.target.value);
    };

    const handleFavoritesChange = (event) => {
        onToggleFavorites(event.target.checked);
    };

    return (
        <section className="filter-bar">
            <input
                type="text"
                placeholder="Поиск по имени или виду..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="filter-bar__search"
            />
            <label className="filter-bar__checkbox-label">
                <input
                    type="checkbox"
                    checked={showOnlyFavorites}
                    onChange={handleFavoritesChange}
                />
                Показать только избранных
            </label>
        </section>
    );
}
