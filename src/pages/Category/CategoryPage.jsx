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

  const categoryIndex = mediaCategories.findIndex((c) => c.id === category.id);
  const prevCategory = categoryIndex > 0 ? mediaCategories[categoryIndex - 1] : null;
  const nextCategory = categoryIndex < mediaCategories.length - 1 ? mediaCategories[categoryIndex + 1] : null;

  return (
    <section className="category">
      <div className="category__header">
        <button type="button" className="category__back" onClick={() => onNavigate('flats')}>
          ← Back to residences
        </button>
        <p className="category__number">{category.number}</p>
        <h1 className="category__name">{category.name}</h1>
        <p className="category__element">{category.element}</p>
        <p className="category__description">{category.description}</p>
      </div>

      <MediaPlayer category={category} />

      <div className="category__nav">
        {prevCategory ? (
          <button
            type="button"
            className="category__nav-btn category__nav-btn--prev"
            onClick={() => onNavigate('category', prevCategory.number)}
          >
            <span className="category__nav-label">PREVIOUS</span>
            <span className="category__nav-name">{prevCategory.name}</span>
            <span className="category__nav-element">{prevCategory.element}</span>
          </button>
        ) : <div />}
        {nextCategory ? (
          <button
            type="button"
            className="category__nav-btn category__nav-btn--next"
            onClick={() => onNavigate('category', nextCategory.number)}
          >
            <span className="category__nav-label">NEXT</span>
            <span className="category__nav-name">{nextCategory.name}</span>
            <span className="category__nav-element">{nextCategory.element}</span>
          </button>
        ) : <div />}
      </div>

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
