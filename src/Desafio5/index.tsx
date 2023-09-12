import React from "react";
import { Item } from "./Item";
import { useDesafio5Controller } from "./useDesafio5Controller";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e melhore a performance.

  Obs. considere o componente filho também para resolver esse desafio

  Comentários sobre a sua solução:

  Utilizei o useMemo envolver o componente Item. Com isso se cria uma verão memorizada do componente para que quando o componente pai for renderizado de novo o componente Item não será caso nenhum estado seu tenha sido alterado. Assim, cada vezes que for clicado em "adiciona + 1 item na lista" o componente Item não será renderizado novamente, assim tornando-o mais eficiente. 

*/

export function Desafio5() {
  const { list, addItem, numero, parOuImpar } = useDesafio5Controller();
  return (
    <>
      <button onClick={addItem} data-testid="btn1">
        adiciona + 1 item na lista
      </button>
      <span data-testid="size">{list.length}</span>
      <ul>
        {list.map((item, index) => (
          <Item valor={item} key={index} parOuImpar={parOuImpar} />
        ))}
      </ul>
      <p>
        {numero} é  {parOuImpar(numero)}
      </p>
    </>
  );
}
