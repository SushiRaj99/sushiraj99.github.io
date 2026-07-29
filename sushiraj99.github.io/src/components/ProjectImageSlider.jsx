import { useState } from 'react';

export default function ProjectImageSlider({ images, title }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const perPage = 2;
  const total = images.length;
  const maxIndex = Math.max(0, total - perPage);
  const visible = images.slice(index, index + perPage);

  const prev = () => setIndex(i => Math.max(0, i - perPage));
  const next = () => setIndex(i => Math.min(maxIndex, i + perPage));

  const showNav = total > perPage;

  return (
    <div className="slider">
      <div className="slider__track">
        {visible.map((src, i) => (
          <div key={index + i} className="slider__img-wrap">
            <img src={src} alt={`${title} ${index + i + 1}`} />
          </div>
        ))}
        {visible.length < perPage && (
          <div className="slider__img-wrap slider__img-wrap--empty" />
        )}
      </div>
      {showNav && (
        <div className="slider__nav">
          <button onClick={prev} disabled={index === 0} aria-label="Previous">←</button>
          <span className="slider__counter">{Math.floor(index / perPage) + 1} / {Math.ceil(total / perPage)}</span>
          <button onClick={next} disabled={index >= maxIndex} aria-label="Next">→</button>
        </div>
      )}
    </div>
  );
}
