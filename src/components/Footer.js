import linkedinLogo from '../images/317750_linkedin_icon.png';
import githubLogo
  from '../images/317712_code repository_github_repository_resource_icon.png';

export default function Footer() {
  return (
    <footer>
      <p style={ { marginTop: '20px' } }>
        © 2024
        {' '}
        <a href="https://github.com/joaopedroc-araujo">João Pedro Costa Araujo</a>
      </p>
      <div
        style={ {
          display: 'flex',
          flexDirection: 'row',
          marginTop: '10px',
          marginBottom: '10px' } }
      >
        <a href="https://www.linkedin.com/in/jpcostaaraujo/">
          <img src={ linkedinLogo } alt="LinkedIn Logo" width="35" />
        </a>
        <a href="https://github.com/joaopedroc-araujo">
          <img
            src={ githubLogo }
            alt="Github Logo"
            width="35"
          />
        </a>
      </div>
    </footer>
  );
}
