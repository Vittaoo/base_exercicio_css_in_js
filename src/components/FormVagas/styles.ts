import styled from 'styled-components'

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input {
      font-size: 20px;
    }

    button {
      margin-left: 0px;
    }
  }
`
export default Formulario

export const Botao = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  width: 100%;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  width: 100%;
`
