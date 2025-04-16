import './ResetButton.css';

export default function ResetButton({ onClick }) {
    return (
      <button onClick={onClick} id="reset-button">
        Réinitialiser les filtres
      </button>
    );
  }