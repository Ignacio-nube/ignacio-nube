import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

const Card = ({ title, description, tags, link, image }: CardProps) => {
  return (
    <StyledWrapper onClick={() => link && window.open(link, '_blank')}>
      <div className="card">
        {image && (
          <div className="image-container">
            <img src={image} alt={title} />
          </div>
        )}
        <div className="main-content">
          <div className="header">
            <span>Project</span>
          </div>
          <p className="heading">{title}</p>
          <p className="description">{description}</p>
          <div className="categories">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  height: 100%;

  .card {
    width: 100%;
    height: auto;
    min-height: 100%;
    padding: 0;
    color: white;
    background: linear-gradient(rgba(33, 33, 33, 0.85), rgba(33, 33, 33, 0.85)) padding-box,
                linear-gradient(145deg, transparent 35%, #319795, #4FD1C5) border-box;
    border: 2px solid transparent;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform-origin: right bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .image-container {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover .image-container img {
    transform: scale(1.1);
  }

  .card .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .card .header span:first-child {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
  }

  .card .heading {
    font-size: 24px;
    margin: 16px 0 8px;
    font-weight: 600;
    color: #E6FFFA;
  }

  .card .description {
    font-size: 14px;
    color: #A0AEC0;
    margin-bottom: 16px;
    line-height: 1.5;
    flex: 1;
  }

  .card .categories {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .card .categories span {
    background-color: #319795;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
    color: white;
  }

  .card:hover {
    rotate: 2deg;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }`;

export default Card;
