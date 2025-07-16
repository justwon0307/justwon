"use client";

import styled from "styled-components";

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  width: 100%;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    margin: 16px 0 8px 0;
    font-family: sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  label {
    margin-top: 12px;
    font-weight: bold;
  }

  input {
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 4px;
  }

  button.back {
    align-self: flex-start;
    cursor: pointer;
  }

  button.submit {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  p.error {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.error};
    margin: 8px 0 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    button {
      flex: 1;
      padding: 8px 16px;
      color: white;
      border: none;
      border-radius: 4px;
    }

    button:disabled {
      background-color: ${({ theme }) => theme.colors.gray300};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    font-family: sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
