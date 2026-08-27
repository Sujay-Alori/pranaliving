import { useMemo } from 'react';
import { mediaCategories } from '../../data/residences';
import MediaPlayer from '../../components/MediaPlayer/MediaPlayer';

function resolveCategory(id) {
  const n = parseInt(id, 10);
  if (!Number.isNaN(n) && n >= 1 && n <= mediaCategories.length) {
    return mediaCategories[n - 1];
  }
  const byNum = mediaCategories.find((c) => c.number === String(id).padStart(2, '0'));
  if (byNum) return byNum;
  return null;
}

export default function CategoryPage({ categoryId, onNavigate }) {
  const category = useMemo(() => resolveCategory(categoryId), [categoryId]);

  if (!category) {
    return (
      <section className="category category--notfound">
        <p className="category__notfound-title">This residence could not be found.</p>
        <button type="button" className="category__back" onClick={() => onNavigate('home')}>
          ← Back to residences
        </button>
      </section>
    );
  }

  return (
    <section className="category">
      <div className="category__header">
        <button type="button" className="category__back" onClick={() => onNavigate('home')}>
          ← Back to residences
        </button>
        <p className="category__number">{category.number}</p>
        <h1 className="category__name">{category.name}</h1>
        <p className="category__element">{category.element}</p>
        <p className="category__description">{category.description}</p>
      </div>

      <MediaPlayer category={category} />

      <div className="category__others">
        <p className="category__others-label">Other residences</p>
        <div className="category__others-list">
          {mediaCategories
            .filter((c) => c.id !== category.id)
            .map((c) => (
              <button
                key={c.id}
                type="button"
                className="category__other"
                onClick={() => onNavigate('category', c.number)}
              >
                <span className="category__other-number">{c.number}</span>
                <span className="category__other-name">{c.name}</span>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
