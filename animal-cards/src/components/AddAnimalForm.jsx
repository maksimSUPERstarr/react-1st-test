// src/components/AddAnimalForm.jsx
import { useState } from 'react';

const INITIAL_FORM = {
    name: '',
    species: '',
    description: '',
    imageUrl: '',
};

export function AddAnimalForm({ onAddAnimal }) {
    const [form, setForm] = useState(INITIAL_FORM);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.name.trim() || !form.species.trim()) {
            alert('Имя и вид обязательны');
            return;
        }

        onAddAnimal(form);
        setForm(INITIAL_FORM);
    };

    return (
        <section className="add-animal">
            <h2 className="add-animal__title">Добавить новое животное</h2>
            <form onSubmit={handleSubmit} className="add-animal__form">
                <input
                    name="name"
                    placeholder="Имя"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    name="species"
                    placeholder="Вид"
                    value={form.species}
                    onChange={handleChange}
                />
                <input
                    name="imageUrl"
                    placeholder="Ссылка на изображение(например на фотку из пинтереста)"
                    value={form.imageUrl}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="что можете сказать о нем"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                />
                <button type="submit">Сохранить</button>
            </form>
        </section>
    );
}
