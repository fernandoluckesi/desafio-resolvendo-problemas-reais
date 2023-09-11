import { useState } from "react";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:

  Bom, o que eu adicionei aqui, que estava faltando, era uma key como props. Adicionar essa key a cada componente de uma lista é uma boa prática, pois ajuda a otimizar o processo de renderização e identificar elementos de maneira eficiente

*/

export const Desafio2 = () => {
  const [list, setList] = useState([1, 2]);

  return (
    <ul>
      {list.map((item) => (
        <li key={item}>item: {item}</li>
      ))}
    </ul>
  );
};
