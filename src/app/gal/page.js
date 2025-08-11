'use client';
import Image from 'next/image';
import './GalleryCard2.css';

const images = Array.from({ length: 40 }, (_, i) => ({
  src: `/assets/gallery/arena/1.jpg`,
  group: getGroup(i),
}));

function getGroup(index) {
  const row = Math.floor(index / 5);
  const col = index % 5;

  if (row < 2 && col < 3) return 'blue';
  if (row < 3 && col >= 3) return 'red';
  if (row >= 2 && row < 5 && col < 3) return 'pink';
  if (row >= 3 && row < 5 && col >= 3) return 'green';
  if (row >= 5 && col < 2) return 'orange';
  return 'cyan';
}

export default function GalleryPage() {
  return (
    <div className="gallery-wrapper">
      {images.map((img, i) => (
        <div key={i} className="img-box" data-group={img.group}>
          <Image
            src="/assets/gallery/arena/1.jpg"
            alt={`Image ${i + 1}`}
            // fill
            width={100}
            height={100}
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 18vw"
            priority={i < 10}
          />
        </div>
      ))}

      {/* Borders */}
      <div className="group-border" data-group="blue" style={{ gridColumn: '1 / span 3', gridRow: '1 / span 2' }}></div>
      <div className="group-border" data-group="red" style={{ gridColumn: '4 / span 2', gridRow: '1 / span 3' }}></div>
      <div className="group-border" data-group="pink" style={{ gridColumn: '1 / span 3', gridRow: '3 / span 3' }}></div>
      <div className="group-border" data-group="green" style={{ gridColumn: '4 / span 2', gridRow: '4 / span 2' }}></div>
      <div className="group-border" data-group="orange" style={{ gridColumn: '1 / span 2', gridRow: '6 / span 3' }}></div>
      <div className="group-border" data-group="cyan" style={{ gridColumn: '3 / span 3', gridRow: '6 / span 3' }}></div>
    </div>
  );
}
