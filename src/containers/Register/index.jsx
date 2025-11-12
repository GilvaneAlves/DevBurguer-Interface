import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';

import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title,
    Link,
} from "./styles";
import { Button } from "../../components/Button";
import Logo from "../../assets/logo.png";
import { toast } from "react-toastify";

export function Register() {
    const navigate = useNavigate();

    const schema = Yup.object({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
            .email("Por favor, insira um e-mail válido.")
            .required("O e-mail é obrigatório."),
        password: Yup.string()
            .min(6, "A senha deve ter pelo menos 6 caracteres.")
            .required("A senha é obrigatória."),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "As senhas devem ser iguais")
            .required("Confirmação de senha é obrigatória."),
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const { status } = await api.post(
                "/users",
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                {
                    validateStatus: () => true,
                }
            );

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
                toast.success("Conta criada com sucesso!");
            } else if (status === 400) {
                toast.error("Email já cadastrado! Faça login para continuar.");
            } else {
                throw new Error();
            }
            console.log(status)
        } catch (error) {
            toast.error("Erro no servidor. Tente novamente mais tarde.");
        }
    };
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-dev-burguer" />
            </LeftContainer>

            <RightContainer>
                <Title>Criar conta</Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar Conta</Button>
                </Form>

                <p>
                    Já possui conta? <Link to='/login'>Clique aqui</Link>
                </p>
            </RightContainer>
        </Container>
    );
}
