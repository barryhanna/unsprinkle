import React from 'react';
import styled from 'styled-components/macro';

const generateSrcSet = (imageFilename) => {
  const extensions = {
    '.avif': '1x',
    '.jpeg': '1x',
    '@2x.avif': '2x',
    '@2x.jpg': '2x',
    '@3x.avif': '3x',
    '@3x.jpg': '3x',
  };
  const nameWithoutExtension = imageFilename.split('.')[0];
  const srcSet = Object.keys(extensions).map(
    (ext) => `${nameWithoutExtension}${ext} ${extensions[ext]}`
  );
  return srcSet.join(', ');
};

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src} srcSet={generateSrcSet(src)} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
