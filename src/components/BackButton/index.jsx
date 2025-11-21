import { useNavigate } from 'react-router-dom';
import { ButtonBack } from './styles';

export function BackButton({ to, children }) {
    const navigate = useNavigate();

    function handleBack() {
        if (to) {
            navigate(to);      // Vai para rota específica
        } else {
            navigate(-1);      // Volta para página anterior
        }
    }

    return (
        <ButtonBack onClick={handleBack}>
            {children || "← Voltar"}
        </ButtonBack>
    );
}
