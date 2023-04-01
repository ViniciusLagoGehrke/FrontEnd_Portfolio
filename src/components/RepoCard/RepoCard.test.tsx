import { render, screen, fireEvent } from '@testing-library/react';
import RepoCard from './RepoCard';

const userName = 'ViniciusLagoGehrke';
const repoMock = {
  id: 1,
  name: 'PWA_Weather',
  topics: ['api-rest', 'pwa', 'react'],
  description:
    'Progressive Web Weather App using React and Open Weather Map API',
  homepage: 'https://pwa-weather-viniciuslagogehrke.vercel.app/',
  html_url: 'https://github.com/ViniciusLagoGehrke/PWA_Weather',
  owner: {
    html_url:""
  }
};

describe('RepoCard', () => {
  beforeEach(() => {
    render(<RepoCard userName={userName} repo={repoMock} />);
  });

  it('renders repo name and description', () => {
    const heading = screen.getByRole('heading');
    const description = screen.getByText(repoMock.description);

    expect(heading).toHaveTextContent(repoMock.name);
    expect(description).toBeInTheDocument();
  });

  it('renders all repo topics', () => {
    expect(screen.getByText(repoMock.topics[0])).toBeInTheDocument();
    expect(screen.getByText(repoMock.topics[1])).toBeInTheDocument();
    expect(screen.getByText(repoMock.topics[2])).toBeInTheDocument();
  });

  it("renders a link with text 'Visit' and the repo's url", async () => {
    const visitLink = screen.getByRole('link', { name: 'Visit' });

    expect(visitLink).toBeInTheDocument();
    expect(visitLink).toHaveAttribute('href', repoMock.homepage);
  });

  it("renders a link with text 'Check Code' and the repo's url", async () => {
    const codeLink = screen.getByRole('link', { name: 'Check Code' });

    expect(codeLink).toBeInTheDocument();
    expect(codeLink).toHaveAttribute('href', repoMock.html_url);
  });
});
